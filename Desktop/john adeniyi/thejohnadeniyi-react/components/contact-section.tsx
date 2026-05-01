"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Twitter, ExternalLink, MessageSquare } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adeniyi-john",
    icon: Linkedin,
    color: "text-[#0077B5]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/johnnykeystech01",
    icon: Instagram,
    color: "text-[#E4405F]",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/AdeniyiJohnOla1",
    icon: Twitter,
    color: "text-black dark:text-white",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-teal-500"></div>
                <p className="text-teal-500 font-semibold tracking-widest uppercase text-sm">
                  Get in Touch
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                Let's build something <span className="text-teal-600">real.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Whether you have a clear project in mind or just need clarity on where to start, reach out. I read every message personally.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:hellojohnadeniyi@gmail.com" className="text-xl font-bold text-slate-900 dark:text-white hover:text-teal-600 transition-colors">
                      hellojohnadeniyi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">WhatsApp</p>
                    <a href="https://wa.link/kvw9gr" target="_blank" className="text-xl font-bold text-slate-900 dark:text-white hover:text-teal-600 transition-colors">
                      Chat with me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Connect on Social</h3>
              <div className="grid grid-cols-1 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-teal-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <social.icon className={`w-6 h-6 ${social.color}`} />
                      <span className="font-semibold text-slate-900 dark:text-white">{social.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                  </a>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                <a
                  href="https://wa.link/kvw9gr"
                  target="_blank"
                  className="inline-block w-full bg-[#063b36] text-white px-8 py-4 rounded-full font-bold hover:bg-[#042824] transition-all shadow-lg text-center"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
