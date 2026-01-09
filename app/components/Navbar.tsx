'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Fingerprint, ScanFace, GraduationCap, 
  NotebookPen, 
  Layers,
  LayoutGrid // ЭНД НЭМСЭН: Алдааг засав
} from 'lucide-react';
import { students } from '../data/students';

export const Navbar = () => {
  const pathname = usePathname();

  const renderStudentList = () => (
    <div className="flex items-center gap-8 pl-20 md:pl-48 pr-16">
       {students.map((student) => (
          <div key={student.id} className="flex items-center gap-2 text-slate-700 text-sm font-semibold shrink-0">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             {student.name}
             <span className="text-slate-400 text-[10px] md:text-xs font-normal">({student.role})</span>
          </div>
       ))}
    </div>
  );

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
    return `flex items-center gap-1.5 px-3 py-1.5 md:px-5 md:py-2 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${
      isActive 
        ? 'bg-slate-800 text-white shadow-md transform scale-105' 
        : 'text-slate-700 hover:bg-white/50'
    }`;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 p-2 pt-4 flex justify-center pointer-events-none">
        <div className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-full flex justify-between items-center w-full max-w-6xl shadow-lg shadow-black/5 relative overflow-hidden pointer-events-auto h-[50px] md:h-[60px]">
           
           <div className="relative z-20 bg-white/40 backdrop-blur-xl h-full px-3 md:px-6 rounded-l-full flex items-center gap-2 md:gap-3 border-r border-white/20 pr-4 md:pr-8 shadow-[10px_0_20px_rgba(255,255,255,0.8)]">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-tr from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                    <Fingerprint size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <span className="hidden md:block font-bold text-slate-800 tracking-tight text-lg whitespace-nowrap">AndSoft Internship</span>
              </Link>
           </div>

           <div className="absolute inset-0 z-10 flex items-center overflow-hidden mask-linear-gradient">
              <div className="animate-marquee flex items-center">
                 {renderStudentList()}
                 {renderStudentList()}
              </div>
           </div>
           
           <div className="relative z-20 h-full flex items-center px-2 pr-3 bg-white/40 backdrop-blur-sm rounded-r-full border-l border-white/20 shadow-[-10px_0_20px_rgba(255,255,255,0.8)]">
              <Link href="/students" className="group flex items-center gap-2">
                 <div className="w-8 h-8 md:w-9 md:h-9 bg-white/50 rounded-full flex items-center justify-center border border-white/60 shadow-sm transition-transform group-hover:scale-110">
                    <GraduationCap size={16} className="text-slate-800 md:w-[18px] md:h-[18px]" />
                 </div>
              </Link>
           </div>
        </div>
      </nav>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-1 flex items-center gap-0.5 md:gap-1">
           
           <Link href="/" className={getLinkStyle('/')}>
             <ScanFace className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
             <span>Бүтэц</span>
           </Link>

           <div className="w-px h-4 md:h-5 bg-slate-400/30 mx-0.5"></div>
           
           <Link href="/tech" className={getLinkStyle('/tech')}>
             <Layers className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
             <span>Техно</span>
           </Link>

           <div className="w-px h-4 md:h-5 bg-slate-400/30 mx-0.5"></div>

           <Link href="/roadmap" className={getLinkStyle('/roadmap')}>
             <NotebookPen className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
             <span>Төлөв</span>
           </Link>

           <div className="w-px h-4 md:h-5 bg-slate-400/30 mx-0.5"></div>

           <Link href="/other" className={getLinkStyle('/other')}>
             <LayoutGrid className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
             <span>Бусад</span>
           </Link>

        </div>
      </div>
    </>
  );
};