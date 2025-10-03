"use client"

import React from 'react'
import { Search } from "lucide-react";

const SearchDesktop = () => {
    return (
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

  )
}

export default SearchDesktop