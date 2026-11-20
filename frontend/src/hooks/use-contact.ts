"use client";

import { useCallback, useRef, useState } from "react";
import { postJson } from "@/lib/api-client";
import type { ApiResponse } from "@/lib/api-client";
import type { BookingPayload, ContactPayload } from "@/types/api";

const CONTACT_ERROR = "Failed to send message. Please try again.";
const BOOKING_ERROR = "Failed to submit booking. Please try again.";

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const inFlight = useRef(false);

  const submit = useCallback(
    async <TPayload extends object>(
      endpoint: string,
      payload: TPayload,
      fallbackError: string,
      fallbackSuccess: string,
    ): Promise<ApiResponse | null> => {
      if (inFlight.current) {
        return null;
      }

      inFlight.current = true;
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const result = await postJson(endpoint, payload, fallbackError);
        setSuccess(result.message || fallbackSuccess);
        return result;
      } catch (err) {
        setError(err instanceof Error ? err.message : fallbackError);
        return null;
      } finally {
        inFlight.current = false;
        setIsLoading(false);
      }
    },
    [],
  );

  const submitContact = useCallback(
    (payload: ContactPayload) =>
      submit(
        "/api/contact",
        payload,
        CONTACT_ERROR,
        "Thank you! Your message has been sent to my email.",
      ),
    [submit],
  );

  const submitBooking = useCallback(
    (payload: BookingPayload) =>
      submit(
        "/api/booking",
        payload,
        BOOKING_ERROR,
        "Your appointment request has been submitted successfully.",
      ),
    [submit],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  return { submitContact, submitBooking, isLoading, error, success, reset };
}
