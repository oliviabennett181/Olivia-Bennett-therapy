import { NextResponse } from "next/server";
import { bookingEmailHtml } from "@/lib/email-templates";
import { isRequestAllowed } from "@/lib/rate-limit";
import { FROM_EMAIL, getReceiverEmail, getResendClient } from "@/lib/resend";
import { errorResponse, getClientIdentifier, logError } from "@/lib/utils";
import { bookingSchema } from "@/types/api";

export async function POST(request: Request) {
  if (!isRequestAllowed(`booking:${getClientIdentifier(request)}`)) {
    return errorResponse("Too many requests. Please try again shortly.", 429);
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return errorResponse("Invalid JSON body.", 400);
  }

  const parsed = bookingSchema.safeParse(rawBody);
  if (!parsed.success) {
    return errorResponse(
      parsed.error.issues[0]?.message ?? "Invalid booking details.",
      400,
    );
  }

  const data = parsed.data;

  try {
    const { error } = await getResendClient().emails.send({
      from: FROM_EMAIL,
      to: getReceiverEmail(),
      replyTo: data.email,
      subject: "New Appointment Booking",
      html: bookingEmailHtml(data),
    });

    if (error) {
      logError("Resend booking error:", error);
      return errorResponse(
        "Failed to submit booking. Please try again.",
        500,
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your appointment request has been submitted successfully.",
    });
  } catch (err) {
    logError("Error sending booking email:", err);
    return errorResponse("Failed to submit booking. Please try again.", 500);
  }
}
