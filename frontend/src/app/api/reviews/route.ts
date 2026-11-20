import { NextResponse } from "next/server";
import type { Review } from "@/types/api";

const reviews: Review[] = [
  {
    id: 1,
    name: "Jay Will",
    date: "Sep 24, 2026",
    rating: 5,
    text: "Super friendly, great conversation...",
  },
  {
    id: 2,
    name: "Lucas",
    date: "Sep 22, 2026",
    rating: 5,
    text: "She looked even better in person...",
  },
];

export function GET() {
  return NextResponse.json({ reviews });
}
