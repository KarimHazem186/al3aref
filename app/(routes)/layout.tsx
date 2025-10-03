"use client";
import Footer from "@/components/footer/Footer";
// import Header from "./sections/Header";
import { useEffect, useState } from "react";
import { CartSidebar } from "@/components/cart/CartSidebar";
import NotificationBar from "./sections/NotificationBar";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Header from "@/components/header/Header";
import { LanguageContext } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState<"en" | "ar">("en");

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingSpinner />;
  

  return (
    <>
      <LanguageContext.Provider value={{ lang, setLang }}> 
        
      <NotificationBar />

      {/* <Header onCartClick={() => setIsCartOpen(true)} /> */}
      <Header onCartClick={() => setIsCartOpen(true)} />

      {children}
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
       </LanguageContext.Provider>
    </>
  );
}
