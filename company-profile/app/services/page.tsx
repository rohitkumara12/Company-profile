export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-6 pb-20 pt-36 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="font-bold uppercase tracking-widest text-red-500">
          What We Offer
        </p>

        <h1 className="mt-4 text-4xl font-extrabold">
          Layanan Auto Tech Source
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          Kami membantu kebutuhan sparepart kendaraan untuk pelanggan
          individu, bengkel, dan mitra bisnis.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Konsultasi Sparepart",
              description: "Bantuan memilih sparepart sesuai kebutuhan kendaraan.",
            },
            {
              title: "Penyediaan Produk",
              description: "Pilihan komponen untuk perawatan dan penggantian.",
            },
            {
              title: "Layanan Bisnis",
              description: "Dukungan pengadaan untuk bengkel dan reseller.",
            },
            {
              title: "Dukungan Pelanggan",
              description: "Bantuan informasi produk dan pemesanan.",
            },
          ].map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}