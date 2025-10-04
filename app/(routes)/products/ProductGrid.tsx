"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Christian Dior dress Winter 1999",
    price: "$16,528",
    image:
      "https://i.pinimg.com/originals/78/b6/8a/78b68a93017afe08edd4410c9642ece1.png",
  },
  {
    id: 2,
    name: 'TRACCIA “Bird Leg” Surreal Gold Leaf and Bronze End Table, Italy',
    price: "$8,500",
    image:
      "https://png.pngtree.com/png-clipart/20231020/original/pngtree-gold-silk-cover-on-podium-isolated-concept-for-product-advertising-cloth-png-image_13373889.png",
  },
  {
    id: 3,
    name: "Cartier Tank Francaise Steel Raspberry Dial Quartz Ladies Watch",
    price: "$5,699",
    image: "https://w7.pngwing.com/pngs/642/123/png-transparent-coffee-tables-design.png",
    badge: "Free Shipping",
  },
  {
    id: 4,
    name: "Gucci 2016 Tsavorite Enamel 18 Karat Yellow Gold Bracelet",
    price: "$12,200",
    image: "https://images-na.ssl-images-amazon.com/images/I/61uToykmyPS._AC_UY575_.jpg",
  },
  {
    id: 5,
    name: "Milly Ristvedt Artwork",
    price: "$2,300",
    image:
      "https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL2hpcHBvdW5pY29ybl9hcnRfc3VwcGxpZXNfaXNvbGF0ZWRfb25fd2hpdGVfYmFja2dyb3VuZF8xMzA0ZGY4OC0wNGRhLTRkMmMtYTRlMi0zYjlkNzUzYTg3Y2UucG5n.png",
  },
  {
    id: 6,
    name: "Hermes 1980’s Haut à Courroies Bag",
    price: "$15,800",
    image:
      "https://a.1stdibscdn.com/archivesE/upload/v_4072/v_38287531517365517676/aIMG_9687_master.jpg",
  },
];

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4; // عدد المنتجات في كل صفحة
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-12 pt-45">
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 ease-out"
          >
            {/* Wishlist Icon */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 z-10 rounded-full p-1 bg-white/70 hover:bg-white transition"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.includes(product.id)
                    ? "text-red-600 fill-red-600"
                    : "text-gray-400"
                }`}
              />
            </button>

            {/* Product Image */}
            <div className="flex items-center justify-center h-64 bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-gray-900">{product.price}</p>
              {product.badge && (
                <span className="inline-block mt-2 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                  {product.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-16 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100 transition"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-md transition ${
              currentPage === i + 1
                ? "bg-primary text-white border-black"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100 transition"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}




// "use client";

// import { useState } from "react";
// import { Heart } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   badge?: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Christian Dior dress Winter 1999",
//     price: "$16,528",
//     image: "https://i.pinimg.com/originals/78/b6/8a/78b68a93017afe08edd4410c9642ece1.png",
//   },
//   {
//     id: 2,
//     name: 'TRACCIA “Bird Leg” Surreal Gold Leaf and Bronze End Table, Italy',
//     price: "$8,500",
//     image: "https://png.pngtree.com/png-clipart/20231020/original/pngtree-gold-silk-cover-on-podium-isolated-concept-for-product-advertising-cloth-png-image_13373889.png",
//   },
//   {
//     id: 3,
//     name: "Cartier Tank Francaise Steel Raspberry Dial Quartz Ladies Watch",
//     price: "$5,699",
//     image: "https://w7.pngwing.com/pngs/642/123/png-transparent-coffee-tables-design.png",
//     badge: "Free Shipping",
//   },
//   {
//     id: 4,
//     name: "Gucci 2016 Tsavorite Enamel 18 Karat Yellow Gold Bracelet",
//     price: "$12,200",
//     image: "https://images-na.ssl-images-amazon.com/images/I/61uToykmyPS._AC_UY575_.jpg",
//   },
//   {
//     id: 5,
//     name: "Milly Ristvedt Artwork",
//     price: "$2,300",
//     image: "https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL2hpcHBvdW5pY29ybl9hcnRfc3VwcGxpZXNfaXNvbGF0ZWRfb25fd2hpdGVfYmFja2dyb3VuZF8xMzA0ZGY4OC0wNGRhLTRkMmMtYTRlMi0zYjlkNzUzYTg3Y2UucG5n.png",
//   },
//   {
//     id: 6,
//     name: "Hermes 1980’s Haut à Courroies Bag",
//     price: "$15,800",
//     image: "https://a.1stdibscdn.com/archivesE/upload/v_4072/v_38287531517365517676/aIMG_9687_master.jpg",
//   },
// ];

// export default function ProductGrid() {
//   const [favorites, setFavorites] = useState<number[]>([]);

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
//     );
//   };

//   return (
//     <section className="max-w-[1440px] mx-auto px-4 py-12 pt-45">
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//   key={product.id}
//   className="relative group bg-white border border-gray-200 rounded-md overflow-hidden 
//   shadow-sm hover:shadow-md transition-shadow duration-500 ease-out"
// >

//             {/* Wishlist Icon */}
//             <button
//               onClick={() => toggleFavorite(product.id)}
//               className="absolute top-2 right-2 z-10 rounded-full p-1 bg-white/70 hover:bg-white transition"
//             >
//               <Heart
//                 className={`w-5 h-5 ${
//                   favorites.includes(product.id)
//                     ? "text-red-600 fill-red-600"
//                     : "text-gray-400"
//                 }`}
//               />
//             </button>

//             {/* Product Image */}
//             <div className="flex items-center justify-center h-64 bg-gray-50 overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
//                 {product.name}
//               </h3>
//               <p className="text-sm font-semibold text-gray-900">
//                 {product.price}
//               </p>
//               {product.badge && (
//                 <span className="inline-block mt-2 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
//                   {product.badge}
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
