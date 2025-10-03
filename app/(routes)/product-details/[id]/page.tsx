import { notFound } from "next/navigation";
import { getProduct } from "./utils";
import type { Metadata } from "next";

export { generateMetadata } from "./metadata";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const product: Product | null = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain"
      />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
    </div>
  );
}
