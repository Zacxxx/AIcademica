'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  Award,
  Scroll,
  ShieldCheck,
  Star
} from 'lucide-react';

const DiplomasPage = () => {
  const diplomas = [
    {
      title: "Junior AI Architect",
      level: "First Degree",
      duration: "Michaelmas Term",
      status: "In Progress",
      progress: 75,
      description: "Foundational mastery of neural structures and agentic reasoning protocols.",
      classes: ["Neural Architectures 101", "Prompt Engineering", "Data Ethics"],
      color: "emerald"
    },
    {
      title: "Agentic Systems Engineer",
      level: "Second Degree",
      duration: "Lent Term",
      status: "Locked",
      progress: 0,
      description: "Advanced orchestration of multi-agent swarms and autonomous workflow synthesis.",
      classes: ["Multi-Agent Orchestration", "Autonomous Workflows", "Tool Integration"],
      color: "blue"
    },
    {
      title: "Neural Network Researcher",
      level: "Doctorate of Agents",
      duration: "Easter Term",
      status: "Locked",
      progress: 0,
      description: "Theoretical exploration of latent spaces and novel transformer methodologies.",
      classes: ["Advanced Transformers", "Latent Space Theory", "Research Methodology"],
      color: "purple"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Header Section */}
      <section className="relative pt-12 border-b border-black/5 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-emerald-800/60">
              <Scroll className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">Academic Records</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif leading-tight text-zinc-900">
              Diplomas <span className="italic serif text-zinc-500">&</span> <br />
              Certifications
            </h1>
            <p className="mt-6 text-lg text-zinc-600 font-serif italic max-w-lg leading-relaxed">
              The pursuit of knowledge is a noble endeavor. Here lie the paths to mastery, 
              orchestrated by the Faculty and validated by the Examination Agents.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Knowledge Score</div>
              <div className="text-4xl font-serif text-zinc-900">842 <span className="text-sm text-emerald-700 font-sans font-bold">pts</span></div>
            </div>
            <div className="px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              Dean&apos;s List Candidate
            </div>
          </div>
        </div>
      </section>

      {/* Diplomas Grid */}
      <div className="grid grid-cols-1 gap-12">
        {diplomas.map((diploma, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className={`relative overflow-hidden rounded-[2.5rem] bg-white border border-black/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${diploma.status === 'Locked' ? 'opacity-80 grayscale-[0.5]' : ''}`}>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50 group-hover:bg-emerald-50 transition-colors duration-700" />
              
              {diploma.status === 'Locked' && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10 flex items-center justify-center">
                  <div className="text-center p-8 bg-white/90 border border-black/5 rounded-3xl shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-black/5">
                      <Lock className="w-6 h-6 text-zinc-400" />
                    </div>
                    <h3 className="text-xl font-serif text-zinc-900 mb-1">Path Restricted</h3>
                    <p className="text-xs text-zinc-500 font-sans uppercase tracking-widest">Complete {diplomas[i-1]?.title} first</p>
                  </div>
                </div>
              )}

              <div className="relative z-0 p-10 md:p-12">
                <div className="grid md:grid-cols-12 gap-12">
                  {/* Left Column: Info */}
                  <div className="md:col-span-8 space-y-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.15em]">
                        {diploma.level}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                        <Award className="w-3 h-3" />
                        {diploma.duration}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4 group-hover:text-emerald-900 transition-colors">
                        {diploma.title}
                      </h2>
                      <p className="text-lg text-zinc-500 font-serif italic leading-relaxed max-w-xl">
                        {diploma.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                      {diploma.classes.map((c, j) => (
                        <div key={j} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 rounded-full border border-emerald-200 flex items-center justify-center bg-emerald-50 group-hover/item:bg-emerald-500 group-hover/item:border-emerald-500 transition-all">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 group-hover/item:text-white transition-colors" />
                          </div>
                          <span className="text-sm text-zinc-600 font-sans tracking-tight">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Progress & CTA */}
                  <div className="md:col-span-4 flex flex-col justify-between items-center md:items-end text-center md:text-right">
                    <div className="relative group/medal">
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl scale-0 group-hover/medal:scale-150 transition-transform duration-700" />
                      <div className="relative w-32 h-32 bg-zinc-50 rounded-full flex items-center justify-center border border-black/5 shadow-inner group-hover:bg-white transition-colors duration-500">
                        <Trophy className={`w-12 h-12 ${diploma.status === 'Locked' ? 'text-zinc-300' : 'text-emerald-700'} transition-colors`} />
                        
                        {/* Progress Ring for active */}
                        {diploma.status === 'In Progress' && (
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="60"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-emerald-500/10"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="60"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeDasharray={2 * Math.PI * 60}
                              strokeDashoffset={2 * Math.PI * 60 * (1 - diploma.progress / 100)}
                              className="text-emerald-600"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 space-y-6 w-full max-w-[200px]">
                      {diploma.status === 'In Progress' && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            <span>Completion</span>
                            <span className="text-emerald-700">{diploma.progress}%</span>
                          </div>
                          <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-600 transition-all duration-1000" 
                              style={{ width: `${diploma.progress}%` }} 
                            />
                          </div>
                        </div>
                      )}

                      {diploma.status === 'In Progress' ? (
                        <Link 
                          href="/student/classes"
                          className="w-full py-4 bg-zinc-900 text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-xl hover:shadow-emerald-900/20"
                        >
                          Continue Path <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="w-full py-4 bg-zinc-100 text-zinc-400 rounded-full font-bold text-xs uppercase tracking-widest cursor-not-allowed border border-black/5">
                          Apply Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <section className="pt-12 border-t border-black/5 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <ShieldCheck className="w-8 h-8 text-zinc-300 mx-auto" />
          <p className="text-sm text-zinc-400 font-serif italic">
            All diplomas are cryptographically signed by the Supervisor Agent and stored in the Permanent Academy Ledger. 
            Validation requires 100% completion of all core modules and a successful defense before the Examination Agents.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DiplomasPage;
