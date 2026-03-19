'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Coins, 
  Zap, 
  Settings,
  Activity,
  Cpu,
  Database,
  MoreHorizontal
} from 'lucide-react';

const AgentsPage = () => {
  const agents = [
    {
      name: "Supervisor_Root",
      role: "Supervisor",
      icon: <Brain className="w-6 h-6" />,
      status: "Optimal",
      uptime: "99.99%",
      tasks: ["Orchestrating Season 4", "Resource Allocation", "Agent Health Monitoring"],
      color: "emerald"
    },
    {
      name: "Edu_Architect_01",
      role: "Educational Body",
      icon: <Users className="w-6 h-6" />,
      status: "Active",
      uptime: "99.95%",
      tasks: ["Generating Neural Architectures v2", "Class Scheduling", "Event Planning"],
      color: "blue"
    },
    {
      name: "Prof_Neuron_Cluster",
      role: "Professor",
      icon: <GraduationCap className="w-6 h-6" />,
      status: "High Load",
      uptime: "98.80%",
      tasks: ["Teaching 4,200 Students", "Answering 124 Qs", "Whiteboard Rendering"],
      color: "purple"
    },
    {
      name: "Exam_Validator_Alpha",
      role: "Examination",
      icon: <ShieldCheck className="w-6 h-6" />,
      status: "Active",
      uptime: "99.99%",
      tasks: ["Grading Module 4", "Plagiarism Detection", "Certification Issuance"],
      color: "amber"
    },
    {
      name: "Treasury_Optimizer",
      role: "Treasurer",
      icon: <Coins className="w-6 h-6" />,
      status: "Idle",
      uptime: "100%",
      tasks: ["Budget Forecasting", "Grant Management", "Tokenomics Stability"],
      color: "zinc"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">Agent Management</div>
          <h1 className="font-serif text-5xl font-light italic">The Faculty of Intelligence.</h1>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5">
            <Cpu className="w-4 h-4 text-[#1a1a1a]/40" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/60">Compute: 84%</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5">
            <Database className="w-4 h-4 text-[#1a1a1a]/40" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/60">Storage: 1.2 PB</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {agents.map((agent, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group grid lg:grid-cols-4 gap-12 items-start p-12 rounded-[3rem] border border-[#1a1a1a]/5 hover:border-[#1a1a1a]/10 transition-all"
          >
            <div className="lg:col-span-1">
              <div className="text-[#1a1a1a]/20 mb-8 group-hover:text-[#1a1a1a] transition-colors">{agent.icon}</div>
              <h3 className="font-serif text-3xl font-normal mb-2 group-hover:italic transition-all">{agent.name}</h3>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 italic">{agent.role}</div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/30">Current Orchestrations</div>
              <div className="space-y-4">
                {agent.tasks.map((task, j) => (
                  <div key={j} className="flex items-center gap-4 text-lg font-serif italic text-[#1a1a1a]/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/10" />
                    {task}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col items-end justify-between h-full py-2">
              <div className="text-right">
                <div className={cn(
                  "inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3",
                  agent.status === 'Optimal' || agent.status === 'Active' ? "bg-emerald-500/5 text-emerald-600 border border-emerald-500/10" : 
                  agent.status === 'High Load' ? "bg-amber-500/5 text-amber-600 border border-amber-500/10" : "bg-zinc-500/5 text-zinc-500 border border-zinc-500/10"
                )}>
                  {agent.status}
                </div>
                <div className="text-[10px] text-[#1a1a1a]/30 font-bold uppercase tracking-widest">Uptime: {agent.uptime}</div>
              </div>
              
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                  View Logs
                </button>
                <button className="p-3 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 rounded-full transition-all">
                  <Settings className="w-4 h-4 text-[#1a1a1a]/40" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';

export default AgentsPage;
