"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { swiperBreakpoints } from "@/components/utils/swiperBreakPoints";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categoriesData: Category[] = [
  { id: 1, name: "Storage", image: "/assets/categories/category_1.png" },
  { id: 2, name: "Kitchen", image: "/assets/categories/category_2.png" },
  { id: 3, name: "Lighting", image: "/assets/categories/category_3.png" },
  { id: 4, name: "HomeDecor", image: "/assets/categories/category_4.png" },
  { id: 5, name: "Furniture", image: "/assets/categories/category_5.png" },
  { id: 6, name: "Storage", image: "/assets/categories/category_1.png" },
  { id: 7, name: "Kitchen", image: "/assets/categories/category_2.png" },
  { id: 8, name: "Lighting", image: "/assets/categories/category_3.png" },
  { id: 9, name: "HomeDecor", image: "/assets/categories/category_4.png" },
  { id: 10, name: "Furniture", image: "/assets/categories/category_5.png" },
];

interface CategoriesProps {
  lang?: "ar" | "en";
}

const Categories: React.FC<CategoriesProps> = ({ lang = "en" }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full max-w-[1440px] mx-auto mb-12 px-4 relative">
      <div className="mb-6 text-center mt-12">
        <h2
          className="text-3xl text-primary"
          style={{
            fontFamily: `"Cardinal Classic Short", Georgia, serif`,
          }}
        >
          Categories
        </h2>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination,Autoplay]}
                  loop={true}
                  autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                  }}
                   speed={4000}

          breakpoints={swiperBreakpoints}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {categoriesData.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div
                className=" bg-white rounded-lg shadow-md relative
                transform transition-all duration-700 ease-in-out
                hover:scale-105 hover:shadow-sm"
              >
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 z-10">
                  <button
                    className="rounded-full p-1"
                    aria-label="Save to favorites"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 hover:text-red-600 transition-colors duration-300"
                      viewBox="0 0 250 250"
                      fill="currentColor"
                    >
                      <path d="M29.3 129.8C22.8 121.3 1.6 92.1.4 72.4-.8 52.3 4.1 36.2 15 24.6 30.1 8.5 51.4 6.8 59.9 6.8c1.3 0 2.2 0 2.8.1 16.2.4 39.5 7.6 58.9 39.4l3.4 5.6 3.6-5.5c16.8-25.7 37.1-39 60.3-39.5 3 0 28.9-.9 48 20.6 7.2 8.1 15.1 22.5 12.5 45.6-1.9 16.9-16.2 39.3-24.3 50.4-11.8 16.1-88.5 108.3-100.2 122L29.3 129.8z" />
                    </svg>
                  </button>
                </div>

                {/* Card content */}
                <div className="h-[200px]  flex items-center justify-center bg-gray-50 overflow-hidden rounded-t-lg">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105 p-8"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 truncate">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10">
          <FaChevronLeft />
        </button>
        <button className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Categories;
