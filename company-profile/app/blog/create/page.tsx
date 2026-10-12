
"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Maintenance");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      setMessage("Lengkapi semua kolom terlebih dahulu.");
      return;
    }

    setMessage(
      "Validasi berhasil! Form siap dihubungkan ke database."
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 px-6 pb-20 pt-36 text-white">
      <section className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-red-400 hover:text-red-300"
        >
          ← Kembali ke Blog
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          Content Management
        </p>

        <h1 className="mt-3 text-4xl font-extrabold">
          Create New Blog
        </h1>

        <p className="mt-4 leading-7 text-gray-400">
          Buat artikel baru untuk membagikan informasi seputar otomotif.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Judul Artikel
            </label>
            <input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Masukkan judul artikel"
              className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 outline-none focus:border-red-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium"
            >
              Kategori
            </label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 outline-none focus:border-red-500"
            >
              <option>Maintenance</option>
              <option>Automotive Guide</option>
              <option>Car Care</option>
              <option>News</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="excerpt"
              className="mb-2 block text-sm font-medium"
            >
              Ringkasan
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              placeholder="Tulis ringkasan artikel"
              rows={3}
              className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 outline-none focus:border-red-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium"
            >
              Isi Artikel
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Tulis isi artikel di sini"
              rows={7}
              className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 outline-none focus:border-red-500"
              required
            />
          </div>

          {message && (
            <p role="status" className="text-sm text-red-300">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
          >
            Validasi Artikel
          </button>
        </form>
      </section>
    </main>
  );
}
