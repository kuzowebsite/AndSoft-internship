'use client';
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Github, ExternalLink, Code2, Layers, Smartphone, Globe, Database } from 'lucide-react';

const projects = [
  {
    title: "Delivery App (Customer)",
    category: "Mobile App",
    status: "Beta Testing",
    tech: ["Flutter", "Bloc", "Firebase"],
    desc: "Хэрэглэгч хоол захиалах, хүргэлтийн явцыг хянах үндсэн аппликейшн. Dark/Light mode дэмждэг.",
    color: "from-orange-400 to-red-500",
    icon: Smartphone
  },
  {
    title: "Delivery Driver",
    category: "Mobile App",
    status: "Development",
    tech: ["Flutter", "Google Maps", "Websocket"],
    desc: "Жолооч захиалга хүлээн авах, байршил илгээх, орлогоо хянах зориулалттай апп.",
    color: "from-blue-400 to-indigo-500",
    icon: Smartphone
  },
  {
    title: "Merchant Dashboard",
    category: "Web Admin",
    status: "Live",
    tech: ["React", "Tailwind", "Supabase"],
    desc: "Ресторанууд цэсээ удирдах, захиалга батлах, тайлан харах админ веб систем.",
    color: "from-emerald-400 to-teal-500",
    icon: Globe
  },
  {
    title: "Backend Core API",
    category: "System",
    status: "Stable",
    tech: ["Node.js", "PostgreSQL", "Redis"],
    desc: "Бүх системийн мэдээллийн урсгалыг зохицуулах төв API сервис.",
    color: "from-slate-600 to-slate-800",
    icon: Database
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-4 animate-fadeIn">
       <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
             <div>
                <h1 className="text-4xl font-black text-slate-800 mb-2">Projects Showcase</h1>
                <p className="text-slate-600">Бидний хөгжүүлж буй бодит системүүд.</p>
             </div>
             <div className="flex gap-2 text-xs font-bold bg-white/50 p-1 rounded-lg">
                <span className="px-3 py-1 bg-white rounded shadow-sm text-slate-800">All</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-white/50 rounded cursor-pointer">Mobile</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-white/50 rounded cursor-pointer">Web</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {projects.map((project, idx) => (
                <GlassCard key={idx} className="!p-0 overflow-hidden group hover:shadow-2xl transition-all duration-500 border-white/60">
                   
                   {/* Mockup Area */}
                   <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                       <div className="absolute inset-0 bg-black/10"></div>
                       {/* Abstract Phone/Screen Shape */}
                       <div className="w-32 h-48 bg-white/20 backdrop-blur-md border border-white/30 rounded-t-2xl transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-2xl flex flex-col p-2">
                          <div className="w-8 h-1 bg-white/40 rounded-full mx-auto mb-2"></div>
                          <div className="flex-1 bg-white/80 rounded-lg opacity-80"></div>
                       </div>
                       
                       <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                          {project.status}
                       </div>
                   </div>

                   <div className="p-6 bg-white/60 backdrop-blur-xl">
                      <div className="flex items-center gap-3 mb-3">
                         <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} text-white shadow-sm`}>
                            <project.icon size={18} />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-slate-800 leading-none">{project.title}</h3>
                            <span className="text-xs text-slate-500 font-semibold">{project.category}</span>
                         </div>
                      </div>

                      <p className="text-sm text-slate-600 mb-6 line-clamp-2">
                         {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                         {project.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold text-slate-600 flex items-center gap-1">
                               <Code2 size={10} className="text-blue-500" /> {t}
                            </span>
                         ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50">
                         <button className="flex-1 bg-slate-800 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                            <Github size={14} /> Repository
                         </button>
                         <button className="flex-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                            <ExternalLink size={14} /> Preview
                         </button>
                      </div>
                   </div>
                </GlassCard>
             ))}
          </div>
       </div>
    </div>
  );
}