"use client";

import React from "react";

const designers = [
  {
    name: "Ghislaine Viñas",
    img: "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757440102_qgl7a/firm1.jpg?disable=upscale&auto=webp&quality=80&width=350",
  },
  {
    name: "Round Table Design, Inc.",
    img: "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757440166_gcm2j/firm2.jpg?disable=upscale&auto=webp&quality=80&width=350",
  },
  {
    name: "Craig & Company",
    img: "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757440173_ebfcf/firm3.jpg?disable=upscale&auto=webp&quality=80&width=350",
  },
  {
    name: "Fran Hickman Design & Interiors",
    img: "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757440179_ispks/firm4.jpg?disable=upscale&auto=webp&quality=80&width=350",
  },
  {
    name: "Connect with Interior Designers",
    img: "https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757440185_beul4/firms_all.jpg?disable=upscale&auto=webp&quality=80&width=350",
  },
];

const InteriorDesigners = () => {
  return (
    <section className="px-6 pb-18 bg-white">
      <h2
        className="text-3xl font-serif mb-8 text-primary"
        style={{
          fontFamily: `"Cardinal Classic Short", Georgia, serif`,
        }}
      >
        Interior Designers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {designers.map((designer, index) => (
          <div
            key={index}
            className="flex flex-col items-start group cursor-pointer"
          >
            <img
              src={designer.img}
              alt={designer.name}
              className="object-cover w-full h-64 rounded-lg shadow-sm transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 group-hover:shadow-lg"
            />
            <p className="mt-2 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-black">
              {designer.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorDesigners;
