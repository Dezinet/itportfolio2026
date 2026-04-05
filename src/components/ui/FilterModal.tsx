"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Filters {
  category: string;
  industry: string;
  year: string;
  sortBy: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  categories: string[];
  industries: string[];
  years: string[];
}

export default function FilterModal({ 
  isOpen, 
  onClose, 
  filters, 
  setFilters,
  categories,
  industries,
  years
}: FilterModalProps) {
  
  const clearFilters = () => {
    setFilters({
      category: "ALL",
      industry: "ALL",
      year: "ALL",
      sortBy: "DEFAULT"
    });
  };

  const sortOptions = [
    { label: "Default", value: "DEFAULT" },
    { label: "Year (Newest)", value: "YEAR_DESC" },
    { label: "Year (Oldest)", value: "YEAR_ASC" },
    { label: "Complexity (Highest)", value: "COMPLEXITY_DESC" },
    { label: "Complexity (Lowest)", value: "COMPLEXITY_ASC" },
    { label: "Alphabetical (A-Z)", value: "TITLE_ASC" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Transparent Overlay for click-to-close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a0a] border-l border-white/5 z-[101] shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-10">
              <div className="space-y-1">
                <h3 className="text-xl font-black uppercase tracking-tighter text-white">FILTER.</h3>
                <p className="text-[10px] font-bold text-slate-500 tracking-[3px] uppercase">CHOOSE WHAT YOU WANT TO SEE</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <i className="bi bi-x-lg text-lg text-white"></i>
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-12">
              
              {/* Categories */}
              <section className="space-y-4">
                <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">CATEGORY</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${filters.category === cat ? "bg-purple-600 border-purple-600 shadow-[0_0_20px_rgba(138,43,226,0.3)] text-white" : "bg-white/5 border-white/10 text-slate-400"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </section>

              {/* Industries */}
              <section className="space-y-4">
                <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">INDUSTRY</h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setFilters(prev => ({ ...prev, industry: ind }))}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${filters.industry === ind ? "bg-purple-600 border-purple-600 shadow-[0_0_20px_rgba(138,43,226,0.3)] text-white" : "bg-white/5 border-white/10 text-slate-400"}`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </section>

              {/* Years */}
              <section className="space-y-4">
                <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">YEAR</h4>
                <div className="flex flex-wrap gap-2">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setFilters(prev => ({ ...prev, year: y }))}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${filters.year === y ? "bg-purple-600 border-purple-600 shadow-[0_0_20px_rgba(138,43,226,0.3)] text-white" : "bg-white/5 border-white/10 text-slate-400"}`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </section>

              {/* Sorting */}
              <section className="space-y-4">
                <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">SORT BY</h4>
                <div className="grid grid-cols-2 gap-2">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFilters(prev => ({ ...prev, sortBy: opt.value }))}
                      className={`px-4 py-3 rounded-xl text-[10px] font-bold text-left uppercase tracking-widest transition-all border ${filters.sortBy === opt.value ? "bg-purple-600/10 border-purple-600 text-purple-400" : "bg-white/5 border-white/10 text-slate-500"}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </section>

            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 p-8 border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl grid grid-cols-2 gap-4">
              <button 
                onClick={clearFilters}
                className="py-4 rounded-2xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              >
                Clear All
              </button>
              <button 
                onClick={onClose}
                className="py-4 rounded-2xl bg-purple-600 text-[10px] font-black uppercase tracking-widest text-white hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(138,43,226,0.3)]"
              >
                Show Projects
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
