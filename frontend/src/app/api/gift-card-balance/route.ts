import { NextResponse } from "next/server";
import { giftCardBalanceEmailHtml } from "@/lib/email-templates";
import { isRequestAllowed } from "@/lib/rate-limit";
import { FROM_EMAIL, getReceiverEmail, getResendClient } from "@/lib/resend";
import {
  errorResponse,
  getClientIdentifier,
  logError,
  sanitizeHeaderValue,
} from "@/lib/utils";
import { giftCardBalanceSchema } from "@/types/api";

export async function POST(request: Request) {
  if (!isRequestAllowed(`gift-card:${getClientIdentifier(request)}`)) {
    return errorResponse("Too many requests. Please try again shortly.", 429);
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return errorResponse("Invalid JSON body.", 400);
  }

  const parsed = giftCardBalanceSchema.safeParse(rawBody);
  if (!parsed.success) {
    return errorResponse(
      parsed.error.issues[0]?.message ?? "Card number is required.",
      400,
    );
  }

  const data = parsed.data;

  try {
    const { error } = await getResendClient().emails.send({
      from: FROM_EMAIL,
      to: getReceiverEmail(),
      replyTo: data.email,
      subject: `Gift Card Balance Inquiry: ${sanitizeHeaderValue(data.cardNumber)}`,
      html: giftCardBalanceEmailHtml(data),
    });

    if (error) {
      logError("Resend gift card error:", error);
      return errorResponse("Failed to submit. Please try again.", 500);
    }

    // This is an inquiry only. No gift card system is connected, so no balance
    // is looked up or verified here.
    return NextResponse.json({
      success: true,
      message: "Your gift card balance check request has been submitted!",
      balanceVerified: false,
      note: "No balance has been verified by this request.",
    });
  } catch (err) {
    logError("Error sending gift card email:", err);
    return errorResponse("Failed to submit. Please try again.", 500);
  }
}
