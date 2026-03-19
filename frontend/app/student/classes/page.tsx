'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock, 
  Users, 
  ArrowRight,
  Brain
} from 'lucide-react';
import Link from 'next/link';

const ClassesPage = () => {
  const classes = [
    {
      id: "neural-101",
      title: "Neural Architectures 101",
      professor: "Prof. Neuron",
      students: "1,240",
      duration: "15 Modules",
      progress: 85,
      tags: ["Deep Learning", "AI Architecture"],
      color: "emerald"
    },
    {
      id: "prompt-eng",
      title: "Advanced Prompt Engineering",
      professor: "Prof. Lexicon",
      students: "3,420",
      duration: "8 Modules",
      progress: 42,
      tags: ["NLP", "LLMs"],
      color: "blue"
    },
    {
      id: "agentic-workflows",
      title: "Agentic Workflows",
      professor: "Prof. Orchestrator",
      students: "840",
      duration: "12 Modules",
      progress: 12,
      tags: ["Multi-Agent", "Automation"],
      color: "purple"
    },
    {
      id: "data-ethics",
      title: "AI Ethics & Governance",
      professor: "Prof. Guardian",
      students: "2,100",
      duration: "6 Modules",
      progress: 0,
      tags: ["Ethics", "Policy"],
      color: "amber"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">Scholar Curriculum</div>
          <h1 className="font-serif text-4xl md:text-5xl font-light italic">My Scholarly Pursuits.</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" />
            <input 
              type="text" 
              placeholder="Search the archives..." 
              className="bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full py-4 pl-14 pr-8 text-sm focus:border-[#1a1a1a]/20 outline-none transition-all w-full placeholder:text-[#1a1a1a]/30"
            />
          </div>
          <button className="p-4 bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-all flex items-center justify-center">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {classes.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] transition-colors">
                <BookOpen className="w-10 h-10" />
              </div>
              <div className="flex gap-3">
                {c.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 rounded-full border border-[#1a1a1a]/10 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40 italic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-serif text-3xl font-normal mb-4 group-hover:italic transition-all">{c.title}</h3>
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-10 italic">
              <div className="flex items-center gap-2">
                <Brain className="w-3.5 h-3.5" /> {c.professor}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5" /> {c.students} Scholars
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> {c.duration}
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40">
                <span>Knowledge Acquisition</span>
                <span>{c.progress}%</span>
              </div>
              <div className="h-px w-full bg-[#1a1a1a]/5 overflow-hidden">
                <div className="h-full bg-[#1a1a1a] transition-all duration-1000" style={{ width: `${c.progress}%` }} />
              </div>
            </div>

            <Link 
              href={`/student/classes/${c.id}`}
              className="w-full py-5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#1a1a1a]/90 transition-all group/btn"
            >
              {c.progress > 0 ? 'Continue Inquiry' : 'Begin Inquiry'}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
