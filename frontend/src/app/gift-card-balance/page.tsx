"use client";

import { useState } from "react";
import Link from "next/link";
import GiftCardSuccessPopup from "@/components/GiftCardSuccessPopup";
import { useGiftCardBalance } from "@/hooks/use-gift-card-balance";

interface GiftCardInput {
  id: number;
  cardNumber: string;
}

function isValidGiftCardNumber(value: string): boolean {
  return /^X[A-Za-z0-9]{15}$/.test(value);
}

function getGiftCardValidationMessage(value: string): string | null {
  if (value.length > 16) {
    return "Gift card number cannot exceed 16 characters.";
  }
  if (/[^A-Za-z0-9]/.test(value)) {
    return "Only letters and numbers are allowed.";
  }
  if (!value.startsWith("X")) {
    return "Gift card number must start with uppercase X.";
  }
  if (value.length < 16) {
    return "Gift card number must be exactly 16 characters long.";
  }
  return null;
}

export default function GiftCardBalancePage() {
  const [amount, setAmount] = useState<string>("");
  const [cards, setCards] = useState<GiftCardInput[]>([
    { id: 1, cardNumber: "" },
  ]);
  const {
    submitGiftCardBalance,
    isLoading: isSubmitting,
    error,
    success: successMsg,
    reset,
  } = useGiftCardBalance();
  const [validationError, setValidationError] = useState<string>("");
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [submittedAmount, setSubmittedAmount] = useState("");
  const errorMsg = validationError || error;
  const allCardsValid = cards.every((card) =>
    isValidGiftCardNumber(card.cardNumber),
  );
  const isCheckBalanceDisabled = isSubmitting || !allCardsValid || !amount;

  const addCard = () => {
    setCards((prev) => [...prev, { id: prev.length + 1, cardNumber: "" }]);
  };

  const handleCardChange = (id: number, value: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? { ...card, cardNumber: value.slice(0, 16) }
          : card,
      ),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setValidationError("");
    reset();
    setIsSuccessPopupOpen(false);

    // Validate Card Inputs
    const invalidCard = cards.find(
      (card) => !isValidGiftCardNumber(card.cardNumber),
    );

    if (invalidCard) {
      setValidationError(
        getGiftCardValidationMessage(invalidCard.cardNumber) ??
          "Please enter a valid gift card number.",
      );
      return;
    }

    const submitted = await submitGiftCardBalance(
      cards.map((card) => ({ cardNumber: card.cardNumber, amount })),
    );

    if (submitted) {
      setSubmittedAmount(amount);
      setIsSuccessPopupOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-stone-800 font-sans">
      {/* PAGE TITLE */}
      <section className="pt-28 pb-12 px-6 text-center max-w-4xl mx-auto space-y-3 md:pt-32">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
          Check Your Gift Card Balance
        </h1>
        <p className="text-stone-500 text-sm md:text-base font-light">
          Enter one or more gift card numbers below to instantly check available
          balances.
        </p>
      </section>

      {/* CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2b4c] tracking-tight">
            WHERE TO FIND YOUR CARD NUMBER
          </h2>
          <p className="text-stone-500 text-sm">
            The card number is used to check your gift card balance.
          </p>

          <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden aspect-[4/3] flex items-center justify-center">
            <img
              src="/gift-card-example.jpg"
              alt="Gift Card Example"
              className="w-full h-full object-cover scale-110 transition-transform"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="p-4 rounded-xl bg-green-50 text-green-700 text-sm border border-green-200">
              {successMsg}
            </div>
          )}

          {/* STEP 1 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-stone-800">
              1. Select Gift Card Value
            </h2>
            <p className="text-stone-500 text-sm">
              Please select the value of your gift card before checking the
              balance.
            </p>

            <select
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#ea7a24]/50 text-sm text-stone-700 shadow-sm"
            >
              <option value="">Select Amount</option>
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="150">$150</option>
              <option value="200">$200</option>
              <option value="250">$250</option>
              <option value="300">$300</option>
              <option value="350">$350</option>
              <option value="400">$400</option>
              <option value="450">$450</option>
              <option value="500">$500</option>
            </select>
          </div>

          {/* DYNAMIC CARD INPUTS */}
          {cards.map((card, index) => {
            const validationMessage = getGiftCardValidationMessage(
              card.cardNumber,
            );
            const isCardValid = isValidGiftCardNumber(card.cardNumber);

            return (
              <div
                key={card.id}
                className="bg-stone-50/50 border border-stone-200/80 rounded-2xl p-6 space-y-5"
            >
                <h3 className="text-lg font-bold text-stone-800">
                  Gift Card #{index + 1}
                </h3>
                <p className="text-stone-500 text-xs">
                  Enter your gift card details below.
                </p>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-stone-700">
                    Gift Card Number
                  </label>
                  <p className="text-stone-400 text-xs">
                    Enter the 16-character gift card number that starts with X.
                  </p>
                  <input
                    type="text"
                    maxLength={16}
                    placeholder="e.g. XYQ9MT6P9KWRQWHM"
                    value={card.cardNumber}
                    onChange={(e) => handleCardChange(card.id, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#ea7a24]/50 text-sm placeholder-stone-300 font-mono tracking-wider"
                  />
                  {card.cardNumber.length > 0 && validationMessage && (
                    <p className="text-xs text-red-600" role="alert">
                      {validationMessage}
                    </p>
                  )}
                  {isCardValid && (
                    <p className="text-xs text-emerald-600 flex items-center gap-1">
                      <span aria-hidden="true">✓</span>
                      Gift card number is valid.
                    </p>
                  )}
                </div>

                {/* REQUIREMENTS LIST */}
                <div className="bg-[#f0edfa] rounded-xl p-4 space-y-2 text-xs text-[#5233a6]">
                  <p className="font-bold mb-1">Gift Card Number Requirements</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        card.cardNumber.length === 16
                          ? "bg-[#5233a6] text-white border-transparent"
                          : "border-[#7414ca]"
                      }`}
                    >
                      ✓
                    </span>
                    <span>Be exactly 16 characters long.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        card.cardNumber.startsWith("X")
                          ? "bg-[#5233a6] text-white border-transparent"
                          : "border-[#7414ca]"
                      }`}
                    >
                      ✓
                    </span>
                    <span>Start with the letter X (uppercase).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        /^[A-Za-z0-9]*$/.test(card.cardNumber) &&
                        card.cardNumber !== ""
                          ? "bg-[#5233a6] text-white border-transparent"
                          : "border-[#7414ca]"
                      }`}
                    >
                      ✓
                    </span>
                    <span>Letters and numbers only (no spaces).</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ADD CARD BUTTON */}
          <button
            type="button"
            onClick={addCard}
            className="w-full py-3.5 border-2 border-dashed border-stone-300 hover:border-stone-400 rounded-2xl text-stone-600 font-medium text-sm transition bg-white"
          >
            + Add Another Gift Card
          </button>

          {/* ACTION BUTTONS */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-2.5 text-stone-600 hover:text-stone-900 font-medium text-sm transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isCheckBalanceDisabled}
              className={`px-8 py-3 rounded-xl font-medium text-sm transition shadow-sm ${
                isCheckBalanceDisabled
                  ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                  : "bg-black hover:bg-stone-800 text-white"
              }`}
            >
              {isSubmitting ? "Checking..." : "Check Balance"}
            </button>
          </div>
        </form>
      </main>

      {isSuccessPopupOpen && (
        <GiftCardSuccessPopup
          amount={submittedAmount || amount}
          onClose={() => setIsSuccessPopupOpen(false)}
        />
      )}
    </div>
  );
}
