"use client"

import Link from "next/link";

const Logo = () => {
  return (
   <div className="absolute left-1/2 transform -translate-x-1/2">
      <Link href="/">
        <img
          src="/assets/logo/logo_1.png"
          alt="Site Logo"
          width={120}
          height={80}
          className="w-auto h-16 p-1" 
        />
      </Link>
    </div>
  );
};

export default Logo;
