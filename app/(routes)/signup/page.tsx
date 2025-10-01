"use client";

import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF4]">
      <div className="mt-45 mb-10  w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        {/* Logo */}
        <div className="mb-3 flex justify-center">
          <img src="./assets/image.png" alt="Logo" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>

        {/* Form */}
        <form className="space-y-5">
          {/* First Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
            />
            {/* <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button> */}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 outline-none"
            />
            {/* <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button> */}
          </div>

          {/* Signup button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#4B5D47] text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social signup */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition">
            <FaFacebookF className="text-[#4267B2]" size={18} /> Continue with Facebook
          </button>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
