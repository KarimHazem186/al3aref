import { getProduct } from "./utils";
import type { Metadata } from "next";

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Product not found",
      description: "This product does not exist in our store.",
    };
  }

  return {
    title: `${product.title} | My E-Commerce`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}
