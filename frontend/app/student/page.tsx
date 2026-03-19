'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  BookOpen, 
  Trophy, 
  Clock, 
  ArrowUpRight,
  Brain,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const StudentDashboard = () => {
  return (
    <div className="space-y-16">
      {/* Welcome Banner - Editorial Style */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#1a1a1a] p-8 md:p-16 text-[#fdfcf8]">
        <div className="relative z-10 max-w-2xl">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fdfcf8]/40 mb-6">Academy Scholar Portal</div>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 italic leading-tight">Welcome back, <br />Scholar Alex.</h1>
          <p className="font-serif text-lg md:text-xl text-[#fdfcf8]/60 italic mb-10 leading-relaxed">
            The Professor Agents have refined your curriculum. Your progress in the &quot;Neural Architectures&quot; archives is currently at 85%.
          </p>
          <Link 
            href="/student/classes/neural-101"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 bg-[#fdfcf8] text-[#1a1a1a] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#fdfcf8]/90 transition-all"
          >
            Enter the Archives <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute top-0 right-0 p-8 md:p-16 opacity-10 pointer-events-none">
          <Brain className="w-40 h-40 md:w-80 md:h-80" />
        </div>
      </section>

      {/* Stats Grid - Minimalist */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { label: "Active Pursuits", value: "4", icon: <BookOpen className="w-4 h-4" /> },
          { label: "Knowledge Depth", value: "842", icon: <Zap className="w-4 h-4" /> },
          { label: "Certifications", value: "3", icon: <Trophy className="w-4 h-4" /> },
          { label: "Scholarly Hours", value: "124h", icon: <Clock className="w-4 h-4" /> },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <div className="text-[#1a1a1a]/20 mb-4">{stat.icon}</div>
            <div className="font-serif text-4xl font-light mb-2 italic">{stat.value}</div>
            <div className="text-[10px] text-[#1a1a1a]/40 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-16">
        {/* Active Classes - List Style */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between border-b border-[#1a1a1a]/5 pb-6">
            <h2 className="font-serif text-3xl font-light italic">Active Pursuits</h2>
            <Link href="/student/classes" className="text-[10px] font-bold text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors uppercase tracking-[0.2em]">View All Archives</Link>
          </div>
          
          <div className="space-y-12">
            {[
              { 
                title: "Neural Architectures 101", 
                professor: "Prof. Neuron", 
                progress: 85, 
                nextTask: "Assignment: Transformers",
                status: "urgent"
              },
              { 
                title: "Advanced Prompt Engineering", 
                professor: "Prof. Lexicon", 
                progress: 42, 
                nextTask: "Class: Chain of Thought",
                status: "normal"
              },
              { 
                title: "Agentic Workflows", 
                professor: "Prof. Orchestrator", 
                progress: 12, 
                nextTask: "Intro: Multi-Agent Systems",
                status: "normal"
              }
            ].map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-normal group-hover:italic transition-all">{course.title}</h3>
                    <p className="text-[10px] text-[#1a1a1a]/40 font-bold uppercase tracking-widest mt-2 italic">Under the guidance of {course.professor}</p>
                  </div>
                  {course.status === 'urgent' && (
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                      <AlertCircle className="w-3 h-3" /> Priority
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="h-px w-full bg-[#1a1a1a]/5 overflow-hidden">
                    <div className="h-full bg-[#1a1a1a] transition-all duration-1000" style={{ width: `${course.progress}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40">
                    <span>Next Milestone: {course.nextTask}</span>
                    <span>{course.progress}% Complete</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Agent Updates - Academic Sidebar */}
        <div className="space-y-12">
          <h2 className="font-serif text-3xl font-light italic">Faculty Updates</h2>
          <div className="space-y-10">
            {[
              { 
                agent: "The Examiner", 
                msg: "Validated your 'CNN' assignment: 94/100", 
                time: "2h ago",
                icon: <CheckCircle2 className="w-4 h-4" />
              },
              { 
                agent: "Educational Body", 
                msg: "New class added to your Diploma path", 
                time: "5h ago",
                icon: <BookOpen className="w-4 h-4" />
              },
              { 
                agent: "Professor Neuron", 
                msg: "Responded to your inquiry on 'Backprop'", 
                time: "1d ago",
                icon: <Brain className="w-4 h-4" />
              }
            ].map((update, i) => (
              <div key={i} className="flex gap-6">
                <div className="mt-1 text-[#1a1a1a]/20">{update.icon}</div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/30 mb-2">{update.agent}</div>
                  <p className="font-serif text-lg text-[#1a1a1a]/70 leading-snug italic">{update.msg}</p>
                  <div className="text-[10px] text-[#1a1a1a]/20 mt-3 font-bold uppercase tracking-widest">{update.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-[2rem] border border-[#1a1a1a]/5 bg-[#1a1a1a]/5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/40 mb-6 flex items-center gap-3">
              <Trophy className="w-4 h-4" />
              Next Milestone
            </h3>
            <p className="font-serif text-xl text-[#1a1a1a]/70 italic mb-8">Complete &quot;Transformers&quot; to receive your Junior AI Architect certification.</p>
            <div className="h-px w-full bg-[#1a1a1a]/10 overflow-hidden">
              <div className="h-full bg-[#1a1a1a] w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
