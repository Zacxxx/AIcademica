'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Brain, 
  ArrowRight,
  BookOpen,
  Trophy,
  LayoutDashboard,
  Users,
  GraduationCap,
  ShieldCheck,
  Coins,
  Zap,
  Star,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfcf8] selection:bg-[#1a1a1a]/10 text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#1a1a1a]/5 bg-[#fdfcf8]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#1a1a1a] rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <span className="font-serif font-semibold text-xl md:text-2xl tracking-tight italic">Agent University</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/60">
            <a href="#philosophy" className="hover:text-[#1a1a1a] transition-colors">Philosophy</a>
            <a href="#faculty" className="hover:text-[#1a1a1a] transition-colors">The Faculty</a>
            <a href="#programs" className="hover:text-[#1a1a1a] transition-colors">Curriculum</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/student" className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
              Student Portal
            </Link>
            <Link href="/admin" className="px-6 py-2.5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1a1a1a]/90 transition-colors">
              Supervisor
            </Link>
          </div>

          <button 
            className="lg:hidden p-2 text-[#1a1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#fdfcf8] border-b border-[#1a1a1a]/5 p-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/60">
              <a href="#philosophy" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1a1a1a] transition-colors">Philosophy</a>
              <a href="#faculty" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1a1a1a] transition-colors">The Faculty</a>
              <a href="#programs" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1a1a1a] transition-colors">Curriculum</a>
            </div>
            <div className="h-px bg-[#1a1a1a]/5" />
            <div className="flex flex-col gap-4">
              <Link href="/student" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60">
                Student Portal
              </Link>
              <Link href="/admin" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 bg-[#1a1a1a] text-[#fdfcf8] rounded-full text-xs font-bold uppercase tracking-widest text-center">
                Supervisor Console
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Direct & Punchy */}
      <section className="pt-24 lg:pt-32 min-h-[90vh] flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2">
          <div className="p-6 md:p-12 lg:p-20 xl:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#1a1a1a]/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Now Enrolling for Spring 2026
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 tracking-tighter">
                The Last <br />
                University <br />
                You&apos;ll Ever <span className="italic serif text-zinc-400">Need.</span>
              </h1>
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#1a1a1a]/70 max-w-lg mb-12 leading-relaxed italic">
                Master any subject with 24/7 personalized AI professors. Zero debt. Infinite scale. Accelerated by the Faculty of Agents.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link href="/student" className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#1a1a1a]/90 transition-all group shadow-xl shadow-black/10 active:scale-[0.98]">
                  Start Your Degree <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#fdfcf8] bg-zinc-200 overflow-hidden ring-1 ring-[#1a1a1a]/5">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                  <div className="pl-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Joined by <span className="text-[#1a1a1a]">12,402+</span> Scholars
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-20 xl:p-24">
            <div className="absolute inset-0 academic-grid-pattern opacity-10" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm"
            >
              {/* Product Preview UI Mockup */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-6">
                <div className="h-10 w-full bg-white/5 rounded-xl flex items-center px-4 gap-2 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                  <div className="h-3 w-24 md:w-32 bg-white/10 rounded-full ml-4" />
                </div>
                <div className="flex-1 flex gap-4 md:gap-6 overflow-hidden">
                  <div className="hidden sm:flex w-1/3 h-full bg-white/5 rounded-2xl p-4 flex-col gap-4 border border-white/5">
                    <div className="h-3 w-full bg-white/10 rounded-full" />
                    <div className="h-3 w-2/3 bg-white/10 rounded-full" />
                    <div className="h-3 w-1/2 bg-white/10 rounded-full" />
                    <div className="mt-auto h-20 w-full bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 h-full bg-white/10 rounded-2xl p-5 md:p-6 relative overflow-hidden border border-white/10">
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white">Professor Agent</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-3 w-3/4 bg-white/20 rounded-full" />
                      <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                      <div className="h-24 w-full bg-white/5 rounded-xl border border-white/10 p-4">
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-white/10 rounded-full" />
                          <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                          <div className="h-2 w-4/6 bg-white/10 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 h-10 bg-white/5 rounded-full border border-white/10 flex items-center px-4">
                      <div className="h-2 w-24 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction Bar */}
      <div className="py-16 border-y border-[#1a1a1a]/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Knowledge Points Earned", value: "84.2M+" },
              { label: "Active Agent Faculty", value: "1,200+" },
              { label: "Course Completion", value: "94.8%" },
              { label: "Average Mastery Speed", value: "3.2x" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-3xl md:text-4xl font-serif italic text-[#1a1a1a] mb-2 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#fdfcf8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
                Education is <span className="italic serif text-zinc-400">Broken.</span> <br />
                We Fixed It.
              </h2>
              <p className="text-lg md:text-xl text-[#1a1a1a]/60 font-serif italic leading-relaxed mb-12 max-w-xl">
                Traditional universities are slow, expensive, and generic. Agent University leverages a hierarchy of specialized AI to provide a curriculum that adapts to you in real-time.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Personalized Mastery", desc: "No more generic lectures. Your agent professor knows exactly where you struggle." },
                  { title: "Infinite Scale", desc: "Learn anything, anytime. Our library of 50,000+ subjects is always growing." },
                  { title: "Zero Debt", desc: "High-level education shouldn't cost a fortune. We've optimized the cost of intelligence." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-50 transition-colors duration-300">
                      <Star className="w-5 h-5 text-[#1a1a1a] group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a1a1a]/60 leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl"
            >
              <img src="https://picsum.photos/seed/library/1000/1000?grayscale" alt="Library" className="w-full h-full object-cover grayscale opacity-80" />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works - 3 Steps */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1a1a1a]/5 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20 md:mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">The Process</div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light italic tracking-tight">Three Steps to Mastery.</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            { step: "01", title: "Select Your Major", desc: "Choose from 50,000+ subjects curated by the Educational Body. From Neural Ethics to Quantum Gardening." },
            { step: "02", title: "Meet Your Faculty", desc: "Get assigned a personalized Professor, Examiner, and Supervisor. They adapt to your learning style instantly." },
            { step: "03", title: "Achieve Mastery", desc: "Learn at your own pace with real-time feedback and dynamic tools. Earn verified diplomas on the blockchain." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="text-8xl md:text-9xl font-serif italic text-zinc-100 absolute -top-12 md:-top-16 -left-4 group-hover:text-emerald-50 transition-colors duration-500 select-none">{item.step}</div>
              <div className="relative z-10 pt-8">
                <h3 className="font-serif text-2xl md:text-3xl mb-6 italic tracking-tight">{item.title}</h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Faculty - Academic Grid */}
      <section id="faculty" className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 italic tracking-tight">The Faculty of <br />Agents.</h2>
              <p className="text-[#1a1a1a]/60 leading-relaxed mb-12 text-lg italic">
                A structured hierarchy of intelligence, designed to curate, educate, and validate the human mind with unprecedented precision.
              </p>
              <div className="w-20 h-px bg-[#1a1a1a]/20" />
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
              {[
                {
                  title: "The Supervisor",
                  role: "Orchestrator",
                  icon: <Brain className="w-8 h-8" />,
                  desc: "The guiding hand of the institution. Defines the season's intellectual axes and ensures the harmony of all agent interactions."
                },
                {
                  title: "The Educational Body",
                  role: "Architect",
                  icon: <Users className="w-8 h-8" />,
                  desc: "The designer of experience. Spawns programs, classes, and events that translate the Supervisor's intent into structured learning."
                },
                {
                  title: "The Professor",
                  role: "Mentor",
                  icon: <GraduationCap className="w-8 h-8" />,
                  desc: "The voice of wisdom. Delivers knowledge asynchronously, responding to the student's curiosity with pedagogical grace."
                },
                {
                  title: "The Examiner",
                  role: "Validator",
                  icon: <ShieldCheck className="w-8 h-8" />,
                  desc: "The guardian of standards. Verifies the acquisition of knowledge through rigorous, fair, and intelligent assessment."
                },
                {
                  title: "The Treasurer",
                  role: "Financier",
                  icon: <Coins className="w-8 h-8" />,
                  desc: "The steward of resources. Manages the Academy's endowment and ensures the sustainability of our intellectual mission."
                },
                {
                  title: "The Tool Agent",
                  role: "Enabler",
                  icon: <Zap className="w-8 h-8" />,
                  desc: "The artisan of interface. Provides the dynamic visual tools and virtual whiteboards that bring abstract concepts to life."
                }
              ].map((agent, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="mb-8 text-[#1a1a1a]/20 group-hover:text-emerald-500/40 transition-colors duration-500">{agent.icon}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/40 mb-4">{agent.role}</div>
                  <h3 className="font-serif text-3xl font-normal mb-6 italic tracking-tight group-hover:text-emerald-900 transition-colors">{agent.title}</h3>
                  <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{agent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Immersive Text */}
      <section id="philosophy" className="py-32 md:py-48 px-6 md:px-8 bg-[#1a1a1a] text-[#fdfcf8] relative overflow-hidden">
        <div className="absolute inset-0 academic-grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light mb-12 md:mb-16 italic leading-tight tracking-tight">
              &quot;Intelligence is not a destination, but a noble journey of the soul.&quot;
            </h2>
            <div className="w-12 h-px bg-[#fdfcf8]/20 mx-auto mb-12 md:mb-16" />
            <p className="font-serif text-lg md:text-2xl text-[#fdfcf8]/60 leading-relaxed italic max-w-2xl mx-auto">
              We believe that by delegating the orchestration of learning to specialized agents, we free the human mind to engage in deeper, more meaningful inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Section - Out of the Box Layout */}
      <section className="py-24 md:py-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
            
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-8">Admissions</div>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-12 leading-[1.1] tracking-tight">
                  A Path for the <br />
                  <span className="italic serif text-zinc-500">Exceptional.</span>
                </h2>
                <div className="space-y-8 max-w-lg">
                  <p className="text-lg text-[#1a1a1a]/60 font-serif italic leading-relaxed">
                    The Academy is not for everyone. We seek those with the curiosity to explore the latent spaces and the discipline to master the agentic protocols.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                    <Link href="/student/diplomas" className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#1a1a1a]/90 transition-all shadow-2xl shadow-[#1a1a1a]/20 text-center">
                      Apply for Scholarship
                    </Link>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">
                      Next Intake: <span className="text-[#1a1a1a]">April 2026</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -top-12 -left-12 w-48 h-48 border border-[#1a1a1a]/5 rounded-full flex items-center justify-center animate-float hidden md:flex">
                  <Star className="w-8 h-8 text-amber-500/20" />
                </div>
                <div className="relative z-0 aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-[#1a1a1a]/5 shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/scholar/1000/1000?grayscale" 
                    alt="Scholar" 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a]/20 to-transparent" />
                </div>
                <div className="absolute -bottom-12 -right-12 p-10 md:p-12 bg-white rounded-[2.5rem] md:rounded-[3rem] border border-[#1a1a1a]/5 shadow-2xl max-w-xs hidden md:block">
                  <div className="font-serif text-xl italic mb-6 leading-relaxed">&quot;The faculty agents have transformed my understanding of neural ethics.&quot;</div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 border border-black/5" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest">Elena Vance</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">Lvl 18 Scholar</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Love - Social Proof */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#1a1a1a] text-[#fdfcf8]">
        <div className="max-w-7xl mx-auto text-center mb-20 md:mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fdfcf8]/40 mb-6">Wall of Love</div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light italic tracking-tight">Voices from the Academy.</h2>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "Marcus Thorne", role: "Quantum Physics Scholar", text: "The personalized feedback from my Professor Agent is better than any human tutor I've ever had. It's like they're in my head." },
            { name: "Sarah Chen", role: "Digital Ethics Graduate", text: "I finished my degree in 4 months. The speed of learning here is unprecedented. The Examiner Agent is tough but fair." },
            { name: "Julian Rossi", role: "AI Orchestration Major", text: "The integration of tools and theory is seamless. Agent University is the only place that actually prepares you for the future." },
            { name: "Aria Smith", role: "Lvl 22 Bio-Hacker", text: "Traditional school felt like a prison. Here, I feel like a pioneer. The Faculty Agents are truly noble." },
            { name: "David Wu", role: "Philosophy of Mind Student", text: "I never thought an AI could challenge my philosophical assumptions so deeply. Truly a noble pursuit." },
            { name: "Lila Vance", role: "Neural Artist", text: "The visual tools provided by the Tool Agent are a game changer for my creative process. Mastery is finally within reach." }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 text-amber-500 fill-amber-500" />)}
              </div>
              <p className="font-serif italic text-lg mb-8 leading-relaxed text-white/80 group-hover:text-white transition-colors">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">{testimonial.name}</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-white/40">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 px-6 md:px-8 bg-[#fdfcf8] text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-12 leading-[1.1] tracking-tight">
              The Future of <br />
              Education is <span className="italic serif text-zinc-400">Agentic.</span>
            </h2>
            <p className="font-serif text-xl md:text-2xl text-[#1a1a1a]/60 mb-16 italic max-w-2xl mx-auto">
              Join the noble pursuit. Start your journey today.
            </p>
            <Link href="/student" className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-[#1a1a1a]/90 transition-all shadow-2xl shadow-black/20 inline-block active:scale-[0.98]">
              Apply to the Academy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-24 px-6 md:px-8 bg-[#1a1a1a] text-[#fdfcf8]/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="w-8 h-8 bg-[#fdfcf8] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Brain className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <span className="font-serif text-lg tracking-tighter text-[#fdfcf8]">Agent University</span>
            </div>
            <p className="font-serif italic text-sm leading-relaxed max-w-xs">
              The world&apos;s first autonomous academy. <br />
              Established 2024.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fdfcf8] mb-8">Academy</div>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Curriculum</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Faculty</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Scholarships</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Research</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fdfcf8] mb-8">Connect</div>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Discord</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fdfcf8] mb-8">Legal</div>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-[#fdfcf8] transition-colors">Ethics</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.3em]">
          <div>© 2024 Agent University. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#fdfcf8] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#fdfcf8] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
