"use client";

import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { useState } from "react";
import PriceFilter from "./PriceFilter";

const SidebarFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const categories = [
    { name: "All", count: 300 },
    { name: "Jewelry", count: 106 },
    { name: "Furniture", count: 95 },
    { name: "Art", count: 57 },
    { name: "Fashion", count: 42 },
  ];

  const colors = ["Red", "Blue", "Gold", "Brown", "Green", "Black"];

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="pt-45">
      {/* MOBILE FILTER BUTTON */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-100 transition"
        >
          <Filter size={18} /><span className="text-primary">Filters </span>
        </button>
      </div>

      {/* SIDEBAR BACKDROP (Mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-72 bg-white border-r border-gray-200 p-6 space-y-8 z-50 transform transition-transform duration-500 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Close Button for Mobile */}
        <div className="flex justify-between items-center lg:hidden mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* CATEGORY */}
        <div className="border border-gray-300 rounded-md overflow-hidden mt-5">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-sm tracking-wide text-primary">
              CATEGORY
            </span>
            {isCategoryOpen ? (
              <ChevronUp size={18} className="text-gray-600" />
            ) : (
              <ChevronDown size={18} className="text-gray-600" />
            )}
          </button>

          <ul
            className={`divide-y divide-gray-200 transition-[max-height,opacity] duration-500 ease-in-out ${
              isCategoryOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {categories.map((cat) => (
              <li
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex justify-between items-center px-3 py-2 text-sm cursor-pointer transition-colors duration-300 ${
                  selectedCategory === cat.name
                    ? "font-semibold text-primary"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-gray-400 text-xs">{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PRICE RANGE */}
        {/* <div className="border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setIsPriceOpen(!isPriceOpen)}
            className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-sm tracking-wide text-primary">
              PRICE RANGE
            </span>
            {isPriceOpen ? (
              <ChevronUp size={18} className="text-gray-600" />
            ) : (
              <ChevronDown size={18} className="text-gray-600" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              isPriceOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                  className="w-20 border rounded px-2 py-1 text-sm"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                  className="w-20 border rounded px-2 py-1 text-sm"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div> */}
              
              {/* ORRRRRRRRRRRRR */}
        <div className="border border-gray-300 rounded-md overflow-hidden">
  <button
    onClick={() => setIsPriceOpen(!isPriceOpen)}
    className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b hover:bg-gray-100 transition-colors"
  >
    <span className="font-semibold text-sm tracking-wide text-primary">
      PRICE RANGE
    </span>
    {isPriceOpen ? (
      <ChevronUp size={18} className="text-gray-600" />
    ) : (
      <ChevronDown size={18} className="text-gray-600" />
    )}
  </button>

  <div
    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
      isPriceOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="p-4 space-y-4">
      <div className="flex flex-col gap-2">
        <input
          type="range"
          min="0"
          max="20000"
          step="100"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full accent-primary cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="20000"
          step="100"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full accent-primary cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-700">
        <span>Min: ${priceRange[0]}</span>
        <span>Max: ${priceRange[1]}</span>
      </div>
    </div>
  </div>
        </div>
              
              {/* ORRRRRRRRRRRRR */}
          {/* <PriceFilter />       */}
              
        {/* COLOR */}
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setIsColorOpen(!isColorOpen)}
            className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-sm tracking-wide text-primary">
              COLOR
            </span>
            {isColorOpen ? (
              <ChevronUp size={18} className="text-gray-600" />
            ) : (
              <ChevronDown size={18} className="text-gray-600" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              isColorOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`px-3 py-1 rounded-full border text-sm transition-colors duration-300 ${
                    selectedColors.includes(color)
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SidebarFilter;




// "use client";

// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useState } from "react";

// const SidebarFilter = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [isCategoryOpen, setIsCategoryOpen] = useState(true);
//   const [isPriceOpen, setIsPriceOpen] = useState(true);
//   const [isColorOpen, setIsColorOpen] = useState(true);

//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);

//   const categories = [
//     { name: "All", count: 300 },
//     { name: "Jewelry", count: 106 },
//     { name: "Furniture", count: 95 },
//     { name: "Art", count: 57 },
//     { name: "Fashion", count: 42 },
//   ];

//   const colors = ["Red", "Blue", "Gold", "Brown", "Green", "Black"];

//   const toggleColor = (color: string) => {
//     setSelectedColors((prev) =>
//       prev.includes(color)
//         ? prev.filter((c) => c !== color)
//         : [...prev, color]
//     );
//   };

//   return (
//     <aside className="w-64 bg-white border-r border-gray-200 p-6 space-y-8 pt-45">
//       {/* CATEGORY */}
//       <div className="border border-gray-300 rounded-md overflow-hidden">
//         <button
//           onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//           className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b transition-colors duration-300 ease-out hover:bg-gray-100"
//         >
//           <span className="font-semibold text-sm tracking-wide text-gray-700">
//             CATEGORY
//           </span>
//           {isCategoryOpen ? (
//             <ChevronUp size={18} className="text-gray-600" />
//           ) : (
//             <ChevronDown size={18} className="text-gray-600" />
//           )}
//         </button>

//         <ul
//           className={`divide-y divide-gray-200 transition-[max-height,opacity] duration-500 ease-in-out ${
//             isCategoryOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           {categories.map((cat) => (
//             <li
//               key={cat.name}
//               onClick={() => setSelectedCategory(cat.name)}
//               className={`flex justify-between items-center px-3 py-2 text-sm cursor-pointer transition-colors duration-300 ease-out ${
//                 selectedCategory === cat.name
//                   ? "font-semibold text-black"
//                   : "text-gray-600 hover:text-black"
//               }`}
//             >
//               <span>{cat.name}</span>
//               <span className="text-gray-400 text-xs">{cat.count}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* PRICE RANGE */}
//       <div className="border border-gray-300 rounded-md overflow-hidden">
//         <button
//           onClick={() => setIsPriceOpen(!isPriceOpen)}
//           className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b transition-colors duration-300 ease-out hover:bg-gray-100"
//         >
//           <span className="font-semibold text-sm tracking-wide text-gray-700">
//             PRICE RANGE
//           </span>
//           {isPriceOpen ? (
//             <ChevronUp size={18} className="text-gray-600" />
//           ) : (
//             <ChevronDown size={18} className="text-gray-600" />
//           )}
//         </button>

//         <div
//           className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
//             isPriceOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="p-3 space-y-2">
//             <div className="flex items-center gap-2">
//               <input
//                 type="number"
//                 value={priceRange[0]}
//                 onChange={(e) =>
//                   setPriceRange([+e.target.value, priceRange[1]])
//                 }
//                 className="w-20 border rounded px-2 py-1 text-sm"
//                 placeholder="Min"
//               />
//               <span>-</span>
//               <input
//                 type="number"
//                 value={priceRange[1]}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], +e.target.value])
//                 }
//                 className="w-20 border rounded px-2 py-1 text-sm"
//                 placeholder="Max"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* COLOR */}
//       <div className="border border-gray-300 rounded-md overflow-hidden">
//         <button
//           onClick={() => setIsColorOpen(!isColorOpen)}
//           className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border-b transition-colors duration-300 ease-out hover:bg-gray-100"
//         >
//           <span className="font-semibold text-sm tracking-wide text-gray-700">
//             COLOR
//           </span>
//           {isColorOpen ? (
//             <ChevronUp size={18} className="text-gray-600" />
//           ) : (
//             <ChevronDown size={18} className="text-gray-600" />
//           )}
//         </button>

//         <div
//           className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
//             isColorOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="p-3 flex flex-wrap gap-2">
//             {colors.map((color) => (
//               <button
//                 key={color}
//                 onClick={() => toggleColor(color)}
//                 className={`px-3 py-1 rounded-full border text-sm transition-colors duration-300 ease-out ${
//                   selectedColors.includes(color)
//                     ? "bg-black text-white"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 {color}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default SidebarFilter;
