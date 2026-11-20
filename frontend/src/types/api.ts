import { z } from "zod";

const optionalText = z.string().trim().optional();
const email = z.string().trim().min(1).email();

export const contactSchema = z.object({
  name: z.string().trim().min(1),
  email,
  phone: optionalText,
  subject: optionalText,
  message: z.string().trim().min(1),
  type: optionalText,
});

export const bookingSchema = z.object({
  service: z.string().trim().min(1),
  duration: z.string().trim().min(1),
  date: optionalText,
  time: optionalText,
  preferredTime: optionalText,
  fullName: z.string().trim().min(1),
  email,
  phone: optionalText,
  specialRequests: optionalText,
});

export const giftCardBalanceSchema = z.object({
  cardNumber: z
    .string()
    .regex(
      /^X[A-Za-z0-9]{15}$/,
      "Gift card number must be 16 characters, start with X, and contain only letters and numbers.",
    ),
  amount: optionalText,
  email: email.optional(),
  name: optionalText,
  phone: optionalText,
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type BookingPayload = z.infer<typeof bookingSchema>;
export type GiftCardBalancePayload = z.infer<typeof giftCardBalanceSchema>;

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
}
