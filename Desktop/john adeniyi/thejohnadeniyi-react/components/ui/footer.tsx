"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Mail, Heart, ArrowUp, Briefcase } from "lucide-react";

// --- Social Icons ---
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4l16 16"/><path d="M4 20L20 4"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MediumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.82 6.82 0 010 12a6.82 6.82 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z" /></svg>
);

// --- Theme Toggle Component ---


export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted border-slate-300 dark:border-slate-700">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-3 rounded-full p-2 text-white dark:bg-background dark:text-white"
        >
          <Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Light Theme</span>
        </button>

        <button type="button" onClick={handleScrollTop} className="p-2">
          <ArrowUp className="h-4 w-4 text-slate-500" />
          <span className="sr-only">Scroll to Top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-black ml-3 rounded-full p-2 text-black dark:text-white"
        >
          <Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Dark Theme</span>
        </button>
      </div>
    </div>
  );
};


// --- Main Footer Component ---
const navigation = {
  categories: [
    {
      id: "navigation",
      name: "Navigation",
      sections: [
        {
          id: "main",
          name: "Navigation",
          items: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/#services" },
            { name: "Portfolio", href: "/#portfolio" },
          ],
        },
        {
          id: "more",
          name: "More",
          items: [
            { name: "Products", href: "/products" },
            { name: "Testimonials", href: "/#testimonials" },
            { name: "Awards", href: "/awards" },
            { name: "Contact", href: "/contact" },
          ],
        },

        {
          id: "contact-info",
          name: "Contact",
          items: [
            { name: "hellojohnadeniyi@gmail.com", href: "mailto:hellojohnadeniyi@gmail.com" },
            { name: "Book a Call", href: "/contact" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted border-slate-300 dark:border-slate-700 rounded-xl p-2.5 transition-transform`;

export function Footer() {
  return (
    <footer className="border-b border-t border-slate-200 dark:border-slate-800 px-4 mx-auto w-full">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full">
            <Briefcase className="w-8 h-8 text-teal-600" />
          </p>
        </Link>
        <p className="bg-transparent text-center text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-left max-w-3xl">
          <strong className="block text-lg text-black dark:text-white mb-2">The John Adeniyi</strong>
          Brand strategy, visual identity, and mentorship for founders ready to build something that lasts. 
          Deep dive into your current brand, audience, and market position to uncover gaps and real opportunities for growth.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-slate-300 dark:border-slate-700"></div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 md:grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name} className="w-full md:w-auto">
                  <h3 className="text-sm font-semibold text-black dark:text-white mb-4">{section.name}</h3>
                  <ul
                    role="list"
                    className="flex flex-col space-y-3"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-slate-300 dark:border-slate-700"></div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-y-6 flex-col md:flex-row md:justify-between max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link aria-label="Email" href="mailto:hellojohnadeniyi@gmail.com" target="_blank" className={Underline}>
            <Mail strokeWidth={1.5} className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </Link>
          <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/adeniyi-john?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className={Underline}>
            <LinkedinIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </Link>
          <Link aria-label="Instagram" href="https://www.instagram.com/johnnykeystech01?igsh=ZTRtcXdubGY4dDhx" target="_blank" className={Underline}>
            <InstagramIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </Link>
          <Link aria-label="X (Twitter)" href="https://x.com/AdeniyiJohnOla1" target="_blank" className={Underline}>
            <XIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </Link>
          <Link aria-label="Medium" href="https://medium.com/@johnnykeystech01" target="_blank" className={Underline}>
            <MediumIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </Link>
        </div>

        
        <ThemeToggle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © {new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="text-teal-600 mx-1 h-4 w-4 animate-pulse" />
          <span> for </span>
          <span className="hover:text-teal-600 cursor-pointer text-black dark:text-white font-bold">
            <Link aria-label="Logo" href="/">
              The John Adeniyi
            </Link>
          </span>
          - All rights reserved.
        </div>
      </div>
    </footer>
  );
}
