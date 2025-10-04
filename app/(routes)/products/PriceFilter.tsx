"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const PriceFilter = () => {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);

    const {lang} =useLanguage()
    
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, maxPrice - 100); // يمنع التداخل
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, minPrice + 100); // يمنع التداخل
    setMaxPrice(value);
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsPriceOpen(!isPriceOpen)}
        className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b hover:bg-gray-100 transition-colors"
      >
        <span className="font-semibold text-sm tracking-wide text-primary">
          PRICE RANGE
        </span>
        {isPriceOpen ? (
          <ChevronUp size={18} className="text-gray-600" />
        ) : (
          <ChevronDown size={18} className="text-gray-600" />
        )}
      </button>

      {/* Body */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isPriceOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          {/* Slider */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            {/* Selected Range Highlight */}
            <div
              className="absolute h-2 bg-primary rounded-full"
              style={{
                left: `${(minPrice / 20000) * 100}%`,
                right: `${100 - (maxPrice / 20000) * 100}%`,
              }}
            />

            {/* Min Handle */}
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={minPrice}
              onChange={handleMinChange}
              className="absolute w-full h-2 bg-transparent appearance-none z-20 cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />

            {/* Max Handle */}
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={maxPrice}
              onChange={handleMaxChange}
              className="absolute w-full h-2 bg-transparent appearance-none z-10 cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Min: ${minPrice}</span>
            <span>Max: ${maxPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
