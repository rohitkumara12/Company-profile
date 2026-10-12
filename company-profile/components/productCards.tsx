
import Link from "next/link";

type ProductCardsProps = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
};

export default function ProductCard({
  id,
  name,
  slug,
  category,
  price,
}: ProductCardsProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
      <p className="text-sm font-medium text-gray-500">
        {category}
      </p>

      <h3 className="mt-2 text-xl font-bold text-gray-900">
        {name}
      </h3>

      <p className="mt-4 font-semibold text-gray-900">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        })}
      </p>

      <Link
        href={`/products/${slug}`}
        className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Lihat Detail
      </Link>
    </article>
  );
}
