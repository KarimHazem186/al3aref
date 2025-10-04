"use client";
import { useState } from "react";

interface QuantitySelectorProps {
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
    onChange?.(val);
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden">
      <button
        onClick={() => handleChange(quantity - 1)}
        className="px-3 py-1 text-lg font-semibold hover:bg-gray-100"
      >
        -
      </button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        className="w-12 text-center outline-none"
      />
      <button
        onClick={() => handleChange(quantity + 1)}
        className="px-3 py-1 text-lg font-semibold hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
