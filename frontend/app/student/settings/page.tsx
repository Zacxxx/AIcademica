'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Globe, 
  Zap,
  Save,
  Camera,
  Mail,
  Fingerprint
} from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-20">
      {/* Header */}
      <section className="pt-12 border-b border-black/5 pb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-zinc-400">
            <Fingerprint className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">Identity & Preferences</span>
          </div>
          <h1 className="text-6xl font-serif text-zinc-900">
            Academy <span className="italic serif text-zinc-500">Settings</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-500 font-serif italic leading-relaxed">
            Manage your academic identity, notification protocols, and the behavioral 
            parameters of your Professor Agents.
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Profile Section */}
          <section className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="p-10 md:p-12 space-y-10">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center text-3xl font-serif text-zinc-400 overflow-hidden group-hover:border-emerald-200 transition-colors">
                    AJ
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-serif text-zinc-900">Alex Johnson</h2>
                  <p className="text-sm text-zinc-400 font-sans tracking-tight">alex.johnson@agentuniversity.edu</p>
                  <div className="pt-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                      Active Scholar
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">Legal Name</label>
                  <input 
                    type="text" 
                    defaultValue="Alex Johnson" 
                    className="w-full bg-zinc-50 border border-black/5 rounded-2xl py-4 px-6 text-sm font-sans focus:bg-white focus:border-emerald-500/30 outline-none transition-all placeholder:text-zinc-300" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="alex.johnson@example.com" 
                    className="w-full bg-zinc-50 border border-black/5 rounded-2xl py-4 px-6 text-sm font-sans focus:bg-white focus:border-emerald-500/30 outline-none transition-all placeholder:text-zinc-300" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="p-10 md:p-12">
              <div className="mb-10">
                <h3 className="text-2xl font-serif text-zinc-900 mb-2">Pedagogical Preferences</h3>
                <p className="text-sm text-zinc-500 font-serif italic">Fine-tune the interaction dynamics with the Faculty Agents.</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Async Response Speed", desc: "Prioritization of your inquiries by Professor Agents.", icon: <Zap className="w-5 h-5 text-emerald-600" />, value: "High Priority" },
                  { label: "Whiteboard Complexity", desc: "Level of technical detail in visual tool renderings.", icon: <Eye className="w-5 h-5 text-blue-600" />, value: "Scholarly" },
                  { label: "Faculty Updates", desc: "Frequency of orchestrations from the Educational Body.", icon: <Bell className="w-5 h-5 text-amber-600" />, value: "Daily Digest" },
                ].map((pref, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-zinc-50/50 border border-black/[0.03] hover:bg-white hover:border-black/5 transition-all group">
                    <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        {pref.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-800">{pref.label}</div>
                        <p className="text-xs text-zinc-500 font-serif italic mt-0.5">{pref.desc}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all">
                      {pref.value}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm p-10">
            <h3 className="text-lg font-serif text-zinc-900 mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-700" />
              Security Protocols
            </h3>
            <div className="space-y-4">
              <button className="w-full py-4 bg-zinc-50 hover:bg-zinc-100 border border-black/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-zinc-600 transition-all">
                Update Password
              </button>
              <button className="w-full py-4 bg-zinc-50 hover:bg-zinc-100 border border-black/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-zinc-600 transition-all">
                Multi-Factor Auth
              </button>
            </div>
          </section>

          <section className="bg-zinc-900 rounded-[2.5rem] p-10 text-center space-y-6 shadow-2xl shadow-zinc-900/20">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
              <Save className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-serif text-xl">Commit Changes</h4>
              <p className="text-zinc-500 text-xs font-serif italic">Synchronize your preferences across the Academy network.</p>
            </div>
            <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
              Save All Changes
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
