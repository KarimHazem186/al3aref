import React from "react";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <div>
      <h4 className="font-medium mb-4">CONNECT WITH US</h4>
      <p className="text-xs mb-1">
        Sign up for weekly emails with new listings, sales and more!
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="Yes,here's email"
          className="text-sm px-3 py-2 border border-border rounded-md w-full focus:outline-none focus:ring focus:ring-primary placeholder:text-xm"
        />
        <button
          type="submit"
          className="mx-2 px-3 py-2 border rounded-md hover:bg-black/90 transition-colors flex items-center justify-center hover:text-white"
          aria-label="Subscribe"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      <p className="text-xs mt-4">
        By entering your email, you agree to our User Agreement and Privacy Policy
      </p>
    </div>
  );
};

export default Newsletter;
