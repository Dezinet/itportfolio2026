"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  interface FooterLink {
    name: string;
    path: string;
    icon?: string;
  }

  interface FooterGroup {
    title: string;
    links: FooterLink[];
  }

  const footerLinks: FooterGroup[] = [

    {
      title: "Explore",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Lab", path: "/lab" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", path: "#", icon: "bi-github" },
        { name: "LinkedIn", path: "#", icon: "bi-linkedin" },
        { name: "Twitter", path: "#", icon: "bi-twitter-x" },
        { name: "Instagram", path: "#", icon: "bi-instagram" },
      ]
    }
  ];

  return (
    <footer className="w-full pt-32 pb-12 px-6 border-t border-white/[0.05] bg-[#0a0a0a]/40 backdrop-blur-3xl mt-40">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Top Section: CTA and Brand */}
        <div className="grid lg:grid-cols-2 gap-20 items-center border-b border-white/[0.05] pb-24">
          <div className="space-y-8 text-center lg:text-left">
            <Link href="/" className="text-3xl font-black tracking-tightest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 uppercase">
              Your Name
            </Link>
            <p className="text-slate-500 text-base md:text-lg max-w-md font-medium leading-relaxed mx-auto lg:mx-0">
              I build modern websites and smart systems for the next decade. Let's make something great together.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <span className="text-[10px] font-black tracking-[5px] text-slate-600 uppercase">Ready to start?</span>
            <Link 
              href="/contact" 
              className="group relative py-6 px-12 bg-white text-black font-black text-xs rounded-full overflow-hidden transition-all uppercase tracking-[4px] shadow-2xl"
            >
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative group-hover:text-white transition-colors">Start a Conversation</span>
            </Link>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-4">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6 text-center md:text-left">
              <h4 className="text-[10px] font-black text-white tracking-[5px] uppercase">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-sm font-bold text-slate-500 hover:text-purple-400 transition-all flex items-center gap-3 justify-center md:justify-start group"
                    >
                      {link.icon && <i className={`bi ${link.icon} text-slate-700 group-hover:text-purple-400`}></i>}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact Hint Piece */}
          <div className="col-span-2 md:col-span-1 space-y-6 text-center md:text-left mt-12 md:mt-0">
            <h4 className="text-[10px] font-black text-white tracking-[5px] uppercase">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">Keep up with my latest projects and ideas.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-white/[0.03] border border-white/5 py-4 px-6 rounded-2xl text-[10px] font-black text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-slate-800"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-white transition-colors">
                  <i className="bi bi-arrow-right text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-600 tracking-[3px] uppercase">
          <div className="flex items-center gap-4">
             <span>&copy; {currentYear} Your Name</span>
             <span className="hidden md:inline text-slate-800">•</span>
             <span>Open Source MIT</span>
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">RSS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
