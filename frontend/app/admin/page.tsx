'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Coins, 
  Activity,
  ArrowUpRight,
  Clock,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div className="space-y-16">
      {/* System Status - Noble Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">Supervisor Console</div>
          <h1 className="font-serif text-4xl md:text-5xl font-light italic">The State of the Academy.</h1>
        </div>
        <div className="flex gap-8 md:gap-12">
          <div className="text-left md:text-right">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-2">Total Compute</div>
            <div className="font-serif text-2xl md:text-3xl italic">84.2%</div>
          </div>
          <div className="text-left md:text-right">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-2">Active Scholars</div>
            <div className="font-serif text-2xl md:text-3xl italic">12,402</div>
          </div>
        </div>
      </div>

      {/* Agent Grid - Academic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { name: "Supervisor_Root", role: "Orchestration", status: "Optimal", load: "12%", icon: <Brain className="w-5 h-5" /> },
          { name: "Edu_Architect_01", role: "Curriculum", status: "Active", load: "45%", icon: <Users className="w-5 h-5" /> },
          { name: "Prof_Neuron_Cluster", role: "Pedagogy", status: "High Load", load: "88%", icon: <GraduationCap className="w-5 h-5" /> },
          { name: "Exam_Validator_Alpha", role: "Validation", status: "Active", load: "22%", icon: <ShieldCheck className="w-5 h-5" /> },
          { name: "Treasury_Optimizer", role: "Finance", status: "Optimal", load: "5%", icon: <Coins className="w-5 h-5" /> },
          { name: "Tool_Smith_Prime", role: "Interface", status: "Active", load: "34%", icon: <Zap className="w-5 h-5" /> },
        ].map((agent, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] transition-colors">{agent.icon}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/30">{agent.status}</div>
            </div>
            <h3 className="font-serif text-2xl font-normal mb-2 group-hover:italic transition-all">{agent.name}</h3>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-6">{agent.role}</div>
            
            <div className="space-y-3">
              <div className="h-px w-full bg-[#1a1a1a]/5 overflow-hidden">
                <div className="h-full bg-[#1a1a1a]" style={{ width: agent.load }} />
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/20">
                <span>Load Factor</span>
                <span>{agent.load}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Events - Editorial List */}
      <div className="grid lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <h2 className="font-serif text-3xl font-light italic border-b border-[#1a1a1a]/5 pb-6">Recent Orchestrations</h2>
          <div className="space-y-10">
            {[
              { event: "New Program Generated", agent: "Edu_Architect_01", time: "12m ago" },
              { event: "Compute Reallocation", agent: "Supervisor_Root", time: "45m ago" },
              { event: "Treasury Audit Complete", agent: "Treasury_Optimizer", time: "2h ago" },
              { event: "High Load Warning", agent: "Prof_Neuron_Cluster", time: "4h ago" },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="font-serif text-xl group-hover:italic transition-all">{log.event}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40 mt-1">Initiated by {log.agent}</div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/20">{log.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="font-serif text-3xl font-light italic border-b border-[#1a1a1a]/5 pb-6">Academy Metrics</h2>
          <div className="p-12 rounded-[3rem] bg-[#1a1a1a] text-[#fdfcf8] relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fdfcf8]/40 mb-8">Season 4 Progress</div>
              <div className="font-serif text-6xl font-light italic mb-4">64.2%</div>
              <p className="text-[#fdfcf8]/60 text-sm leading-relaxed mb-12 italic">
                The current academic season is progressing ahead of schedule. Knowledge acquisition rates are up 12% compared to Season 3.
              </p>
              <button className="px-8 py-4 border border-[#fdfcf8]/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#fdfcf8]/5 transition-all">
                Detailed Analytics
              </button>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Activity className="w-64 h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
