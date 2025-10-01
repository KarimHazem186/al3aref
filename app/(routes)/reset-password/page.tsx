"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("New password set:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF4] px-4"style={{marginBottom:"-150px"}}>
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        {/* Back + Title */}
        <div className="flex items-center gap-2 mb-4">
          <Link href="/verify-code" className="text-gray-600 hover:text-black text-lg">
            ←
          </Link>
          <h2 className="text-xl font-bold">Set New Password</h2>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Please enter your new password below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#4B5D47] text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Save New Password
          </button>
        </form>
      </div>
    </div>
  );
}
