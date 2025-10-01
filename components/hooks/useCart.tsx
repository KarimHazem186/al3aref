"use client";

import { useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/cart")
//       .then((res) => res.json())
//       .then((data) => setCart(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return { cart, cartTotal, itemCount, loading, updateQuantity, removeFromCart };
}
