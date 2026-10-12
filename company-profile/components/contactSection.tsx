
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-950 px-6 py-24 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-red-400">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Butuh Informasi Sparepart?
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-300">
          Hubungi Auto Tech Source untuk mendapatkan informasi
          lebih lanjut mengenai produk dan kebutuhan sparepart Anda.
        </p>

        <a
          href="mailto:info@autotechsource.com"
          className="mt-8 inline-block rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
