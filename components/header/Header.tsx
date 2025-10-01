"use client";

import React, { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu, Globe } from "lucide-react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between lg:relative">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1">
            <div className="relative inline-block w-full max-w-[220px] focus-within:max-w-[400px] transition-all duration-500">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-10 px-4 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Logo */}
          <Logo />

          {/* Right Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <button className="hover:underline">Log In</button>
              <span className="text-gray-400">|</span>
              <button className="hover:underline">Sign Up</button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Globe className="h-5 w-5" />
              </button>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 lg:hidden flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-10 px-4 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav showNav={showNav} />

        {/* Mobile Sidebar */}
        {isMenuOpen && <MobileSidebar onClose={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
