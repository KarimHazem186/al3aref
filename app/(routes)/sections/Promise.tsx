"use client";

import React from "react";
import {
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
  Store,
  Scale,
  Truck,
} from "lucide-react";

const promises = [
  { icon: ShieldCheck, text: "Authenticity Guarantee" },
  { icon: BadgeCheck, text: "Money-Back Guarantee" },
  { icon: RotateCcw, text: "24-Hour Cancellation" },
  { icon: Store, text: "Vetted Professional Sellers" },
  { icon: Scale, text: "Price-Match Guarantee" },
  { icon: Truck, text: "Trusted Global Delivery" },
];

const Promise = () => {
  return (
    <section className="bg-[#c7d9d9] w-full mx-auto flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-10 md:py-16">
      {/* Left Column */}
      <div className="w-full md:w-1/2 md:pr-10 mb-8 md:mb-0">
        <h2
          className="text-3xl md:text-4xl font-serif mb-3 text-gray-900"
          style={{ fontFamily: `"Cardinal Classic Short", Georgia, serif` }}
        >
          The 1stDibs <span className="italic">Promise</span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed tracking-wide">
          We’re committed to your satisfaction and peace of mind with every
          purchase.
        </p>
        <a
          href="/about/promise/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-black underline underline-offset-4 hover:text-teal-900 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
        {promises.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-start group cursor-pointer transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
            >
              <Icon className="w-6 h-6 text-teal-900 mb-2 transition-transform duration-500 group-hover:rotate-6" />
              <span className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Promise;
