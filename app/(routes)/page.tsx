"use client";   // 👈 must be the first line

import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import NotificationBar from "./sections/NotificationBar";
import Header from "./sections/Header";
import Footer from "@/components/footer/Footer";
import Carousel from "./sections/Carousel";
import DealsSection from "./sections/DealsSection";
import EditorsPicks from "./sections/EditorsPicks";
import Sales from "./sections/Sales";
import FeaturedSeller from "./sections/FeaturedSeller";
import InteriorDesigners from "./sections/InteriorDesigners";
import Promise from "./sections/Promise";
import NewArrivals from "./sections/NewArrivals";
import TrendingCreators from "./sections/TrendingCreators";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { CartSidebar } from "@/components/cart/CartSidebar";


const Page = () => {
  // const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <LoadingSpinner />;


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* <Hero /> */}
        <Carousel />
        <DealsSection />
        <EditorsPicks />
        <Sales />
        <FeaturedSeller />
        <InteriorDesigners />
        <Promise />
        <NewArrivals />
        <TrendingCreators />
      </main>
    </div>
  );
};

export default Page;
