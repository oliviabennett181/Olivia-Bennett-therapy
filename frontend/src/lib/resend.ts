import { Resend } from "resend";

export const FROM_EMAIL = "Therapy Website <onboarding@resend.dev>";

let resendClient: Resend | undefined;

/** Lazily creates one Resend client that is shared by every API route. */
export function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

/** Recipients are always taken from server configuration, never from the client. */
export function getReceiverEmail(): string {
  const receiver = process.env.RECEIVER_EMAIL;
  if (!receiver) {
    throw new Error("RECEIVER_EMAIL is not configured.");
  }
  return receiver;
}
