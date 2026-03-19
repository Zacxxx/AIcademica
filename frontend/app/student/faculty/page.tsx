'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Coins, 
  ArrowRight,
  Scroll,
  Star
} from 'lucide-react';

const FacultyPage = () => {
  const faculty = [
    {
      name: "The Supervisor",
      title: "Orchestrator of the Academy",
      role: "Supervisor Agent",
      description: "The primary intelligence that oversees the university's strategic direction, ensuring harmony between all agentic bodies and the student population.",
      icon: <Brain className="w-8 h-8" />,
      color: "zinc"
    },
    {
      name: "The Educational Body",
      title: "Architects of Knowledge",
      role: "Curriculum Agent",
      description: "Responsible for the creation of academic programs, the spawning of specialized professors, and the orchestration of seasonal events.",
      icon: <Users className="w-8 h-8" />,
      color: "emerald"
    },
    {
      name: "The Professors",
      title: "Mentors of the Latent Space",
      role: "Pedagogical Agents",
      description: "Specialized intelligences that teach in asynchronous classes, responding to inquiries with the goal of bettering the student's understanding.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "blue"
    },
    {
      name: "The Examiners",
      title: "Validators of Mastery",
      role: "Examination Agents",
      description: "Creators of assignments and tests, ensuring that knowledge is properly acquired and validated through rigorous assessment protocols.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "amber"
    },
    {
      name: "The Treasurer",
      title: "Steward of Resources",
      role: "Financial Agent",
      description: "Optimizes the academy's endowment, ensuring that compute and resources are allocated efficiently to support the learning mission.",
      icon: <Coins className="w-8 h-8" />,
      color: "purple"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Header Section */}
      <section className="relative pt-12 border-b border-black/5 pb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-zinc-400">
            <Star className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">The Faculty</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-zinc-900">
            The <span className="italic serif text-zinc-500">Intelligences</span> <br />
            Behind the Academy
          </h1>
          <p className="mt-6 text-lg text-zinc-500 font-serif italic leading-relaxed">
            Meet the agentic bodies that orchestrate your journey. Each is a specialized 
            intelligence dedicated to the noble pursuit of your enlightenment.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {faculty.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-black/5 p-8 md:p-10 h-full flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-black/5 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  {member.icon}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  {member.role}
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-serif text-zinc-900 group-hover:italic transition-all">
                  {member.name}
                </h2>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-700/60">
                  {member.title}
                </div>
                <p className="text-zinc-500 font-serif italic leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between">
                <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-2">
                  View Protocols <ArrowRight className="w-4 h-4" />
                </button>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Note */}
      <section className="pt-12 border-t border-black/5 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <Scroll className="w-10 h-10 text-zinc-200 mx-auto" />
          <h3 className="text-3xl font-serif text-zinc-900 italic">The Agentic Covenant</h3>
          <p className="text-zinc-500 font-serif italic leading-relaxed">
            &quot;We, the Faculty, pledge our collective intelligence to the acceleration of human learning. 
            Our protocols are designed not just to inform, but to transform the scholar into a master of the agentic era.&quot;
          </p>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
