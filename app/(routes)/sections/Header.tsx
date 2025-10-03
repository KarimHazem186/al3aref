"use client";

import React, { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, Globe } from "lucide-react";
import NotificationBar from "./NotificationBar";
import { useCart } from "@/components/hooks/useCart";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();

  const { itemCount } = useCart();

  const [lang, setLang] = useState<"en" | "ar">("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const navigationItems = [
    "NEW ARRIVALS",
    "FURNITURE",
    "LIGHTING",
    "DECOR & GIFTS",
    "ART",
    "JEWELRY",
    "WATCHES",
    "FASHION",
    "WORLD OF 1STDIBS",
    "SALE",
  ];

  const navigationItem = [
    {
      label: "NEW ARRIVALS",
    },
    {
      label: "FURNITURE",
      dropdown: (
        <div className="absolute left-10 right-10  top-full bg-white h-80 shadow-lg p-6 text-sm z-50 w-screen">
          <div className="grid grid-cols-5 gap-8 px-6">
            {/* Example column */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Seating</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#000000ff" }}
                >
                  <a href="#">Sofas</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Chairs</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Armchairs</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Dining Room Chairs</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Seating</a>
                </li>
              </ul>
            </div>

            {/* Repeat for other columns */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Storage</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Cabinets</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Dressers</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Night Stands</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Bookcases</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Storage</a>
                </li>
              </ul>
            </div>

            {/* Repeat for rest... */}
            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Tables</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Dining Tables</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Coffee Tables</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Side Tables</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Desks</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Tables</a>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Shop by Style</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Mid Century Modern</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Art Deco</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Louis XVI</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Styles</a>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "-10px" }}>
              <h4 className="font-semibold mb-2">Shop by Creator</h4>
              <ul className="space-y-1 text-sm leading-[1.8] w-full">
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Milo Baughman</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Gio Ponti</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Le Corbusier</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">Ettore Sottsass</a>
                </li>
                <li
                  className=" font-sm mt-2 mb-3 hover:underline  "
                  style={{ fontWeight: "200", color: "#5f5d5dff" }}
                >
                  <a href="#">All Creators</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "LIGHTING",
      dropdown: (
        <div className="p-6 grid grid-cols-3 gap-8 text-sm max-w-screen-xl mx-auto">
          <div>
            <h4 className="font-semibold mb-3">Ceiling Lights</h4>
            <ul className="space-y-2 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Chandeliers
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Pendant Lights
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Flush Mounts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Lamps</h4>
            <ul className="space-y-2 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Table Lamps
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Floor Lamps
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Desk Lamps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop by Style</h4>
            <ul className="space-y-2 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Modern
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Industrial
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  Vintage
                </a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#" className="hover:underline">
                  All Styles
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "DECOR & GIFTS",
      dropdown: (
        <div className="p-6 grid grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Decor</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Vases</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Mirrors</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Rugs</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Clocks</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Gifts</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Candles</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Stationery</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Books</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Holiday</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Ornaments</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Wrapping Paper</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Gift Bags</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "ART",
      dropdown: (
        <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Paintings</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Abstract</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Landscape</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Portrait</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Modern</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sculptures</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Bronze</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Wood</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Ceramic</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Glass</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "JEWELRY",
      dropdown: (
        <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Necklaces</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Rings</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Bracelets</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Earrings</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop by Style</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Vintage</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Modern</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Minimalist</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Statement</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "WATCHES",
      dropdown: (
        <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Brands</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Rolex</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Omega</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Tag Heuer</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Cartier</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop by Type</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Automatic</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Quartz</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Dive</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Chronograph</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "FASHION",
      dropdown: (
        <div className="p-6 grid grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Clothing</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Dresses</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Tops</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Jackets</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Pants</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accessories</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Bags</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Belts</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Hats</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Scarves</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop by Style</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Casual</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Formal</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Streetwear</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">All Styles</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "WORLD OF 1STDIBS",
      dropdown: (
        <div className="p-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Our Story</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Press</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm line-height-[1.8]">
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Help Center</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Blog</a>
              </li>
              <li
                className=" font-sm mt-2 mb-3 hover:underline  "
                style={{ fontWeight: "200", color: "#5f5d5dff" }}
              >
                <a href="#">Events</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "SALE",
      
    },
  ];

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Always show nav when back at the very top
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
      {" "}
      <div className="container mx-auto px-4 py-3">
        {/* Row 1: Search | Logo (fixed center) | Actions */}
        <div className="flex items-center justify-between lg:relative">
          {/* Mobile menu icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Search (left, expandable) */}
          <div className="hidden lg:flex flex-1">
            <div className="relative inline-block w-full max-w-[400px]  transition-all duration-500 ease-in-out">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-10 px-4 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-500 ease-in-out"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Logo (center, fixed) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <svg
                style={{ width: "120px", height: "80px" }}
                className="w-auto h-6 fill-current text-black"
                role="img"
                viewBox="0 0 85 26.20541"
                aria-label="1stDibs"
              >
                <path d="M70.365 19.709v4.233a11.204 11.204 0 006.679 2.263c4.416 0 7.956-3.358 7.956-7.263 0-3.248-1.716-5.146-4.599-7.007l-3.613-2.336c-2.007-1.314-3.686-2.518-3.686-4.817 0-2.227 1.679-3.54 3.942-3.468 2.7.073 4.78 2.701 6.387 4.27V1.825A10.871 10.871 0 0077.518 0c-3.905-.036-6.97 2.3-6.97 5.986 0 3.175 1.86 4.708 4.744 6.496l3.321 2.044c2.117 1.314 3.686 2.92 3.686 5.548a4.642 4.642 0 01-4.854 4.708c-2.737 0-4.124-1.898-7.08-5.073M58.94 24.745c-1.569 0-2.81-.547-2.81-2.445V12.7h2.08c3.832 0 6.752 2.008 6.752 5.986 0 4.05-2.7 6.058-6.022 6.058M57.372 1.387c3.139 0 5.84 1.533 5.84 4.89 0 3.468-2.19 5.293-5.73 5.293h-1.35V1.387zm4.051 10.657c2.993-.876 4.781-2.883 4.781-5.766 0-3.869-3.248-5.986-8.832-5.986h-5.986a3.383 3.383 0 011.825 3.394V22.41a3.437 3.437 0 01-1.825 3.431h6.935c6.058 0 9.854-2.591 9.854-7.153 0-3.468-2.482-5.803-6.752-6.643M41.898 25.84h6.569a3.438 3.438 0 01-1.825-3.43V3.686A3.383 3.383 0 0148.467.292h-6.57a3.383 3.383 0 011.825 3.394V22.41a3.437 3.437 0 01-1.824 3.431m-14.052-1.095c-1.86 0-3.32-.547-3.32-2.445V1.387h1.787c6.205 0 9.818 4.453 9.818 11.825 0 7.628-3.905 11.533-8.285 11.533M26.313.292h-6.532a3.383 3.383 0 011.824 3.394V22.41a3.437 3.437 0 01-1.824 3.431h7.262c6.716 0 12.482-4.489 12.482-12.628 0-7.883-5.11-12.92-13.212-12.92m-8.065 23.14a4.052 4.052 0 01-2.3 1.058c-1.24 0-1.715-.767-1.715-2.409l-.036-5.073h3.43l.33-1.314h-3.76v-2.372l-3.613 3.503v.183h1.861v6.131c0 1.789.803 2.847 2.3 2.847a4.101 4.101 0 003.576-2.445zM17.226 8.284a3.378 3.378 0 00-1.861-2.883l-1.643-1.095c-.73-.51-1.24-.912-1.24-1.606a1.25 1.25 0 011.386-1.24c.986 0 2.008.839 2.957 1.824v-2.08a5.88 5.88 0 00-2.774-.73 2.855 2.855 0 00-3.139 2.81 3.118 3.118 0 001.716 2.664l1.825 1.241c.912.62 1.24 1.059 1.24 1.716 0 .802-.547 1.35-1.533 1.35-1.094 0-1.97-.84-3.248-2.226v2.336a5.434 5.434 0 002.956.949 3.22 3.22 0 003.358-3.03M1.058 25.84H10c-1.752-.766-2.993-1.533-2.993-4.16V3.795c0-1.606.073-3.03.146-3.613A14.996 14.996 0 010 2.847v.402c3.504 0 4.088.949 4.088 3.029v15.401c0 2.628-1.278 3.395-3.03 4.161"></path>
              </svg>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <Link href="/login" className="hover:underline">
                Log In
              </Link>
              {/* <Link href='/login' className="hover:underline" >{lang === "en" ? "Log In" : "تسجيل الدخول"}</Link> */}
              <span className="text-gray-400">|</span>
              <Link href="/signup" className="hover:underline">
                Sign Up
              </Link>
              {/* <button className="p-1 hover:bg-gray-100 rounded">
                <Globe className="h-5 w-5" />
              </button> */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="p-1 hover:bg-gray-100 rounded flex items-center gap-1"
                >
                  <Globe className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    {lang === "en" ? "EN" : "ع"}
                  </span>
                </button>
              </div>
            </div>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              aria-label="Favorites"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Row 2: Search bar (mobile only) */}
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

        {/* Desktop navigation */}
        {showNav && (
          <div className="hidden lg:flex items-center justify-center gap-8 mt-4 relative animate-fade-in">
            <nav className="flex gap-8">
              {navigationItem.map(({ label, dropdown }) => (
                <div key={label} className="relative group">
                  <button
                    className={`text-sm font-medium px-2 py-2 ${
                      label === "SALE"
                        ? "text-orange-600 font-semibold hover:opacity-70 cursor-pointer"
                        : "text-gray-700 hover:text-black hover:opacity-70 cursor-pointer"
                    }`}
                  >
                    {label}
                  </button>

                  {/* Mega Dropdown */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 min-w-[900px] bg-white border border-gray-200 shadow-xl z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300">
                    {dropdown}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Sidebar Menu (mobile only) */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-opacity-50 lg:hidden">
            <div className="w-64 bg-white h-full shadow-md p-4">
              <div className="flex justify-between items-center mb-6">
                {/* <h2 className="text-lg font-semibold">Menu</h2> */}
                <button className="p-1 hover:bg-gray-100 rounded text-xs flex items-center gap-1">
                  <Globe className="h-5 w-5" /> <span>EG</span> | $ USD
                </button>
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
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    className={`text-left text-sm font-medium hover:bg-gray-100 rounded px-2 py-1 ${
                      item === "SALE"
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
              {/* Divider */}
              <hr className="" />
              <p
                className="d-block p-2 text-xs font-semibold"
                style={{ backgroundColor: "#f1f1daff", fontWeight: "600" }}
              >
                ACCOUNT
              </p>

              {/* Auth + Globe (mobile only in sidebar) */}
              <div className="flex items-center justify-center gap-2 text-sm">
                <button  onClick={() => router.push('/login')}  className="border py-1 px-6 mt-2 hover:bg-black hover:text-white transition duration-300">
                  LOGIN
                </button>
                <span className="text-gray-400">|</span>
                <button  onClick={() => router.push('/signup')} className="border py-1 px-6 mt-2 hover:bg-black hover:text-white transition duration-300">
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
