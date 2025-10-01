"use client";

import Link from "next/link";
import { useState } from "react";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
    console.log("Code entered:", code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF4] px-4" style={{marginBottom:"-150px"}}>
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        {/* Back + Title */}
        <div className="flex items-center gap-2 mb-4">
          <Link href="/forgot-password" className="text-gray-600 hover:text-black text-lg">
            ←
          </Link>
          <h2 className="text-xl font-bold">Enter Verification Code</h2>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-6">
          We’ve sent a 6-digit code to your email. Please enter it below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Verification Code
            </label>
            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-center tracking-widest text-lg font-semibold outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#4B5D47] text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Verify Code
          </button>
        </form>

        {/* Resend option */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Didn’t receive the code?{" "}
          <button
            onClick={() => alert("Code resent!")}
            className="font-semibold hover:underline text-[#4B5D47]"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
