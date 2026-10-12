
import Link from "next/link";

const articles = [
  {
    slug: "tips-merawat-sparepart",
    category: "Maintenance",
    title: "Tips Merawat Sparepart Mobil agar Lebih Awet",
    excerpt:
      "Kenali langkah perawatan komponen kendaraan untuk membantu menjaga performa dan memperpanjang masa pakainya.",
    date: "12 Oktober 2026",
    readTime: "5 menit baca",
  },
  {
    slug: "memilih-sparepart",
    category: "Automotive Guide",
    title: "Panduan Memilih Sparepart yang Tepat",
    excerpt:
      "Pelajari hal penting yang perlu diperhatikan sebelum memilih komponen pengganti untuk kendaraan Anda.",
    date: "10 Oktober 2026",
    readTime: "4 menit baca",
  },
  {
    slug: "perawatan-kendaraan",
    category: "Car Care",
    title: "Pentingnya Perawatan Kendaraan Berkala",
    excerpt:
      "Perawatan berkala membantu mendeteksi potensi masalah kendaraan lebih awal.",
    date: "8 Oktober 2026",
    readTime: "3 menit baca",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-6 pb-20 pt-36 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Latest Articles
            </p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Informasi, panduan, dan tips seputar sparepart serta perawatan
              kendaraan dari Auto Tech Source.
            </p>
          </div>

          <Link
            href="/blog/create"
            className="inline-flex w-fit rounded-lg bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
          >
            + Create Blog
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="flex h-44 items-end bg-gradient-to-br from-red-950 via-gray-900 to-gray-800 p-6">
                <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-500">
                  {article.date} · {article.readTime}
                </p>

                <h2 className="mt-4 text-xl font-bold leading-snug">
                  {article.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {article.excerpt}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-sm font-semibold text-red-400">
                    Artikel Auto Tech Source
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
