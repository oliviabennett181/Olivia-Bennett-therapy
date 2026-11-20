import { NextResponse } from "next/server";
import { contactEmailHtml } from "@/lib/email-templates";
import { isRequestAllowed } from "@/lib/rate-limit";
import { FROM_EMAIL, getReceiverEmail, getResendClient } from "@/lib/resend";
import {
  errorResponse,
  getClientIdentifier,
  logError,
  sanitizeHeaderValue,
} from "@/lib/utils";
import { contactSchema } from "@/types/api";

export async function POST(request: Request) {
  if (!isRequestAllowed(`contact:${getClientIdentifier(request)}`)) {
    return errorResponse("Too many requests. Please try again shortly.", 429);
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return errorResponse("Invalid JSON body.", 400);
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return errorResponse(
      parsed.error.issues[0]?.message ?? "Invalid form data.",
      400,
    );
  }

  const data = parsed.data;

  try {
    const { error } = await getResendClient().emails.send({
      from: FROM_EMAIL,
      to: getReceiverEmail(),
      replyTo: data.email,
      subject: `New Form Submission: ${sanitizeHeaderValue(data.subject || "Website Contact Form")}`,
      html: contactEmailHtml(data),
    });

    if (error) {
      logError("Resend contact error:", error);
      return errorResponse(
        "Failed to send email message. Please try again.",
        500,
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent and received successfully.",
    });
  } catch (err) {
    logError("Error sending contact email:", err);
    return errorResponse(
      "Failed to send email message. Please try again.",
      500,
    );
  }
}
