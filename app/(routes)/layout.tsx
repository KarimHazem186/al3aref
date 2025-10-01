"use client";
import Footer from "@/components/footer/Footer";
import Header from "./sections/Header";
import { useEffect, useState } from "react";
import { CartSidebar } from "@/components/cart/CartSidebar";
import NotificationBar from "./sections/NotificationBar";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingSpinner />;
  

  return (
    <>
      <NotificationBar />

      <Header onCartClick={() => setIsCartOpen(true)} />

      {children}
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
