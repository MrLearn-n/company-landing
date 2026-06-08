"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Оплата", href: "#payment" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Н</span>
            </div>
            <span className="text-xl font-bold text-slate-900">НовоТех</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#payment"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Оплатить услуги
          </a>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#payment"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold"
          >
            Оплатить услуги
          </a>
        </div>
      )}
    </header>
  );
}
