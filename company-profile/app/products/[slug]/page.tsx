
import { products } from "@/app/data/product";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (product) => product.slug === slug
  );

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Auto Tech Source",
    };
  }

  return {
    title: `${product.name} | Auto Tech Source`,
    description: product.description,
  };
}

export default async function ProductDetail({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (product) => product.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        {product.name}
      </h1>

      <p className="mt-6 max-w-2xl leading-7 text-gray-600">
        {product.description}
      </p>

      <p className="mt-8 text-2xl font-bold">
        {product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        })}
      </p>
    </main>
  );
}
