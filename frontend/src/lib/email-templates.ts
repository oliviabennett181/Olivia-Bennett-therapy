import type {
  BookingPayload,
  ContactPayload,
  GiftCardBalancePayload,
} from "@/types/api";

/** Prevents form input from breaking the email HTML. */
export function escapeHtml(value: string | undefined | null): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const DIVIDER =
  '<hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />';
const FOOTER =
  '<br /><p style="font-size: 12px; color: #777;">This inquiry was sent from the Therapy by Olivia-Bennett website.</p>';

function shell(heading: string, content: string): string {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #ea7a24;">${heading}</h2>
      ${DIVIDER}
      ${content}
      ${FOOTER}
    </div>
  `;
}

function field(label: string, value: string | undefined | null): string {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "Not provided")}</p>`;
}

export function contactEmailHtml(data: ContactPayload): string {
  return shell(
    "New Website Inquiry",
    `${field("Name", data.name)}
     ${field("Email", data.email)}
     ${field("Phone", data.phone)}
     ${field("Service Type", data.type)}
     ${field("Subject", data.subject)}
     <br />
     <p><strong>Message:</strong></p>
     <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #ea7a24; white-space: pre-wrap;">
       ${escapeHtml(data.message)}
     </div>`,
  );
}

export function bookingEmailHtml(data: BookingPayload): string {
  return shell(
    "New Appointment Booking",
    `${field("Full Name", data.fullName)}
     ${field("Email", data.email)}
     ${field("Phone", data.phone)}
     ${field("Service", data.service)}
     ${field("Duration", data.duration)}
     ${field("Date", data.date)}
     ${field("Time Slot", data.time)}
     ${field("Preferred Time", data.preferredTime)}
     ${field("Special Requests", data.specialRequests)}`,
  );
}

export function giftCardBalanceEmailHtml(data: GiftCardBalancePayload): string {
  return shell(
    "Gift Card Balance Check Inquiry",
    `${field("Card Number", data.cardNumber)}
     ${field("Selected Value", data.amount)}
     ${field("Submitted Email", data.email)}
     ${field("Name", data.name)}
     ${field("Phone", data.phone)}`,
  );
}
