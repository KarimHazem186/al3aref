"use client";

import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const creators = [
    {
    id: 1,
    name: "Andy Warhol",
    category: "Art",
    image:
      "https://a.1stdibscdn.com/andy-warhol-prints-works-on-paper-original-andy-warhol-double-self-portrait-louisiana-denmark-vintage-poster-for-sale/a_14042/1757985016037/11198_master.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 2,
    name: "Salvador Dalí",
    category: "Art",
    image:
      "https://a.1stdibscdn.com/salvador-dali-prints-works-on-paper-dali-vertical-portrait-de-calderon-engraving-for-sale/a_4713/a_169443721758048121735/1717432929038_master.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 3,
    name: "Knoll",
    category: "Furniture",
    image:
      "https://a.1stdibscdn.com/green-leather-barcelona-chair-by-ludwig-mies-van-der-rohe-for-knoll-for-sale/1121189/f_465436121757340920791/46543612_datamatics.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 4,
    name: "Cartier",
    category: "Jewelry",
    image:
      "https://a.1stdibscdn.com/cartier-1990-montre-or-jaune-baignoire-pm-yellow-gold-casque-d-or-bracelet-watch-for-sale/v_36322/v_271596521755793186062/v_27159652_1755793186368_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 5,
    name: "Hermès",
    category: "Fashion",
    image:
      "https://a.1stdibscdn.com/hermes-paris-casques-et-plumet-silk-cummerbund-bow-tie-set-c-1990s-for-sale/v_736/v_273682621757959478400/v_27368262_1757959479451_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 6,
    name: "Pablo Picasso",
    category: "Art",
    image:
      "https://a.1stdibscdn.com/pablo-picasso-prints-works-on-paper-the-156-scene-of-seduction-original-etching-signed-baer-1959-for-sale/a_4643/a_167752221754921883492/DSC05834_master.JPG?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 7,
    name: "Slim Aarons",
    category: "Art",
    image:
      "https://a.1stdibscdn.com/slim-aarons-1916-2006-american-photography-tennis-in-the-bahamas-slim-aarons-limited-estate-stamped-print-for-sale/a_4493/a_169641021758314355219/Tennis_In_The_Bahamasx__master.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 8,
    name: "Cassina",
    category: "Furniture",
    image:
      "https://a.1stdibscdn.com/rolex-x-loree-rodkin-watch-for-sale/v_336/v_273647621757931561063/v_27364762_1757931561811_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 9,
    name: "Rolex",
    category: "Jewelry",
    image:
      "https://a.1stdibscdn.com/chaise-longue-lc4-brown-leather-le-corbusier-perriand-cassina-cert-of-auth-for-sale/f_74412/f_465727921757340250800/f_46572792_1757340251407_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },
  {
    id: 10,
    name: "Chanel",
    category: "Fashion",
    image:
      "https://a.1stdibscdn.com/chanel-rare-paris-salzburg-relaxed-cashmere-jacket-36-fr-for-sale/v_35492/v_274005721758291664600/26023752_datamatics.jpg?disable=upscale&auto=webp&quality=60&width=298",
  },

];

const TrendingCreators: React.FC = () => {
  return (
    <section className="py-12 bg-[#f3f3f3]">
      <h2 className="text-center text-2xl sm:text-3xl font-serif font-medium text-gray-900 mb-12">
        Trending Creators
      </h2>

      <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
        {creators.map((creator) => (
          <div key={creator.id} className="flex flex-col items-center text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-45 lg:h-45 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden p-10 cursor-pointer">
              <Motion.img
                src={creator.image}
                alt={creator.name}
                className="object-contain w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-gray-500">{creator.category}</p>

            <a
              href="#"
              className="mt-1 flex items-center gap-1 text-base sm:text-lg font-serif text-gray-900 hover:underline"
            >
              {creator.name}
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCreators;
