"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useLanguage } from "@/app/context/LanguageContext";

interface Slide {
  image: string;
  alt: string;
  captionTitle: string;
  captionDiscount: string;
  captionSub: string;
  captionDescription?: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image:
      "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757629088_g6eh3/carousel_sale.jpg",
    alt: "Fall Sale",
    captionTitle: "Enjoy up to",
    captionDiscount: "40% Off",
    captionSub: "FALL SALE IS GOING ON NOW",
    buttonText: "SHOP THE SALE",
    buttonLink: "/sale",
  },
  {
    image:
      "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438297_humrn/carousel_iconic.jpg",
    alt: "Scandinavian Modern",
    captionTitle: "Scandinavian",
    captionDiscount: "Modern Spotlight",
    captionSub: "FEATURED STYLE",
    captionDescription:
      "From future heirlooms to unicorn pieces, shop new arrivals suffused with history and shaped by emerging trends.",
    buttonText: "EXPLORE NOW",
    buttonLink: "/furniture/style/scandinavian-modern/",
  },
  {
    image:
      "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438456_b2e7n/carousel_catalogue.jpg",
    alt: "Fall Curation",
    captionTitle: "New Curations",
    captionDiscount: "for Fall",
    captionSub: "JUST ARRIVED",
    buttonText: "BROWSE CATALOG",
    buttonLink: "/collections/fall-catalogue/",
  },
];

const Carousel: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className="relative w-full max-w-[1440px] mx-auto py-12 mt-14 md:mt-16"
      style={{ marginTop: "125px" }}
    >
      <Swiper
        key={lang}
        modules={[Pagination, Autoplay, Navigation]}
        dir={lang === "ar" ? "rtl" : "ltr"}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 mx-1 rounded-full border border-gray-400 bg-transparent transition-all duration-300"></span>`,
        }}
        navigation
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={700}
        className="overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-full flex flex-col md:flex-row h-[700px] md:h-[800px] lg:h-screen bg-[var(--secondaryLight)]">
              {/* Left: Image */}
              <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-contain max-h-[300px] md:max-h-[500px] w-full"
                />
              </div>

              {/* Right: Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-10 md:px-10 md:py-16">
                <p className="text-base md:text-2xl tracking-widest uppercase text-gray-600 mb-2">
                  {slide.captionSub}
                </p>

                <h2 className="text-3xl md:text-6xl tracking-widest font-serif text-black mb-3">
                  {slide.captionTitle}
                </h2>

                <h1 className="text-3xl md:text-6xl tracking-widest font-serif text-black mb-4">
                  {slide.captionDiscount}
                </h1>

                {slide.captionDescription && (
                  <p className="text-sm md:text-base text-gray-700 mb-6 max-w-xl px-2 md:px-0">
                    {slide.captionDescription}
                  </p>
                )}

                <a
                  href={slide.buttonLink}
                  className="border border-primary px-5 py-2 text-sm md:text-base text-black hover:bg-primary hover:text-white transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
