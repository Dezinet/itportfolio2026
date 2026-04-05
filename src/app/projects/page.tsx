"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectGrid from "@/components/sections/ProjectGrid";
import FilterModal from "@/components/ui/FilterModal";
import projectsData from "@/content/projects/data.json";

export default function Projects() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "ALL",
    industry: "ALL",
    year: "ALL",
    sortBy: "DEFAULT"
  });

  const categories = ["ALL", ...new Set(projectsData.map(p => p.category))];
  const industries = ["ALL", ...new Set(projectsData.map(p => p.industry))];
  const years = ["ALL", ...new Set(projectsData.map(p => p.year.toString()))].sort((a, b) => b.localeCompare(a));

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projectsData];

    // Filtering
    if (filters.category !== "ALL") {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.industry !== "ALL") {
      result = result.filter(p => p.industry === filters.industry);
    }
    if (filters.year !== "ALL") {
      result = result.filter(p => p.year.toString() === filters.year);
    }

    // Sorting
    switch (filters.sortBy) {
      case "YEAR_DESC":
        result.sort((a, b) => b.year - a.year);
        break;
      case "YEAR_ASC":
        result.sort((a, b) => a.year - b.year);
        break;
      case "COMPLEXITY_DESC":
        result.sort((a, b) => b.complexity - a.complexity);
        break;
      case "COMPLEXITY_ASC":
        result.sort((a, b) => a.complexity - b.complexity);
        break;
      case "TITLE_ASC":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep default order (by ID)
        break;
    }

    return result;
  }, [filters]);

  const activeFiltersCount = Object.values(filters).filter(v => v !== "ALL" && v !== "DEFAULT").length;

  return (
    <>
      <main className="min-h-screen bg-transparent text-slate-100 pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-24">

          {/* Header */}
          <section className="space-y-6 md:space-y-10 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-9xl font-black tracking-tightest leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600 uppercase"
              >
                PROJECTS.
              </motion.h1>
              <p className="text-sm md:text-lg text-slate-500 font-medium max-w-xl mx-auto tracking-tight uppercase">
                Things I Have Built and Worked On
              </p>
            </div>

            {/* Action Row */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 md:pt-12 border-t border-white/[0.03] max-w-7xl mx-auto gap-4 md:gap-0">
              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <button 
                  onClick={() => setFilterOpen(true)}
                  className="group flex items-center gap-3 md:gap-4 py-3 md:py-4 px-6 md:px-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all cursor-pointer relative"
                >
                  <i className="bi bi-sliders2 text-sm md:text-xl text-purple-400 group-hover:scale-110 transition-transform"></i>
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors">
                    FILTERS
                  </span>
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-purple-600 text-white text-[8px] md:text-[10px] font-black flex items-center justify-center rounded-full shadow-lg shadow-purple-600/20">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
                
                <div className="flex lg:flex items-center gap-6 md:pl-8 md:border-l border-white/[0.03]">
                  <div className="flex flex-col items-start gap-0 md:gap-1">
                    <span className="text-[7px] md:text-[8px] font-black text-slate-500 tracking-widest uppercase">TOTAL LIST</span>
                    <span className="text-xs md:text-sm font-black text-white">{filteredAndSortedProjects.length} ITEMS</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {filters.category !== "ALL" && (
                  <span className="text-[8px] md:text-[9px] font-black text-purple-400 py-1.5 px-4 border border-purple-400/20 rounded-full uppercase bg-purple-400/5 transition-all">
                    {filters.category}
                  </span>
                )}
                {filters.industry !== "ALL" && (
                  <span className="text-[8px] md:text-[9px] font-black text-cyan-400 py-1.5 px-4 border border-cyan-400/20 rounded-full uppercase bg-cyan-400/5 transition-all">
                    {filters.industry}
                  </span>
                )}
              </div>
            </div>

          </section>

          <div className="space-y-8 md:space-y-12">

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                layout
                key={JSON.stringify(filters)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectGrid projects={filteredAndSortedProjects} />
              </motion.div>
            </AnimatePresence>

            {filteredAndSortedProjects.length === 0 && (
              <div className="text-center py-40 space-y-8 glass rounded-[4rem] border border-white/5">
                <div className="w-24 h-24 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-purple-600/20">
                  <i className="bi bi-search text-3xl text-purple-400"></i>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase text-white tracking-tighter">NOTHING HERE.</h3>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto uppercase text-xs tracking-widest leading-loose">
                    We could not find any projects for the filters you chose.
                  </p>
                </div>
                <button
                  onClick={() => setFilters({ category: "ALL", industry: "ALL", year: "ALL", sortBy: "DEFAULT" })}
                  className="px-10 py-4 bg-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:bg-purple-500 transition-all shadow-[0_0_40px_rgba(138,43,226,0.3)]"
                >
                  RESTORE LIST
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        industries={industries}
        years={years}
      />
    </>
  );
}
