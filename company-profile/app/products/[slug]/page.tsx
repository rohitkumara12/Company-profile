import { products } from "@/app/data/product";
import type { Metadata } from "next";

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
      title: "Produk Tidak Ditemukan | AutoTech Supply",
    };
  }

  return {
    title: `${product.name} | AutoTech Supply`,
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
    return <h1> product tidak ditemukan </h1>
  }

  return (
    <main className="mx-auto max-w-5xl px-8 py-20">
      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        {product.name}
      </h1>

      <p className="mt-6 max-w-2xl text-gray-600">
        {product.description}
      </p>

       <p className="mt-8 text-2xl font-bold">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
    </main>
  );
}