"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { swiperBreakpoints } from "@/components/utils/swiperBreakPoints";

const items = [
  {
    title: "Collectible Chaise Lounge Le Drape",
    price: "$26,800",
    imageUrl:
      "https://a.1stdibscdn.com/le-drape-for-sale/f_105512/f_459487121753068332052/f_45948712_1753068332268_bg_processed.jpg?width=240",
    link: "#",
  },
  {
    title: "Christian Dior by John Galliano Brown Velvet Turban",
    price: "$5,262",
    imageUrl:
      "https://a.1stdibscdn.com/christian-dior-by-john-galliano-brown-velvet-turban-with-fur-crest-fw-2007-for-sale/1121189/v_272895821757139564778/27289582_datamatics.jpg?disable=upscale&auto=webp&quality=60&width=800",
    link: "#",
  },
  {
    title: "Edwardian Sapphire Diamond Platinum Gold Ring",
    price: "$6,000",
    imageUrl:
      "https://a.1stdibscdn.com/edwardian-sapphire-diamond-platinum-gold-ring-for-sale/v_17821/v_272654721756851468759/v_27265472_1756851469168_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=800",
    link: "#",
  },
  {
    title: "Neptune Flower Arrangement, 2021",
    price: "$645",
    imageUrl:
      "https://a.1stdibscdn.com/a_426/a_166872621753314342085/KrisanneSouter_NeptuneFlowerArrangement_24x18_master.jpg?disable=upscale&auto=webp&quality=60&width=800",
    link: "#",
  },
  {
    title: "FORM(LA) Palla Round Coffee Table",
    price: "$11,300",
    imageUrl:
      "https://a.1stdibscdn.com/art-deco-tabouret-designed-by-jindrich-halabala-1940s-for-sale/f_24563/f_435881921739294169272/f_43588192_1739294171077_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=800",
    link: "#",
  },
  {
    title: "Vintage Murano Glass Chandelier",
    price: "$8,900",
    imageUrl:
      "https://a.1stdibscdn.com/franco-albini-and-franca-helg-for-arteluce-ochetta-wall-lights-for-sale/f_9331/f_464523121756484001366/tmp_image_master.JPEG?disable=upscale&auto=webp&quality=60&width=800",
    link: "#",
  },
];

const EditorsPicks = () => {
  return (
    <div className="px-6 py-10 relative">
      {/* Notification Bar */}
      {/* <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 z-50">
         Limited Time: Free Shipping on All Orders!
      </div> */}

      {/* Title */}
      <div className="mb-6 text-center mt-12">
        <h2
          className="text-3xl text-gray-700"
          style={{
            color: "#626262ff",
            fontFamily: `"Cardinal Classic Short", Georgia, serif`,
          }}
        >
          Editors’ Picks
        </h2>
        <a
          href="#"
          className="inline-block mt-2 font-medium text-sm text-gray-900 underline"
        >
          View More
        </a>
      </div>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          // spaceBetween={24}
          // slidesPerView={1.2}
          loop={true}
          breakpoints={swiperBreakpoints}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
<div className=" bg-white rounded-lg shadow-md relative
                transform transition-all duration-700 ease-in-out
                hover:scale-105 hover:shadow-xl">
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 z-10">
                  <button
                    className="rounded-full p-1"
                    aria-label="Save to favorites"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 hover:text-black transition-colors duration-300"
                      viewBox="0 0 250 250"
                      fill="currentColor"
                    >
                      <path d="M29.3 129.8C22.8 121.3 1.6 92.1.4 72.4-.8 52.3 4.1 36.2 15 24.6 30.1 8.5 51.4 6.8 59.9 6.8c1.3 0 2.2 0 2.8.1 16.2.4 39.5 7.6 58.9 39.4l3.4 5.6 3.6-5.5c16.8-25.7 37.1-39 60.3-39.5 3 0 28.9-.9 48 20.6 7.2 8.1 15.1 22.5 12.5 45.6-1.9 16.9-16.2 39.3-24.3 50.4-11.8 16.1-88.5 108.3-100.2 122L29.3 129.8z" />
                    </svg>
                  </button>
                </div>

                {/* Card content */}
                <a href={item.link}>
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base md:text-lg font-medium text-gray-900 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-gray-600 mt-1">
                      {item.price}
                    </p>
                  </div>
                </a>
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
    </div>
  );
};

export default EditorsPicks;
