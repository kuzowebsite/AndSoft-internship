'use client';
import React from 'react';
import { 
  Terminal, Smartphone, Database, Rocket, 
  PlayCircle, FileText, ArrowRight 
} from 'lucide-react';
import { GlassCard } from '@/app/components/GlassCard';
import Link from 'next/link';

// --- DATA: CURRICULUM (Matches the Detailed Page) ---
const curriculumData = [
  {
    id: 'module-1',
    days: 'Өдөр 1-3',
    title: 'Суурь & Бэлтгэл',
    description: 'Flutter хөгжүүлэлтийн орчин бэлдэх, Dart хэлний гүнзгийрүүлсэн ойлголт.',
    iconName: 'terminal',
    lessons: [
      { id: 'l1', title: 'VS Code, SDK & Environment Setup', type: 'video', duration: '45 мин' },
      { id: 'l2', title: 'Dart хэлний суурь', type: 'video', duration: '1 цаг' },
      { id: 'l3', title: 'Анхны "Hello World" төсөл', type: 'doc', duration: '30 мин' }
    ]
  },
  {
    id: 'module-2',
    days: 'Өдөр 4-7',
    title: 'Frontend Sprint (UI)',
    description: 'Хэрэглэгчийн интерфейс (UI) загварчлал. Pixel-perfect дизайн гаргах.',
    iconName: 'smartphone',
    lessons: [
      { id: 'ui-1', title: 'Layout Logic: Row & Column', type: 'video', duration: '50 мин' },
      { id: 'ui-2', title: 'Images & Assets Management', type: 'doc', duration: '40 мин' },
      { id: 'ui-3', title: 'Scrollable Lists', type: 'video', duration: '1 цаг' }
    ]
  },
  {
    id: 'module-3',
    days: 'Өдөр 8-11',
    title: 'Backend (Node.js & SQL)', // Updated Title
    description: 'Node.js, Express фреймворк ашиглан REST API сервер хөгжүүлж, PostgreSQL баазтай холбох.', // Updated Desc
    iconName: 'database',
    lessons: [
      { id: 'be-1', title: 'Node.js & Express Setup', type: 'video', duration: '55 мин' }, // Updated Lesson
      { id: 'be-2', title: 'PostgreSQL Connection', type: 'doc', duration: '45 мин' }, // Updated Lesson
      { id: 'be-3', title: 'REST API & Flutter Integration', type: 'video', duration: '1 цаг 10 мин' } // Updated Lesson
    ]
  },
  {
    id: 'module-4',
    days: 'Өдөр 12-14',
    title: 'Final Polish & AI',
    description: 'Аппыг зах зээлд гаргахад бэлтгэх. AI integration ба Release build.',
    iconName: 'rocket',
    lessons: [
      { id: 'ai-1', title: 'Gemini AI Integration', type: 'video', duration: '1 цаг' },
      { id: 'fp-1', title: 'App Icon & Splash Screen', type: 'doc', duration: '30 мин' },
      { id: 'fp-2', title: 'Build & Release (PlayStore)', type: 'video', duration: '40 мин' }
    ]
  }
];

export default function RoadmapPage() {
  const getIcon = (name: string) => {
    switch(name) {
      case 'terminal': return <Terminal strokeWidth={1.5} size={28} />;
      case 'smartphone': return <Smartphone strokeWidth={1.5} size={28} />;
      case 'database': return <Database strokeWidth={1.5} size={28} />;
      case 'rocket': return <Rocket strokeWidth={1.5} size={28} />;
      default: return <Terminal size={28} />;
    }
  };

  const themeColorClass = "text-[#161e2e]"; 
  const btnBgClass = "bg-[#161e2e]";       
  const btnBorderClass = "border-[#161e2e]";

  return (
    <div className="animate-fadeIn pb-12">
      {/* --- Page Header --- */}
      <div className="text-center mb-10 md:mb-16 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/50 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Internship Program 2026</span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-black mb-4 relative z-10 ${themeColorClass} drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]`}>
            14 Хоногийн Төлөвлөгөө
          </h1>
          
          <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed mt-4">
            Энгийнээс эхлээд мэргэжлийн түвшин хүртэл. Flutter болон AI хосолсон бодит төсөл дээр ажиллах эрчимжүүлсэн хөтөлбөр.
          </p>
      </div>

      {/* --- GRID LAYOUT --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {curriculumData.map((module, index) => (
            <GlassCard 
                key={module.id} 
                className={`!p-0 overflow-hidden group transition-transform duration-500 ease-out hover:scale-[1.02] border-white/60 hover:border-white/80 relative
                    ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''} 
                `}
            >
               <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-white text-slate-700`}>
                          {getIcon(module.iconName)}
                      </div>
                      <span className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-slate-600 border border-white/40 shadow-sm">
                        {module.days}
                      </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6 flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                        {module.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {module.description}
                      </p>
                  </div>

                  {/* Lessons Preview */}
                  <div className="space-y-2 mb-8 bg-white/30 rounded-xl p-3 border border-white/20">
                      {module.lessons.map((lesson, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                              {lesson.type === 'video' 
                                ? <PlayCircle size={14} className="text-blue-600 opacity-80" /> 
                                : <FileText size={14} className="text-emerald-600 opacity-80" />
                              }
                              <span className="truncate opacity-80">{lesson.title}</span>
                          </div>
                      ))}
                  </div>

                  {/* BUTTON */}
                  <Link 
                    href={`/modules/${module.id}`} 
                    className={`
                        mt-auto w-full rounded-xl transition-all duration-300 shadow-md
                        flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold border
                        ${btnBgClass} ${btnBorderClass} text-white
                        hover:bg-white hover:text-black hover:border-black
                    `}
                  >
                        <span>Эхлүүлэх</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

               </div>
            </GlassCard>
          ))}
      </div>
    </div>
  );
}