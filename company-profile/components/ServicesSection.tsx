
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gray-100 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-red-600">
          Layanan Kami
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Solusi untuk Kebutuhan Otomotif Anda
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-black">Penjualan Sparepart</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Berbagai kebutuhan komponen otomotif untuk perawatan
              kendaraan Anda.
            </p>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-black">Informasi Produk</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Informasi kategori dan spesifikasi produk untuk
              membantu memilih sparepart yang sesuai.
            </p>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-black">Dukungan Pelanggan</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Membantu pelanggan memperoleh informasi mengenai
              kebutuhan sparepart kendaraan.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
