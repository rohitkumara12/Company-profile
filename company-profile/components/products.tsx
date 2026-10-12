
import ProductCard from "./productCards";
import { products } from "@/app/data/product";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-gray-100 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Produk
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Kategori Sparepart
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              slug={product.slug}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
