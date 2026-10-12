
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[680px] overflow-hidden bg-gray-950 text-white"
    >
      {/* Background image */}
      <Image
        src="/images/hero-car.png"
        alt="Mobil dan sparepart Auto Tech Source"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/70 to-black/15" />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Your Trusted Automotive Partner
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Sparepart Berkualitas
            <span className="mt-2 block text-red-500">
              Untuk Performa Maksimal
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Auto Tech Source menyediakan berbagai sparepart kendaraan
            berkualitas untuk kebutuhan pribadi maupun bisnis Anda.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="rounded-lg bg-red-600 px-7 py-3.5 font-semibold transition hover:bg-red-700"
            >
              Lihat Produk →
            </Link>

            <Link
              href="#about"
              className="rounded-lg border border-white/50 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-black"
            >
              Tentang Kami
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              "Produk Original",
              "Harga Bersaing",
              "Pengiriman Cepat",
              "Dukungan Pelanggan",
            ].map((benefit) => (
              <div key={benefit} className="border-l-2 border-red-500 pl-3">
                <p className="text-sm font-semibold">{benefit}</p>
                <p className="mt-1 text-xs text-gray-400">
                  Auto Tech Source
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
