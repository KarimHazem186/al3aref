"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{marginBottom:"-150px"}}>
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF4] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        {!submitted ? (
          <>
            {/* Back + Title */}
            <div className="flex items-center gap-2 mb-4">
              <Link href="/login" className="text-gray-600 hover:text-black text-lg">
                ←
              </Link>
              <h2 className="text-xl font-bold">Forgot Password</h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm mb-6">
              Please enter your email to reset the password
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4B5D47] text-white rounded-md font-semibold hover:opacity-90 transition"
              >
                Reset Password
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Back + Title */}
            <div className="flex items-center gap-2 mb-4">
              <Link href="/login" className="text-gray-600 hover:text-black text-lg">
                ←
              </Link>
              <h2 className="text-xl font-bold">Check Your Email</h2>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              We’ve sent a verification code to your email. Please check your inbox
              and use the code to reset your password.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-3 bg-[#4B5D47] text-white rounded-md font-semibold hover:opacity-90 transition"
            >
              Resend Email
            </button>
          </>
        )}
      </div>
      </div>
      </div>
  );
}
