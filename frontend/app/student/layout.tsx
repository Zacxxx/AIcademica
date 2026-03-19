'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  Trophy, 
  Settings, 
  LogOut, 
  Brain,
  GraduationCap,
  Library,
  Search,
  Bell,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => (
  <Link 
    href={href}
    className={cn(
      "flex items-center gap-4 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all group",
      active 
        ? "bg-[#1a1a1a] text-[#fdfcf8] shadow-xl shadow-[#1a1a1a]/10" 
        : "text-[#1a1a1a]/40 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5"
    )}
  >
    <span className={cn("transition-transform group-hover:scale-110", active && "scale-110")}>
      {icon}
    </span>
    {label}
  </Link>
);

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: "Dashboard", href: "/student" },
    { icon: <BookOpen className="w-4 h-4" />, label: "My Classes", href: "/student/classes" },
    { icon: <Library className="w-4 h-4" />, label: "The Archives", href: "/student/library" },
    { icon: <GraduationCap className="w-4 h-4" />, label: "Faculty", href: "/student/faculty" },
    { icon: <Trophy className="w-4 h-4" />, label: "Diplomas", href: "/student/diplomas" },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfcf8] text-[#1a1a1a]">
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-72 border-r border-[#1a1a1a]/5 flex flex-col p-8 fixed h-full bg-[#fdfcf8] z-50 transition-transform duration-300 lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between mb-16 px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#1a1a1a] rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-[#1a1a1a]" />
            </div>
            <span className="font-serif font-semibold text-xl italic tracking-tight">Agent University</span>
          </div>
          <button 
            className="lg:hidden p-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-3 flex-1">
          <div className="text-[10px] font-bold text-[#1a1a1a]/30 uppercase tracking-[0.3em] mb-6 px-6">The Academy</div>
          {menuItems.map((item) => (
            <div key={item.href} onClick={() => setIsSidebarOpen(false)}>
              <SidebarItem 
                {...item}
                active={pathname === item.href || (item.href !== '/student' && pathname.startsWith(item.href))}
              />
            </div>
          ))}
        </nav>

        <div className="pt-8 border-t border-[#1a1a1a]/5 space-y-3">
          <div onClick={() => setIsSidebarOpen(false)}>
            <SidebarItem icon={<Settings className="w-4 h-4" />} label="Settings" href="/student/settings" active={pathname === '/student/settings'} />
          </div>
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 hover:text-red-600 hover:bg-red-50 transition-all group">
            <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 min-h-screen flex flex-col">
        {/* Header */}
        <header className="h-24 border-b border-[#1a1a1a]/5 flex items-center justify-between px-6 md:px-12 sticky top-0 bg-[#fdfcf8]/80 backdrop-blur-md z-40">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a] mr-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-4 bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 px-6 py-3 rounded-full lg:w-[28rem]">
              <Search className="w-4 h-4 text-[#1a1a1a]/40" />
              <input 
                type="text" 
                placeholder="Search the archives..." 
                className="bg-transparent border-none outline-none text-xs font-medium w-full text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 uppercase tracking-widest"
              />
            </div>
            <button className="md:hidden p-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a]">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button className="relative p-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#1a1a1a] rounded-full border-2 border-[#fdfcf8]" />
            </button>
            <div className="flex items-center gap-4 md:pl-8 md:border-l border-[#1a1a1a]/5">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-serif italic font-semibold">Alex Johnson</div>
                <div className="text-[10px] text-[#1a1a1a]/40 uppercase tracking-[0.2em] font-bold">Lvl 12 Scholar</div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1a1a1a]/10 p-1">
                <div className="w-full h-full rounded-full bg-[#1a1a1a]/5 flex items-center justify-center font-serif italic font-bold text-xs md:text-sm">
                  AJ
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-12 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
