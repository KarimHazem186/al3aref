"use client"
import { Heart, ShoppingBag, Globe } from "lucide-react";
import Link from "next/link";

interface Props {
  onCartClick?: () => void;
  itemCount?: number;
  lang?: "en" | "ar";
  toggleLang?: () => void;
}

const HeaderActions = ({
  onCartClick = () => {},
  itemCount = 0,
  lang = "en",
  toggleLang = () => {},
}: Props) => (
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
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          </div>
);

export default HeaderActions;
