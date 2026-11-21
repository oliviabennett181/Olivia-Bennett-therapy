"use client";

import { useEffect } from "react";

interface GiftCardSuccessPopupProps {
  amount: string;
  onClose: () => void;
}

export default function GiftCardSuccessPopup({
  amount,
  onClose,
}: GiftCardSuccessPopupProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const formattedAmount = `$${Number(amount || 0).toFixed(2)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-card-success-title"
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center animate-[popup-fade-in_220ms_ease-out]"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-[#e8f5e9] flex items-center justify-center mb-6">
          <svg
            className="w-9 h-9 text-[#527d58]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2
          id="gift-card-success-title"
          className="font-serif text-2xl md:text-3xl text-stone-900 mb-4"
        >
         Your Gift Card Balance!
        </h2>

         <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-3">
          Available Balance
        </p>

        <p className="text-4xl font-bold text-[#ea7a24] mb-4">
          {formattedAmount}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#ea7a24] hover:bg-[#d66a1a] text-white py-3 rounded-xl font-medium text-sm transition shadow-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
