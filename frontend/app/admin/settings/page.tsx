'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Shield, 
  Cpu, 
  Database, 
  Save,
  RefreshCw
} from 'lucide-react';

const AdminSettingsPage = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between border-b border-[#1a1a1a]/5 pb-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-6">System Configuration</div>
          <h1 className="font-serif text-5xl font-light italic">The Architecture of Intelligence.</h1>
        </div>
        <button className="px-10 py-5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#1a1a1a]/90 transition-all">
          <Save className="w-4 h-4" /> Deploy Configuration
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          {/* Orchestration Config */}
          <section className="space-y-12">
            <h3 className="font-serif text-3xl font-light italic flex items-center gap-4">
              <Cpu className="w-6 h-6 text-[#1a1a1a]/20" />
              Agent Orchestration
            </h3>
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest">
                  <span>Global Compute Limit</span>
                  <span>85%</span>
                </div>
                <div className="h-px w-full bg-[#1a1a1a]/10 overflow-hidden">
                  <div className="h-full bg-[#1a1a1a] w-[85%]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest">Season Duration (Weeks)</label>
                  <input type="number" defaultValue="12" className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full py-4 px-8 text-sm focus:border-[#1a1a1a]/20 outline-none transition-all font-serif italic" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest">Max Students per Agent</label>
                  <input type="number" defaultValue="5000" className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-full py-4 px-8 text-sm focus:border-[#1a1a1a]/20 outline-none transition-all font-serif italic" />
                </div>
              </div>
            </div>
          </section>

          {/* Infrastructure */}
          <section className="space-y-12">
            <h3 className="font-serif text-3xl font-light italic flex items-center gap-4">
              <Database className="w-6 h-6 text-[#1a1a1a]/20" />
              Infrastructure
            </h3>
            <div className="space-y-8">
              {[
                { label: "Knowledge Base Sync", desc: "Frequency of global knowledge base updates.", value: "Real-time" },
                { label: "Model Version", desc: "The underlying LLM powering the Professor Agents.", value: "Gemini 2.0 Pro" },
                { label: "Storage Redundancy", desc: "Multi-region backup for student data.", value: "Enabled" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] border border-[#1a1a1a]/5 bg-[#1a1a1a]/5 group hover:bg-[#1a1a1a]/10 transition-all">
                  <div>
                    <div className="font-serif text-xl italic mb-1">{item.label}</div>
                    <p className="text-xs text-[#1a1a1a]/40">{item.desc}</p>
                  </div>
                  <button className="px-6 py-2.5 bg-[#1a1a1a] text-[#fdfcf8] rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                    {item.value}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <div className="p-12 rounded-[3rem] border border-[#1a1a1a]/5 bg-[#1a1a1a]/5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a1a1a]/40 mb-12 flex items-center gap-3">
              <Shield className="w-4 h-4" />
              System Security
            </h3>
            <div className="space-y-6">
              <button className="w-full py-5 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 border border-[#1a1a1a]/5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                <RefreshCw className="w-3 h-3" /> Rotate API Keys
              </button>
              <button className="w-full py-5 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 border border-[#1a1a1a]/5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                Access Audit Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
