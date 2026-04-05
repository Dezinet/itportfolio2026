"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Lab', path: '/lab' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="relative h-20 w-full bg-transparent border-b border-white/[0.03] px-8 flex justify-between items-center z-50 overflow-visible">
      {/* Logo */}
      <Link href="/" className="text-lg font-black tracking-tightest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 uppercase">
        Your Name
      </Link>

      {/* Desktop Menu - Stays exactly as it was */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} className="text-sm font-medium hover:text-purple-400 transition-colors">
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Socials / Controls */}
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex space-x-4 text-xl">
          <a href="#" className="hover:text-purple-400"><i className="bi bi-github"></i></a>
          <a href="#" className="hover:text-purple-400"><i className="bi bi-linkedin"></i></a>
        </div>

        {/* Mobile Hamburger Button - Only visible on small screens */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none z-[60] relative p-2"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white rounded-full"
          ></motion.span>
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white rounded-full"
          ></motion.span>
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white rounded-full"
          ></motion.span>
        </button>
      </div>

      {/* Mobile Sidebar - Sliding from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-[55] md:hidden"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-[#0d0d0d]/90 backdrop-blur-3xl border-l border-white/5 z-[56] md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Decorative Glow inside Sidebar */}
              <div className="absolute top-0 right-0 w-full h-[300px] bg-purple-600/10 blur-[100px] -z-10"></div>
              
              <div className="p-12 flex flex-col h-full relative z-10">
                <div className="mt-16 flex flex-col gap-10">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link 
                        href={item.path} 
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6"
                      >
                        <span className="text-4xl font-black uppercase tracking-tightest leading-none text-white group-hover:text-purple-400 transition-colors">
                          {item.name}
                        </span>
                        <div className="h-[2px] w-0 bg-purple-600 group-hover:w-8 transition-all duration-300"></div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-10">
                  <div className="h-[1px] w-full bg-white/[0.05]"></div>
                  <div className="flex gap-8 text-3xl">
                    <motion.a 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                      href="#" className="text-slate-500 hover:text-white transition-colors"><i className="bi bi-github"></i></motion.a>
                    <motion.a 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                      href="#" className="text-slate-500 hover:text-white transition-colors"><i className="bi bi-linkedin"></i></motion.a>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-700">
                    Your Name &copy; 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
}
