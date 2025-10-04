"use client";

import React, { useEffect, useState } from "react";
import { Menu, Globe, X } from "lucide-react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { useCart } from "../hooks/useCart";
import SearchHeader from "./SearchDesktop";
import HeaderActions from "./HeaderActions";
import SearchMobile from "./SearchMobile";
import FurnitureDropdown from "./dropdown/FurnitureDropdown";
import LightingDropdown from "./dropdown/LightingDropdown";
import DecorGiftsDropdown from "./dropdown/DecorGiftsDropdown";
import ArtDropdown from "./dropdown/ArtDropdown";
import JewelryDropdown from "./dropdown/JewelryDropdown";
import WatchesDropdown from "./dropdown/WatchesDropdown";
import FashionDropdown from "./dropdown/FashionDropdown";
import WorldOf1stDibsDropdown from "./dropdown/WorldOf1stDibsDropdown";
import { useLanguage } from "@/app/context/LanguageContext";

interface HeaderProps {
  onCartClick: () => void;
}

const navigationItems = [
  {
    label: "NEW ARRIVALS",
  },
  {
    label: "FURNITURE",
    children: ["Sofas", "Chairs", "Tables", "Beds", "Storage"],
    dropdown: <FurnitureDropdown />,
  },
  {
    label: "LIGHTING",
    children: ["Chandeliers", "Table Lamps", "Wall Lights"],
    dropdown: <LightingDropdown />,
  },
  {
    label: "DECOR & GIFTS",
    children: ["Vases", "Mirrors", "Rugs", "Cushions"],
    dropdown: <DecorGiftsDropdown />,
  },
  {
    label: "ART",
    children: ["Paintings", "Sculptures", "Photography"],
    dropdown: <ArtDropdown />,
  },
  {
    label: "JEWELRY",
    children: ["Rings", "Necklaces", "Bracelets"],
    dropdown: <JewelryDropdown />,
  },
  {
    label: "WATCHES",
    children: ["Luxury Watches", "Vintage Watches"],
    dropdown: <WatchesDropdown />,
  },
  {
    label: "FASHION",
    children: ["Men", "Women", "Accessories"],
    dropdown: <FashionDropdown />,
  },
  {
    label: "WORLD OF 1STDIBS",
    dropdown: <WorldOf1stDibsDropdown />,
  },
  {
    label: "SALE",
  },
];

const Header = ({ onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<any[]>([]);

  // const [lang, setLang] = useState<"en" | "ar">("en");

  const { lang, setLang } = useLanguage();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  const router = useRouter();
  const { itemCount } = useCart();

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 w-full bg-white border-b border-gray-200 transition-all  ${
        showNav ? "top-[30px]" : "top-[0px]"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between lg:relative">
          {/* Mobile menu icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded lg:hidden"
          >
            <Menu className="h-6 w-6 cursor-pointer" />
          </button>

          {/* Desktop Search (left, expandable) */}
          <SearchHeader />

          {/* Logo (center, fixed) */}
          <Logo />

          <HeaderActions
            onCartClick={onCartClick}
            // itemCount={cartItems.length}
            itemCount={itemCount}
            lang={lang}
            toggleLang={toggleLang}
          />
        </div>

        <SearchMobile />

        {/* Desktop navigation */}
        {showNav && (
          <div className="hidden lg:flex items-center justify-center gap-8 mt-4 relative animate-fade-in">
            <nav className="flex gap-8 relative hover:[&>div:not(:hover)]:opacity-50">
              {navigationItems.map(({ label, dropdown }) => (
                <div
                  key={label}
                  className="relative group transition-opacity duration-300"
                >
                  <button
                    className={`text-sm font-medium px-2 py-2 transition-colors duration-300 ${
                      label === "SALE"
                        ? "text-secondary font-semibold hover:opacity-70 cursor-pointer"
                        : "text-gray-700 hover:text-black hover:opacity-70 cursor-pointer"
                    }`}
                  >
                    {label}

                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </button>

                  {dropdown && (
                    <div className="absolute top-full ml-10 left-1/2 mt-1 transform -translate-x-1/2 min-w-[900px] bg-white border border-gray-200 shadow-xl z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300">
                      {dropdown}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Sidebar Menu (mobile only) */}
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden
    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 w-74 bg-white max-h-screen h-full shadow-md p-4 overflow-y-auto
    transform transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-6">
            {/* <button className="p-1 hover:bg-gray-100 rounded text-xs flex items-center gap-1">
              <Globe className="h-5 w-5" /> <span>EG</span> | $ USD
            </button> */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="p-1 hover:bg-gray-100 rounded flex items-center gap-1"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs font-medium">
                  {lang === "en" ? "EN" + "  / QAR" : "ع" + "  / ر.ق"}
                </span>
              </button>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            <p
              className="d-block p-2 text-xs font-semibold"
              style={{ backgroundColor: "#f1f1daff", fontWeight: "600" }}
            >
              CATEGORIES
            </p>

            {navigationItems.map(({ label, children }) => (
              <div key={label}>
                <button
                  onClick={() => children && toggleMenu(label)}
                  className={`flex justify-between items-center w-full text-left text-sm font-medium px-2 py-2 hover:bg-gray-100 rounded ${
                    label === "SALE"
                      ? "text-primary font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {label}
                  {children && (
                    <span className="text-xs">
                      {openMenu === label ? "−" : "+"}
                    </span>
                  )}
                </button>

                {children && (
                  <ul
                    className={`pl-6 mt-1 space-y-1 text-sm text-gray-600 
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      openMenu === label
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {children.map((child) => (
                      <li
                        key={child}
                        className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <hr className="my-3" />

          <p
            className="d-block p-2 text-xs font-semibold"
            style={{ backgroundColor: "#f1f1daff", fontWeight: "600" }}
          >
            ACCOUNT
          </p>

          <div className="flex items-center justify-center gap-2 text-sm pb-10 p-1">
            <button
              onClick={() => router.push("/login")}
              className="border py-1 px-6 mt-2 cursor-pointer hover:bg-primary hover:text-white transition duration-300"
            >
              LOGIN
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => router.push("/signup")}
              className="border py-1  px-6 mt-2 cursor-pointer hover:bg-primary hover:text-white transition duration-300"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
