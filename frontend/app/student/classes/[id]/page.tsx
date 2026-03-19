'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  MessageSquare, 
  FileText, 
  Users, 
  Brain, 
  ChevronRight,
  Send,
  Maximize2,
  PenTool,
  Layers,
  Zap,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const ClassView = () => {
  return (
    <div className="h-[calc(100vh-12rem)] flex gap-12">
      {/* Main Learning Area */}
      <div className="flex-1 flex flex-col gap-12">
        {/* Virtual Whiteboard - Noble Style */}
        <div className="flex-1 bg-[#1a1a1a] rounded-[3rem] relative overflow-hidden flex flex-col border border-[#fdfcf8]/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fdfcf8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="p-8 border-b border-[#fdfcf8]/5 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full border border-[#fdfcf8]/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#fdfcf8]/60" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fdfcf8]/40">Virtual Whiteboard</div>
                <div className="font-serif text-xl text-[#fdfcf8] italic">Neural Architectures 101</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 bg-[#fdfcf8]/5 hover:bg-[#fdfcf8]/10 rounded-full text-[#fdfcf8]/40 transition-all">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl w-full text-center"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-8 italic">Module 4: Attention Mechanisms</div>
              <h2 className="font-serif text-5xl text-[#fdfcf8] font-light mb-8 italic leading-tight">Understanding Self-Attention.</h2>
              <p className="font-serif text-xl text-[#fdfcf8]/60 italic mb-12 leading-relaxed">
                &quot;Think of attention as a weighted average of values, where weights are determined by the compatibility of a query with its corresponding key.&quot;
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                {['Query (Q)', 'Key (K)', 'Value (V)'].map((matrix, i) => (
                  <div key={i} className="p-8 rounded-[2rem] border border-[#fdfcf8]/10 bg-[#fdfcf8]/5">
                    <div className="font-mono text-xs text-[#fdfcf8]/40 mb-4 uppercase tracking-widest">Matrix</div>
                    <div className="font-serif text-2xl text-[#fdfcf8] italic">{matrix}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="p-8 bg-[#fdfcf8]/5 border-t border-[#fdfcf8]/5 flex items-center justify-between relative z-10">
            <div className="flex gap-6">
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#fdfcf8]/40 hover:text-[#fdfcf8] transition-colors">
                <PenTool className="w-4 h-4" /> Annotate
              </button>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#fdfcf8]/40 hover:text-[#fdfcf8] transition-colors">
                <Layers className="w-4 h-4" /> Layers
              </button>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdfcf8]/20 italic">Orchestrated by Tool_Smith_Prime</div>
          </div>
        </div>
      </div>

      {/* Professor Chat - Academic Sidebar */}
      <div className="w-96 flex flex-col gap-12">
        <div className="flex-1 flex flex-col bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-[3rem] overflow-hidden">
          <div className="p-8 border-b border-[#1a1a1a]/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#1a1a1a]/40" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40">Professor Agent</div>
              <div className="font-serif text-lg italic">Prof. Neuron</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            <div className="flex flex-col gap-2">
              <div className="text-[8px] font-bold uppercase tracking-widest text-[#1a1a1a]/30 ml-4">Professor</div>
              <div className="p-6 rounded-[2rem] rounded-tl-none bg-[#1a1a1a] text-[#fdfcf8] text-sm font-serif italic leading-relaxed">
                Hello Alex! I&apos;m here to help you understand the Self-Attention mechanism. Any questions about the Q, K, V matrices?
              </div>
            </div>
            
            <div className="flex flex-col gap-2 items-end">
              <div className="text-[8px] font-bold uppercase tracking-widest text-[#1a1a1a]/30 mr-4">Scholar</div>
              <div className="p-6 rounded-[2rem] rounded-tr-none bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 text-sm font-serif italic leading-relaxed text-[#1a1a1a]/70">
                Can you explain why we divide by the square root of the dimension?
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-[#1a1a1a]/5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Inquire..." 
                className="w-full bg-[#1a1a1a] text-[#fdfcf8] border-none rounded-full py-4 pl-6 pr-14 text-sm font-serif italic placeholder:text-[#fdfcf8]/20 outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[#fdfcf8] text-[#1a1a1a] rounded-full hover:bg-[#fdfcf8]/90 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/40 px-4">Scholarly Resources</h3>
          <div className="space-y-3">
            {[
              { title: "The Attention Paper", type: "PDF", icon: <FileText className="w-4 h-4" /> },
              { title: "Matrix Visualizer", type: "Tool", icon: <Zap className="w-4 h-4" /> },
              { title: "Scholar Discussion", type: "Forum", icon: <Users className="w-4 h-4" /> },
            ].map((res, i) => (
              <button key={i} className="w-full flex items-center justify-between p-6 rounded-[2rem] border border-[#1a1a1a]/5 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] transition-colors">{res.icon}</div>
                  <div className="font-serif text-lg italic">{res.title}</div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/20">{res.type}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassView;
