"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const saleItems = [
  {
    title: "Jewelry Sale",
    image:
      "https://a.1stdibscdn.com/14k-yellow-gold-turquoise-and-diamond-halo-drop-earrings-turquoise-2500-carats-for-sale/j_10563/j_266782721753150763211/j_26678272_1753150763676_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Furniture Sale",
    image:
      "https://a.1stdibscdn.com/gordon-jane-martz-marshall-studios-ceramic-table-lamps-pale-yellow-glaze-for-sale/f_65472/f_463029821755406505719/f_46302982_1755406506558_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Art Sale",
    image:
      "https://a.1stdibscdn.com/cecil-beaton-photography-beaton-audrey-hepburn-cecil-beaton-electa-editrice-portfolios-after-for-sale/a_14652/a_153173921730248867723/IMG_7987_master.jpeg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Fashion Sale",
    image:
      "https://a.1stdibscdn.com/modern-artisanal-soya-linen-scarf-handwoven-in-soft-pastel-dusty-green-hue-for-sale/v_19002/v_202159721758727101285/v_20215972_1758727101946_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Jewelry Sale",
    image:
      "https://a.1stdibscdn.com/14k-yellow-gold-turquoise-and-diamond-halo-drop-earrings-turquoise-2500-carats-for-sale/j_10563/j_266782721753150763211/j_26678272_1753150763676_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Furniture Sale",
    image:
      "https://a.1stdibscdn.com/gordon-jane-martz-marshall-studios-ceramic-table-lamps-pale-yellow-glaze-for-sale/f_65472/f_463029821755406505719/f_46302982_1755406506558_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Art Sale",
    image:
      "https://a.1stdibscdn.com/cecil-beaton-photography-beaton-audrey-hepburn-cecil-beaton-electa-editrice-portfolios-after-for-sale/a_14652/a_153173921730248867723/IMG_7987_master.jpeg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Fashion Sale",
    image:
      "https://a.1stdibscdn.com/modern-artisanal-soya-linen-scarf-handwoven-in-soft-pastel-dusty-green-hue-for-sale/v_19002/v_202159721758727101285/v_20215972_1758727101946_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Jewelry Sale",
    image:
      "https://a.1stdibscdn.com/14k-yellow-gold-turquoise-and-diamond-halo-drop-earrings-turquoise-2500-carats-for-sale/j_10563/j_266782721753150763211/j_26678272_1753150763676_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Furniture Sale",
    image:
      "https://a.1stdibscdn.com/gordon-jane-martz-marshall-studios-ceramic-table-lamps-pale-yellow-glaze-for-sale/f_65472/f_463029821755406505719/f_46302982_1755406506558_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Art Sale",
    image:
      "https://a.1stdibscdn.com/cecil-beaton-photography-beaton-audrey-hepburn-cecil-beaton-electa-editrice-portfolios-after-for-sale/a_14652/a_153173921730248867723/IMG_7987_master.jpeg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Fashion Sale",
    image:
      "https://a.1stdibscdn.com/modern-artisanal-soya-linen-scarf-handwoven-in-soft-pastel-dusty-green-hue-for-sale/v_19002/v_202159721758727101285/v_20215972_1758727101946_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
];

const Sales = () => {
  return (
    <section className="bg-[#f6f3ec] py-12 w-full max-w-[1440px] mx-auto">
      <div className="text-center mb-12 text-2xl tracking-widest">
        <p className="italic text-gray-700 mb-2 text-xl">
          Limited Time Savings
        </p>
        <h2 className="text-3xl font-light text-primary">
          Sale: <span className="font-medium">Up to 40% Off</span>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
          1280: { slidesPerView: 6, spaceBetween: 30 },
        }}
      >
        {saleItems.concat(saleItems).map((item, idx) => (
          <SwiperSlide key={idx}>
            <a
              href={item.link}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-16 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <span className="text-gray-800 mt-2 group-hover:underline text-sm font-medium">
                {item.title} <span className="inline-block">›</span>
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sales;
