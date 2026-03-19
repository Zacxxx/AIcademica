'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Coins, 
  TrendingUp, 
  Download,
  PieChart,
  Wallet,
  ArrowRight
} from 'lucide-react';

const TreasuryPage = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">University Treasury</div>
          <h1 className="font-serif text-5xl font-light italic">The Stewardship of Resources.</h1>
        </div>
        <button className="px-10 py-5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#1a1a1a]/90 transition-all">
          <Download className="w-4 h-4" /> Export Financial Report
        </button>
      </div>

      {/* Main Balance Card - Noble Style */}
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 p-16 rounded-[4rem] bg-[#1a1a1a] text-[#fdfcf8] relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full border border-[#fdfcf8]/20 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#fdfcf8]/60" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fdfcf8]/40">Total Endowment Balance</span>
            </div>
            <div className="flex items-baseline gap-6 mb-4">
              <h2 className="font-serif text-8xl font-light italic tracking-tighter">Ξ 1,240.42</h2>
              <span className="text-emerald-400 font-serif text-2xl italic flex items-center gap-2">
                <TrendingUp className="w-6 h-6" /> +12.5%
              </span>
            </div>
            <p className="font-mono text-sm text-[#fdfcf8]/30 mb-16 uppercase tracking-widest">≈ $3,452,120.00 USD</p>
            
            <div className="flex gap-6">
              <button className="px-10 py-5 bg-[#fdfcf8] text-[#1a1a1a] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#fdfcf8]/90 transition-all">
                Allocate Endowment
              </button>
              <button className="px-10 py-5 border border-[#fdfcf8]/20 text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#fdfcf8]/5 transition-all">
                View Ledger
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <Coins className="w-96 h-96" />
          </div>
        </div>

        <div className="space-y-12">
          <div className="p-12 rounded-[3rem] border border-[#1a1a1a]/5 bg-[#1a1a1a]/5">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-serif text-2xl font-light italic">Allocation</h3>
              <PieChart className="w-5 h-5 text-[#1a1a1a]/20" />
            </div>
            <div className="space-y-8">
              {[
                { label: "Agent Compute", value: 45 },
                { label: "Program R&D", value: 25 },
                { label: "Student Grants", value: 20 },
                { label: "Operations", value: 10 },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-px w-full bg-[#1a1a1a]/10 overflow-hidden">
                    <div className="h-full bg-[#1a1a1a]" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions - Minimalist Table */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-[#1a1a1a]/5 pb-6">
          <h2 className="font-serif text-3xl font-light italic">The Ledger</h2>
          <button className="text-[10px] font-bold text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors uppercase tracking-[0.2em] flex items-center gap-2">
            View Full Archives <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-[3rem] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1a1a1a]/5">
                <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Transaction ID</th>
                <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Entity</th>
                <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Amount</th>
                <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Status</th>
                <th className="px-12 py-6 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "TX-9421", entity: "Prof_Neuron_Cluster", amount: "-Ξ 4.20", status: "Completed", date: "Mar 18, 2026", type: "out" },
                { id: "TX-9420", entity: "Student_Grant_AlexJ", amount: "-Ξ 0.50", status: "Completed", date: "Mar 17, 2026", type: "out" },
                { id: "TX-9419", entity: "External_Funding_V4", amount: "+Ξ 120.00", status: "Completed", date: "Mar 15, 2026", type: "in" },
                { id: "TX-9418", entity: "Edu_Architect_01", amount: "-Ξ 2.15", status: "Completed", date: "Mar 14, 2026", type: "out" },
              ].map((tx, i) => (
                <tr key={i} className="border-b border-[#1a1a1a]/5 hover:bg-[#1a1a1a]/5 transition-colors group">
                  <td className="px-12 py-8 font-mono text-xs text-[#1a1a1a]/40">{tx.id}</td>
                  <td className="px-12 py-8 font-serif text-xl italic">{tx.entity}</td>
                  <td className={cn(
                    "px-12 py-8 font-serif text-2xl italic",
                    tx.type === 'in' ? "text-emerald-600" : "text-[#1a1a1a]"
                  )}>
                    {tx.amount}
                  </td>
                  <td className="px-12 py-8">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 text-[10px] font-bold uppercase tracking-widest">
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-12 py-8 text-xs text-[#1a1a1a]/40 font-mono">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';

export default TreasuryPage;
