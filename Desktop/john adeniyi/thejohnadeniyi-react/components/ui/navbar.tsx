"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Briefcase, Menu, X } from "lucide-react";
import { ThemeToggle } from "./footer";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Products", href: "/products" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Briefcase className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 dark:text-white leading-none">
              The John Adeniyi
            </span>
            <span className="text-[10px] uppercase tracking-widest text-teal-600 font-semibold">
              Brand Strategy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://wa.link/kvw9gr"
            target="_blank"
            className="bg-[#063b36] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#042824] transition-all shadow-sm"
          >
            Book a Call
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-slate-900 dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
              <Link
                href="https://wa.link/kvw9gr"
                target="_blank"
                className="bg-[#063b36] text-white px-6 py-3 rounded-full text-center font-semibold flex-1 mr-4"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
