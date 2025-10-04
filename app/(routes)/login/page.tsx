"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF4]">
      <div className="mt-45 mb-10 w-full max-w-md bg-white rounded-xl shadow-sm p-8">
          <div className="mb-3">
                <img src='./assets/image.png' alt="Logo" className="Logo" />
            </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-primary mb-8">Login</h2>

        {/* Form */}
        <form className="space-y-5">
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
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-300" />
              Remember me
            </label>
            <Link href="/forgot-password" className="hover:underline">
              Forgot Password ?
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaFacebookF className="text-[#4267B2]" size={18} /> Continue with Facebook
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-600 mt-6">
          don’t have account?{" "}
          <Link href="/signup" className="font-semibold text-primary hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
