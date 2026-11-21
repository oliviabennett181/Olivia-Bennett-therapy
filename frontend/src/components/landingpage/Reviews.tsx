"use client";

import { useState } from "react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  avatarBg?: string;
  date: string;
  verified?: boolean;
  rating: number;
  text: string;
}

function getInitials(name: string): string {
  const parts = name
    .split(/\s+/)
    .filter((part) => /^[A-Za-z0-9]/.test(part));

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Emily H",
    avatar: "/customer-name2.jpg",
    avatarBg: "bg-teal-700",
    date: "Nov 20, 2026",
    rating: 5,
    text: "A very calming experience from beginning to end. Olivia-Bennett listened to the areas where I had tension and adjusted the session perfectly. I felt so much better afterward and will definitely return.",
  },
  {
    id: 2,
    name: "Michael R",
    avatar: "/customer-name3.jpg",
    avatarBg: "bg-teal-700",
    date: "Nov 19, 2026",
    verified: true,
    rating: 4,
    text: "Very good at what she does, but not always available.",
  },
  {
    id: 3,
    name: "Mark & Jennifer S",
    avatar: "",
    date: "Nov 18, 2026",
    verified: true,
    rating: 5,
    text: "We had a wonderful couples massage experience. Olivia-Bennett was warm, professional, and made us both feel comfortable from the moment we arrived.",
  },
];

const MORE_REVIEWS: Review[] = [
  {
    id: 4,
    name: "Bryan S",
    avatar: "/customer-name1.jpg",
    date: "Nov 16, 2026",
    verified: true,
    rating: 5,
    text: "Professional, caring and highly recommended.",
  },
  {
    id: 5,
    name: "Chris M",
    avatar: "/customer-name4.jpg",
    avatarBg: "bg-teal-700",
    date: "Nov 5, 2026",
    verified: true,
    rating: 5,
    text: "Very pleasant experience. Olivia-Bennett has a calming personality and great technique. Left feeling refreshed and much less stressed.",
  },
  {
    id: 6,
    name: "David K",
    avatar: "/customer-name5.jpg",
    avatarBg: "bg-teal-700",
    date: "Oct 30, 2026",
    verified: true,
    rating: 5,
    text: "Friendly and outstanding service. Will definitely return.",
  },
  {
    id: 7,
    name: "Kevin L",
    avatar: "/customer-name6.jpg",
    date: "Sept 15, 2026",
    rating: 5,
    text: "I felt relaxed.",
  },
  {
    id: 8,
    name: "John West",
    avatar: "/customer-name7.jpg",
    date: "Sept 28, 2026",
    rating: 5,
    text: "Got a massage from Olivia. She was very nice and was very good at paying attention to applying the right amount of pressure I had asked for. She was attentive the whole time and made sure to give me the full 60 mins!",
  },
  {
    id: 9,
    name: "Brian M",
    avatar: "",
    date: "Oct 15, 2026",
    rating: 5,
    text: "Absolutely amazing service by Olivia! Very good price as well for the hot stones. Can’t wait to go back.",
  },
  {
    id: 10,
    name: "Dean S",
    avatar: "",
    date: "Oct 20, 2026",
    rating: 5,
    text: "My first experience was amazing. I came here last minute and was able to get a one-hour massage. She was very respectful and kind. I'll definitely be coming back.",
  },
  {
    id: 11,
    name: "Danny M",
    avatar: "",
    date: "Nov 4, 2026",
    rating: 5,
    text: "Had a swell time she was gentle and tender.Her hands are so soft, felt like she knew the right places to touch at the right time. Would definitely be visiting again.",
  },
];

interface ReviewsProps {
  onBookNow: () => void;
}

export default function Reviews({ onBookNow }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [hasLoadedMore, setHasLoadedMore] = useState<boolean>(false);

  const handleLoadMore = () => {
    setReviews((prev) => [...prev, ...MORE_REVIEWS]);
    setHasLoadedMore(true);
  };

  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="reviews" className="py-24 px-6 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
          Reviews
        </h2>

        {/* WRITE A REVIEW BUTTON */}
        <button className="w-full bg-[#ea7a24] hover:bg-[#d66b1a] text-white py-4 rounded-xl text-lg font-medium transition shadow-sm">
          Write a review
        </button>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 text-stone-700 appearance-none focus:outline-none focus:border-orange-500 shadow-sm cursor-pointer">
              <option value="4star">4 Stars</option>
              <option value="5star">5 Stars</option>
              <option value="all">All Stars</option>
            </select>
          </div>
          <div className="relative">
            <select className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 text-stone-700 appearance-none focus:outline-none focus:border-orange-500 shadow-sm cursor-pointer">
              <option value="oldest">Oldest</option>
              <option value="newest">Newest</option>
              <option value="highest">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {sortedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {rev.avatar ? (
                    rev.avatar.startsWith("/") ? (
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 ${
                          rev.avatarBg || "bg-stone-800"
                        } text-white flex items-center justify-center rounded-full font-serif font-medium text-base`}
                      >
                        {rev.avatar}
                      </div>
                    )
                  ) : (
                    <div className="w-12 h-12 bg-stone-800 text-white flex items-center justify-center rounded-full font-serif font-medium text-base">
                      {getInitials(rev.name)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-stone-900">{rev.name}</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {rev.date}
                      {rev.verified && (
                        <span className="text-emerald-600 font-medium ml-2 inline-flex items-center gap-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                          Verified
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="text-amber-400 mb-4 text-sm tracking-wider">
                  {"★".repeat(rev.rating)}
                  {"☆".repeat(5 - rev.rating)}
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">{rev.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE REVIEWS BUTTON */}
        {!hasLoadedMore && (
          <div className="flex justify-center pt-6">
            <button
              onClick={handleLoadMore}
              className="bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 px-8 py-3.5 rounded-xl text-sm font-medium transition shadow-sm"
            >
              Load more reviews
            </button>
          </div>
        )}

        {/* BOOK NOW BANNER BELOW REVIEWS */}
        <div className="pt-8" id="payments">
          <button
            onClick={onBookNow}
            className="w-full bg-[#ea7a24] hover:bg-[#d66b1a] text-white text-center py-4 rounded-xl text-lg font-medium transition shadow-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
