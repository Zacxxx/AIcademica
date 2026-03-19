'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ArrowRight,
  MoreVertical
} from 'lucide-react';

const ExamsPage = () => {
  const exams = [
    {
      id: "EX-402",
      title: "Module 4: Transformers & Attention",
      program: "Neural Architectures 101",
      status: "Grading",
      submissions: "1,120 / 1,240",
      avgScore: "84.2",
      deadline: "Mar 20, 2026",
      color: "emerald"
    },
    {
      id: "EX-401",
      title: "Module 3: CNNs & Computer Vision",
      program: "Neural Architectures 101",
      status: "Completed",
      submissions: "1,240 / 1,240",
      avgScore: "91.5",
      deadline: "Mar 10, 2026",
      color: "blue"
    },
    {
      id: "EX-102",
      title: "Introduction to Prompting",
      program: "Advanced Prompt Engineering",
      status: "Active",
      submissions: "842 / 3,420",
      avgScore: "78.0",
      deadline: "Mar 25, 2026",
      color: "amber"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">Examination Console</div>
          <h1 className="font-serif text-5xl font-light italic">The Validation of Knowledge.</h1>
        </div>
        <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/60">Validation Rate: 94.2%</span>
        </div>
      </div>

      <div className="flex gap-8 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" />
          <input 
            type="text" 
            placeholder="Search the examination records..." 
            className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full py-4 pl-14 pr-6 text-sm focus:border-[#1a1a1a]/20 outline-none transition-all placeholder:text-[#1a1a1a]/30"
          />
        </div>
        <button className="p-4 bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-all">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-[3rem] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1a1a1a]/5">
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">ID</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Examination Title</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Program</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Status</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Submissions</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Avg Score</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Deadline</th>
              <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30"></th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, i) => (
              <tr key={i} className="border-b border-[#1a1a1a]/5 hover:bg-[#1a1a1a]/5 transition-colors group">
                <td className="px-12 py-8 font-mono text-xs text-[#1a1a1a]/40">{exam.id}</td>
                <td className="px-12 py-8 font-serif text-xl italic">{exam.title}</td>
                <td className="px-12 py-8 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40 italic">{exam.program}</td>
                <td className="px-12 py-8">
                  <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                    exam.status === 'Grading' ? "bg-blue-500/5 text-blue-600 border border-blue-500/10" :
                    exam.status === 'Completed' ? "bg-emerald-500/5 text-emerald-600 border border-emerald-500/10" :
                    "bg-amber-500/5 text-amber-600 border border-amber-500/10"
                  )}>
                    {exam.status === 'Grading' && <Clock className="w-3 h-3" />}
                    {exam.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                    {exam.status === 'Active' && <AlertCircle className="w-3 h-3" />}
                    {exam.status}
                  </div>
                </td>
                <td className="px-12 py-8 text-xs text-[#1a1a1a]/40 font-mono">{exam.submissions}</td>
                <td className="px-12 py-8 font-serif text-2xl italic text-emerald-600">{exam.avgScore}</td>
                <td className="px-12 py-8 text-xs text-[#1a1a1a]/40 font-mono">{exam.deadline}</td>
                <td className="px-12 py-8 text-right">
                  <button className="p-2 text-[#1a1a1a]/20 hover:text-[#1a1a1a] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';

export default ExamsPage;
