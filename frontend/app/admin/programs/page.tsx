'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Plus, 
  Search, 
  MoreVertical, 
  Users, 
  Clock, 
  Zap,
  Layout,
  ArrowRight
} from 'lucide-react';

const ProgramsPage = () => {
  const programs = [
    {
      title: "Neural Architectures v2",
      season: "Season 4",
      status: "Active",
      students: "4,200",
      classes: 12,
      completion: 64,
      color: "emerald"
    },
    {
      title: "Autonomous Agent Design",
      season: "Season 4",
      status: "Active",
      students: "1,840",
      classes: 8,
      completion: 42,
      color: "blue"
    },
    {
      title: "AI Policy & Governance",
      season: "Season 4",
      status: "Draft",
      students: "0",
      classes: 6,
      completion: 0,
      color: "zinc"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">Academic Programs</div>
          <h1 className="font-serif text-5xl font-light italic">The Curriculum of the Future.</h1>
        </div>
        <button className="px-10 py-5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#1a1a1a]/90 transition-all">
          <Plus className="w-4 h-4" /> Create New Program
        </button>
      </div>

      <div className="flex gap-8 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" />
          <input 
            type="text" 
            placeholder="Search the curriculum archives..." 
            className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full py-4 pl-14 pr-6 text-sm focus:border-[#1a1a1a]/20 outline-none transition-all placeholder:text-[#1a1a1a]/30"
          />
        </div>
        <div className="flex gap-4">
          {['All', 'Active', 'Draft'].map(filter => (
            <button key={filter} className="px-8 py-4 rounded-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1a1a1a]/10 transition-all">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {programs.map((program, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group grid lg:grid-cols-4 gap-12 items-center p-12 rounded-[3.5rem] border border-[#1a1a1a]/5 hover:border-[#1a1a1a]/10 transition-all"
          >
            <div className="lg:col-span-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/30 mb-4 italic">{program.season}</div>
              <h3 className="font-serif text-3xl font-normal group-hover:italic transition-all leading-tight">{program.title}</h3>
              <div className={cn(
                "mt-4 inline-block text-[10px] font-bold uppercase tracking-widest",
                program.status === 'Active' ? "text-emerald-600" : "text-[#1a1a1a]/30"
              )}>{program.status}</div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-12">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30 mb-2">Enrollment</div>
                <div className="font-serif text-2xl italic">{program.students} Scholars</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30 mb-2">Structure</div>
                <div className="font-serif text-2xl italic">{program.classes} Modules</div>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col items-end gap-8">
              <div className="w-full">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30 mb-3">
                  <span>Completion</span>
                  <span>{program.completion}%</span>
                </div>
                <div className="h-px w-full bg-[#1a1a1a]/5 overflow-hidden">
                  <div className="h-full bg-[#1a1a1a]" style={{ width: `${program.completion}%` }} />
                </div>
              </div>
              <button className="p-4 text-[#1a1a1a]/20 hover:text-[#1a1a1a] transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';

export default ProgramsPage;
