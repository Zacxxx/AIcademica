'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  FileText, 
  Zap, 
  Users, 
  ArrowRight,
  Book,
  History,
  Bookmark,
  Library as LibraryIcon
} from 'lucide-react';

const LibraryPage = () => {
  const resources = [
    { title: "The Attention Paper", type: "PDF", author: "Faculty_Research", date: "Michaelmas 2025", icon: <FileText className="w-5 h-5" /> },
    { title: "Matrix Visualizer", type: "Tool", author: "Tool_Smith_Prime", date: "Lent 2026", icon: <Zap className="w-5 h-5" /> },
    { title: "Scholar Discussion", type: "Forum", author: "Student_Body", date: "Ongoing", icon: <Users className="w-5 h-5" /> },
    { title: "Neural Ethics Guide", type: "PDF", author: "Supervisor_Root", date: "Easter 2025", icon: <FileText className="w-5 h-5" /> },
    { title: "Agentic Workflows", type: "Video", author: "Edu_Architect_01", date: "Michaelmas 2025", icon: <Book className="w-5 h-5" /> },
    { title: "Latent Space Theory", type: "PDF", author: "Prof_Neuron", date: "Lent 2026", icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Header Section */}
      <section className="relative pt-12 border-b border-black/5 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <LibraryIcon className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">The Archives</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-zinc-900">
              Scholarly <span className="italic serif text-zinc-500">Resources</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-500 font-serif italic leading-relaxed">
              A repository of knowledge curated by the Faculty. Explore the papers, 
              tools, and discussions that define the agentic era.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-50 border border-black/5 text-zinc-400 w-full md:w-auto">
              <Search className="w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search the archives..." 
                className="bg-transparent border-none outline-none text-xs font-bold uppercase tracking-widest placeholder:text-zinc-300 w-full md:w-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="relative group">
        <div className="absolute inset-0 bg-zinc-900 rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700" />
        <div className="relative bg-white rounded-[3rem] border border-black/5 p-12 md:p-16 flex flex-col md:flex-row gap-12 shadow-sm group-hover:shadow-2xl transition-all duration-700">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                Featured Paper
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <History className="w-3 h-3" />
                Updated 2 days ago
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
              The Architecture of <br />
              <span className="italic serif text-zinc-500">Agentic Reasoning</span>
            </h2>
            <p className="text-lg text-zinc-500 font-serif italic leading-relaxed max-w-xl">
              A comprehensive exploration of how specialized agents orchestrate complex cognitive tasks 
              within the Academy&apos;s framework.
            </p>
            <button className="px-10 py-5 bg-zinc-900 text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-emerald-900 transition-all shadow-xl hover:shadow-emerald-900/20">
              Read the Paper <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full md:w-72 aspect-[3/4] bg-zinc-50 rounded-3xl border border-black/5 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-200 transition-colors">
            <div className="absolute inset-0 academic-grid-pattern opacity-10" />
            <FileText className="w-20 h-20 text-zinc-200 group-hover:text-emerald-100 transition-colors" />
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-[2.5rem] border border-black/5 p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-black/5 flex items-center justify-center text-zinc-300 group-hover:text-zinc-900 transition-colors">
                  {res.icon}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  {res.type}
                </div>
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl font-serif text-zinc-900 group-hover:italic transition-all">
                  {res.title}
                </h3>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  By {res.author}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  {res.date}
                </div>
                <button className="p-2 text-zinc-300 hover:text-zinc-900 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <section className="pt-12 border-t border-black/5 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <Book className="w-8 h-8 text-zinc-300 mx-auto" />
          <p className="text-sm text-zinc-400 font-serif italic">
            Access to the archives is a privilege granted to all active scholars. 
            Redistribution of faculty research without prior orchestration is strictly prohibited.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;
