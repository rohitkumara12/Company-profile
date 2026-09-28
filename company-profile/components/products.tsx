import ProductCard from "./productCards";
import { products } from "@/app/data/product";




export default function Products(){
    return(
        <section className="bg-gray-50 px-8 py-24">
            <div className="mx-auto max-w-5xl">
                <p className="text-sm font-medium uppercase tracking-widest">
                    Produk 
                </p>
                <h2 className="mt-3 text-4xl font-bold">
                    Kategori Sparepart 
                </h2>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {products.map((product) =>(
                        <ProductCard
                        key={product.name}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    );
}