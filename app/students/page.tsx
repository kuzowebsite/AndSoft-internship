'use client';
import React, { useState } from 'react';
import { 
  Search, Github, Linkedin, 
  Code2, Smartphone, Sparkles, X,
  Briefcase, GraduationCap, Database, BarChart3
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

// --- DATA: STUDENTS ---
const studentsData = [
  { 
    id: 1, 
    name: "Т.Түвшинзаяа", 
    role: "Mobile Developer", 
    project: "Transportation services",
    school: "ИИС", 
    // Эмэгтэй дүр төрх
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuvshinzaya&top[]=longHair&accessoriesProb=0&clothing=collarAndSweater",
    bio: "",
    skills: ["Flutter", "Dart", "Bloc", "Firebase"],
    socials: { github: "#", linkedin: "#" }
  },
  { 
    id: 2, 
    name: "Х.Дөлгөөн", 
    role: "Mobile Developer", 
    project: "",
    school: "ИИС", 
    image: "https://api.dicebear.com/7.x/avataaars/",
    bio: "",
    skills: ["Flutter", "Node.js", "PostgreSQL", "Google Maps API"],
    socials: { github: "#", linkedin: "#" }
  },
  { 
    id: 3, 
    name: "Н.Лувсандорж", 
    role: "Mobile Developer", 
    project: "",
    school: "ИИС", 
    image: "https://api.dicebear.com/7.x/avataaars/",
    bio: "",
    skills: ["Flutter", "Rest API", "Provider", "Figma"],
    socials: { github: "#", linkedin: "#" }
  },
  { 
    id: 4, 
    name: "Б.Эрхэмжаргал", 
    role: "Mobile Developer", 
    project: "Crypto data analys",
    school: "ИИС", 
    image: "https://api.dicebear.com/7.x/avataaars/",
    bio: "Бүх аппликейшний дизайны систем болон UI компонент сан (Widget Library) хөгжүүлж байна.",
    skills: ["Flutter", "Figma", "Adobe XD", "Animation"],
    socials: { github: "#", linkedin: "#" }
  },
  { 
    id: 5, 
    name: "Б.Отгонзаяа", 
    role: "Website Developer", 
    project: "Restaurant Menu",
    school: "ШУТИС", 
    image: "https://api.dicebear.com/7.x/avataaars/",
    bio: "Ухаалга рестораны захиалга хүлээн авах, цэс удирдах аппликейшн хөгжүүлж байна.",
    skills: ["Flutter", "Clean Arch", "Supabase", "Git"],
    socials: { github: "#", linkedin: "#" }
  },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState<typeof studentsData[0] | null>(null);

  // Filter Logic
  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.project.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'App') return matchesSearch && (student.role.includes('Mobile') || student.role.includes('Flutter') || student.role.includes('UI/UX'));
    if (activeFilter === 'Data') return matchesSearch && (student.role.includes('Data') || student.role.includes('Backend'));
    
    return matchesSearch;
  });

  const filters = [
    { id: 'All', label: 'Бүгд' },
    { id: 'App', label: 'App Team' },
    { id: 'Data', label: 'Data & Web' }
  ];

  return (
    <div className="animate-fadeIn space-y-8 pb-24">
      
      {/* --- HEADER SECTION --- */}
      <div className="text-center space-y-4 mb-8 pt-6">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/50 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Internship Team 2026</span>
         </div>
         <h1 className="text-3xl md:text-5xl font-black text-[#161e2e] drop-shadow-sm">
            AndSoft Interns
         </h1>
         <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4">
            Технологийн шийдлээр маргаашийг бүтээж буй инженерүүд.
         </p>
      </div>

      {/* --- SEARCH & FILTER BAR --- */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between mb-8 px-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Оюутан эсвэл төсөл хайх..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 placeholder:text-slate-400 font-medium shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-white/30 p-1 rounded-xl border border-white/40 overflow-x-auto w-full md:w-auto shadow-sm no-scrollbar">
              {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                        activeFilter === filter.id 
                        ? 'bg-[#161e2e] text-white shadow-md' 
                        : 'text-slate-600 hover:bg-white/50'
                    }`}
                  >
                      {filter.label}
                  </button>
              ))}
          </div>
      </div>

      {/* --- STUDENTS GRID (MOBILE OPTIMIZED: grid-cols-1) --- */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {filteredStudents.map((student) => (
            <GlassCard key={student.id} className="!p-0 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border-white/70 flex flex-col h-full">
                
                {/* Top Banner - Subtle Gradient like Image */}
                <div className="h-24 relative bg-gradient-to-r from-blue-50 to-slate-100 border-b border-white/50">
                    <div className="absolute top-3 right-3 text-slate-300">
                        {student.role.includes('Data') ? <BarChart3 size={40} /> : <Code2 size={40} />}
                    </div>
                </div>

                <div className="px-6 pb-6 relative flex flex-col flex-grow bg-white/40">
                    {/* Avatar Image */}
                    <div className="w-20 h-20 -mt-10 mb-3 rounded-2xl bg-white p-1 shadow-md inline-block relative z-10 group-hover:rotate-3 transition-transform">
                        <img src={student.image} alt={student.name} className="w-full h-full rounded-xl bg-slate-50 object-cover" />
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] shadow-sm ${
                            student.role.includes('Data') ? 'bg-emerald-500' : 'bg-blue-600'
                        }`}>
                            {student.role.includes('Data') ? <Database size={12} /> : <Smartphone size={12} />}
                        </div>
                    </div>

                    {/* Name & Role */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">{student.name}</h3>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mt-0.5 flex items-center gap-1">
                            <GraduationCap size={12} /> {student.school}
                        </p>
                    </div>

                    {/* Project Badge */}
                    <div className="mt-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                            <Briefcase size={12} className="text-slate-500" />
                            <span className="text-xs font-bold text-slate-700">{student.project}</span>
                        </div>
                    </div>

                    {/* Short Bio */}
                    <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-2 mb-4">
                        {student.bio}
                    </p>

                    {/* Footer / Socials */}
                    <div className="mt-auto pt-4 border-t border-slate-200/60 flex items-center justify-between">
                        <div className="flex gap-2">
                            <a href={student.socials.github} className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-[#161e2e] hover:text-white transition-colors">
                                <Github size={14} />
                            </a>
                            <a href={student.socials.linkedin} className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-[#0077b5] hover:text-white transition-colors">
                                <Linkedin size={14} />
                            </a>
                        </div>
                        
                        <button 
                            onClick={() => setSelectedStudent(student)}
                            className="text-xs font-bold text-slate-600 hover:text-[#161e2e] transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white"
                        >
                            Дэлгэрэнгүй <Sparkles size={12} />
                        </button>
                    </div>
                </div>
            </GlassCard>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 opacity-60">
            <Search size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-slate-500 font-medium">Хайлт илэрцгүй байна.</p>
        </div>
      )}

      {/* --- DETAILS MODAL (UPDATED COLOR DESIGN) --- */}
      {selectedStudent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
            {/* Modal Container: Matches the 'Grey/White' look from image */}
            <div className="bg-slate-100 border border-white/50 shadow-2xl rounded-[2rem] w-full max-w-sm md:max-w-md overflow-hidden relative animate-scaleIn">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedStudent(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors text-slate-600"
                >
                    <X size={20} />
                </button>

                {/* Header Image: SOFT BLUE/WHITE GRADIENT (Matches screenshot) */}
                <div className="h-32 bg-gradient-to-b from-blue-50 to-slate-100 relative">
                     {/* Top Right Decoration Icon */}
                     <div className="absolute top-4 right-14 opacity-10">
                        <Code2 size={60} />
                     </div>
                </div>

                <div className="px-6 pb-8 -mt-16 relative z-10">
                    {/* Avatar */}
                    <div className="w-28 h-28 rounded-3xl bg-white p-1.5 shadow-lg mb-4 border border-white">
                        <img src={selectedStudent.image} alt={selectedStudent.name} className="w-full h-full rounded-2xl bg-slate-50 object-cover" />
                        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
                             {/* Small Badge on Avatar if needed */}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-black text-slate-800">{selectedStudent.name}</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <GraduationCap size={14} className="text-slate-500" />
                            <span className="text-sm font-bold text-slate-500 uppercase">{selectedStudent.school}</span>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {/* Project Info - Clean White Box */}
                        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <Briefcase size={16} className="text-slate-400" />
                                <span className="font-bold text-slate-700 text-sm bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                                    {selectedStudent.project}
                                </span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {selectedStudent.bio}
                            </p>
                        </div>

                        {/* Social Buttons (Similar to image bottom) */}
                        <div className="flex items-center justify-between pt-2">
                             <div className="flex gap-3">
                                <a href={selectedStudent.socials.github} className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:scale-110 transition-transform shadow-sm">
                                    <Github size={20} />
                                </a>
                                <a href={selectedStudent.socials.linkedin} className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:scale-110 transition-transform shadow-sm">
                                    <Linkedin size={20} />
                                </a>
                             </div>
                             
                             <div className="flex items-center gap-1 text-slate-400 text-xs font-bold uppercase tracking-wide">
                                 AndSoft Team <Sparkles size={12} />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

