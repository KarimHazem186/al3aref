"use client";

import React, { useEffect, useRef } from "react";

const FeaturedSeller = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = 500;
  const gapWidth = 24;
  const scrollAmount = itemWidth + gapWidth;

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const third = container.scrollWidth / 3;
      container.scrollLeft = third;
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const distance = direction === "left" ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f7f5f0] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-10 gap-8 w-full max-w-[1440px] mx-auto">
      {/* Left side video */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow">
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="auto"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/885010749/rendition/540p/file.mp4?loc=external&oauth2_token_id=1186645944&signature=52cdf0b507de53ed2fb8fa738fde1dd92475091386df31a018b31c3afcc55a6a"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right side text */}
      <div className="w-full md:w-1/2 text-center md:text-left tracking-tightest mx-10">
        <p className="italic text-gray-600 mb-2">Featured Seller</p>
        <h2
          className="text-3xl md:text-4xl font-light leading-snug mb-6"
          style={{
            fontFamily: `"Cardinal Classic Short", Georgia, serif`,
            fontWeight: "300",
            color: "#626262ff",
          }}
        >
          Handcrafted. Inspired by Bauhaus. <br />
          Designed by <span className="font-medium">Kateryna Sokolova.</span>
        </h2>
        <button className="border rounded border-black px-6 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition">
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
};

export default FeaturedSeller;
