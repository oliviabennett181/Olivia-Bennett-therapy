"use client";

import { useCallback, useRef, useState } from "react";
import { postJson } from "@/lib/api-client";

const GIFT_CARD_ERROR = "Failed to submit. Please try again.";
const GIFT_CARD_SUCCESS =
  "Your gift card balance check request has been submitted!";

export interface GiftCardInquiryInput {
  cardNumber: string;
  amount?: string;
  email?: string;
  name?: string;
  phone?: string;
}

export function useGiftCardBalance() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const inFlight = useRef(false);

  /** The form accepts several cards, so each card is sent as its own inquiry. */
  const submitGiftCardBalance = useCallback(
    async (inquiries: GiftCardInquiryInput[]): Promise<boolean> => {
      if (inFlight.current || inquiries.length === 0) {
        return false;
      }

      inFlight.current = true;
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const results = await Promise.all(
          inquiries.map((inquiry) =>
            postJson("/api/gift-card-balance", inquiry, GIFT_CARD_ERROR),
          ),
        );
        setSuccess(results[0]?.message || GIFT_CARD_SUCCESS);
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : GIFT_CARD_ERROR);
        return false;
      } finally {
        inFlight.current = false;
        setIsLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  return { submitGiftCardBalance, isLoading, error, success, reset };
}
