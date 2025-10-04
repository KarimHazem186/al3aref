import { notFound } from "next/navigation";
import { getProduct } from "./utils";
import type { Metadata } from "next";

export { generateMetadata } from "./metadata";

import { Heart, Package } from "lucide-react";
import ProductGallery from "./gallery";
import RatingStars from "@/components/rating/RatingStars";
import QuantitySelector from "../quantity";

interface Product {
  id?: string;
  name: string;
  rating: number;
  price: number;
  oldPrice: number;
  description: string[];
  images: string[];
}

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  // --- For real API usage ---
  // const product: Product | null = await getProduct(params.id);
  // if (!product) {
  //   notFound();
  // }

  // --- Temporary static data for development ---
  const product: Product = {
    id: params.id,
    name: "Corner sofa made of beech wood and linen fabric",
    rating: 4.7,
    price: 28100,
    oldPrice: 38642,
    description: [
      "High quality beech wood.",
      "33 density sponge.",
      "Linen fabric.",
      "Durable structure suitable for daily use.",
    ],
    images: [
      "https://via.placeholder.com/600x400.png?text=Sofa+1",
      "https://via.placeholder.com/600x400.png?text=Sofa+2",
      "https://via.placeholder.com/600x400.png?text=Sofa+3",
    ],
  };

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
  const saved = product.oldPrice - product.price;

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 pt-45">
      <ProductGallery images={product.images} />

      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h1>

        <RatingStars rating={product.rating} />

        <div className="mt-4 space-y-1">
          <p className="text-3xl font-bold text-green-700">
            {product.price.toLocaleString()} .00
          </p>
          <p className="text-gray-500 line-through text-lg">
            {product.oldPrice.toLocaleString()} .00
          </p>
          <p className="text-green-600 font-medium">Discount {discount}%</p>
          <p className="text-gray-600 text-sm">
            You saved {saved.toLocaleString()} EGP
          </p>
        </div>

        <div className="mt-4 flex items-start gap-3 bg-gray-50 border rounded-lg p-3">
          <Package className="text-green-700 w-5 h-5 mt-1" />
          <p className="text-sm text-gray-700 leading-relaxed">
            Delivery during the period from <b>March 1 to March 10</b>,
            excluding holidays and official holidays.
          </p>
        </div>

        {/* 📜 Description */}
        <div className="mt-5">
          <h2 className="font-semibold mb-2 text-lg">Description</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {product.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <QuantitySelector />
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
            Add to Cart
          </button>
          <button
            aria-label="Add to wishlist"
            className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
