import Link from "next/link";


type ProductCardsProps ={
    name : string;
    category : string;
    price : number;
};

export default function ProductCard({
    name,
    category,
    price,
}: ProductCardsProps){

    const slug = name.toLowerCase().replaceAll(" ","-")
    return (
        <div className="rounded-xl border bg-white p-6">
            <p className="text-sm text-gray-500">
                {category}
            </p>
            <h3 className="mt-2 text-xl font-bold">
                {name}
            </h3>

            <p className="mt-4 font-semibold">
                Rp {price.toLocaleString("id-ID")}
            </p>
            <Link 
            href={`/products/${slug}`}
            className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-sm text-white">
                Lihat Detail 
            </Link>
        </div>
    )
}