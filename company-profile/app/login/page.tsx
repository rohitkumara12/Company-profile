
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Email dan password wajib diisi.");
      return;
    }

    setMessage(
      "Validasi berhasil. Autentikasi backend belum dihubungkan."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6 py-36 text-white">
      <section className="w-full max-w-md">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight"
        >
          AUTO TECH <span className="text-red-500">SOURCE</span>
        </Link>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Welcome Back
          </p>

          <h1 className="mt-3 text-3xl font-extrabold">
            Login to Your Account
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Masuk untuk mengakses fitur pengelolaan konten Auto Tech Source.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="nama@email.com"
                required
                className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 outline-none transition focus:border-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Masukkan password"
                required
                className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 outline-none transition focus:border-red-500"
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
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-gray-500">
            Demo UI — proses autentikasi belum terhubung ke backend.
          </p>
        </div>
      </section>
    </main>
  );
}
