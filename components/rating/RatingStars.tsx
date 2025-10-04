"use client";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < Math.round(rating)
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}
