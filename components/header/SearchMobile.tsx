import { Search } from 'lucide-react'
import React from 'react'

const SearchMobile = () => {
  return (
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
  )
}

export default SearchMobile