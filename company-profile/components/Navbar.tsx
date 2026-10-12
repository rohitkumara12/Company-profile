"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Teams", href: "/teams" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-extrabold tracking-tight sm:text-xl"
        >
          AUTO TECH <span className="text-red-500">SOURCE</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-red-400 ${
                pathname === link.href ? "text-red-400" : "text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/login"
          className="hidden rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-red-700 md:inline-block"
        >
          Login
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/20 p-2 md:hidden"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-gray-950 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-white/10 hover:text-red-400 ${
                pathname === link.href ? "text-red-400" : "text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-semibold hover:bg-red-700"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}