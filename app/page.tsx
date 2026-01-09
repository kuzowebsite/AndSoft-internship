'use client';
import React from 'react';
import { 
  Smartphone, Database, Code2, 
  Rocket 
} from 'lucide-react';
import { GlassCard } from './components/GlassCard';

export default function HomePage() {
  const iconBox = "w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-slate-700";

  // Roadmap-тай яг таарсан түлхүүр үгс (Highlights)
  const highlights = [
    { 
      icon: Code2, 
      title: "Module 1: Суурь", 
      desc: "Dart хэл, SDK Setup & Hello World" 
    },
    { 
      icon: Smartphone, 
      title: "Module 2: UI/UX", 
      desc: "Pixel-perfect дизайн & Animations" 
    },
    { 
      icon: Database, 
      title: "Module 3: Backend", 
      desc: "Node.js, Express & PostgreSQL" // Шинэчилсэн агуулга
    },
    { 
      icon: Rocket, 
      title: "Module 4: AI & Deploy", 
      desc: "Gemini AI & PlayStore Release" 
    },
  ];

  return (
    <div className="animate-fadeIn space-y-12 pb-8">
      
      {/* --- HEADER --- */}
      <div className="text-center space-y-3 mb-12 pt-4">
          <h1 className="text-3xl md:text-5xl font-black text-[#161e2e] drop-shadow-sm">
            Системийн архитектур
          </h1>
          <p className="text-slate-600 font-medium opacity-80 max-w-2xl mx-auto text-sm md:text-base">
            Бидний хөгжүүлэх аппликейшн нь дараах хоёр үндсэн хэсгээс бүрдэнэ. 
            (Ресторан жишээгээр)
          </p>
      </div>

      {/* --- ARCHITECTURE CARDS --- */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Frontend Card */}
        <GlassCard className="border-white/60 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
          <div className={iconBox}>
            <Smartphone strokeWidth={1.5} size={28} />
          </div>
          <h2 className="text-2xl font-bold text-[#161e2e] mb-2">
            Frontend (Зочны танхим)
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed mb-6">
            Хэрэглэгчийн гар утсан дээр харагдах хэсэг. Flutter ашиглан хийгдэнэ. 
            Энд цэс харах, гоё дизайн (UI), хөдөлгөөн (Animation) болон хэрэглэгчийн үйлдлүүд хийгдэнэ.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-blue-50/50 border border-blue-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                Flutter UI
              </span>
              <span className="px-3 py-1 bg-blue-50/50 border border-blue-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                Scrollable Lists
              </span>
              <span className="px-3 py-1 bg-blue-50/50 border border-blue-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                Assets & Images
              </span>
          </div>
        </GlassCard>

        {/* Backend Card (UPDATED TO NODE.JS & EXPRESS) */}
        <GlassCard className="border-white/60 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
            <div className={iconBox}>
            <Database strokeWidth={1.5} size={28} />
          </div>
          <h2 className="text-2xl font-bold text-[#161e2e] mb-2">
            Backend (Гал тогоо)
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed mb-6">
            Өгөгдөл боловсруулах хэсэг. Бид **Node.js** дээр **Express** сервер бичиж, **PostgreSQL** баазтай холбон жинхэнэ REST API бүтээнэ.
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
              {/* Updated Tags for Node.js Stack */}
              <span className="px-3 py-1 bg-purple-50/50 border border-purple-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-50/50 border border-purple-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                Express API
              </span>
              <span className="px-3 py-1 bg-purple-50/50 border border-purple-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                PostgreSQL
              </span>
          </div>
        </GlassCard>
      </div>

      {/* --- HIGHLIGHTS SECTION --- */}
      <div className="pt-8">
        <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#161e2e]">
              14 хоногт эзэмших ур чадварууд
            </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, idx) => (
                <GlassCard key={idx} className="!p-5 !rounded-2xl flex flex-col items-center text-center hover:bg-white/40 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 text-slate-700 shadow-sm">
                        <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-sm text-[#161e2e] mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-snug">{item.desc}</p>
                </GlassCard>
            ))}
        </div>
      </div>
    </div>
  );
}