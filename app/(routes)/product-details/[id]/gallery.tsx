"use client";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full lg:w-1/2">
      <div className="rounded-2xl overflow-hidden border">
        <img
          src={images[selected]}
          alt="Product"
          className="w-full h-[420px] object-cover"
        />
      </div>
      <div className="flex gap-3 mt-3 justify-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            onClick={() => setSelected(i)}
            className={`w-20 h-20 rounded-lg border cursor-pointer object-cover transition ${
              selected === i ? "border-green-700" : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
