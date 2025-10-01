import React from "react";
import { Globe } from "lucide-react";
import FooterLogo from "./FooterLogo";

const FooterBottom = () => {
  return (
    <div className="border-t pt-6 pb-12 px-4 text-xs mt-5">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Left side */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <p>© 1stDibs.com, Inc. 2025</p>
            <a href="#" className="hover:underline">User Agreement</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Do Not Sell My Info</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>

          <div className="flex flex-wrap gap-4">
            <span>Shop 1stDibs:</span>
            <a href="#" className="hover:underline">France</a>
            <a href="#" className="hover:underline">Germany</a>
            <a href="#" className="hover:underline">Italy</a>
            <a href="#" className="hover:underline">Spain</a>
            <a href="#" className="hover:underline">United States</a>
          </div>

          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="underline">Privacy Policy</a> and{" "}
            <a href="#" className="underline">Terms of Service</a> apply.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>EGYPT</span>
            <span className="mx-1">|</span>
            <span>ENGLISH (US)</span>
            <span className="mx-1">|</span>
            <span>$ USD</span>
          </div>
        </div>
      </div>

      {/* Logo bottom center */}
      <div className="flex justify-center mt-10">
        <FooterLogo />
      </div>
    </div>
  );
};

export default FooterBottom;
