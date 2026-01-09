'use client';
import React, { useState } from 'react';
import { 
  Smartphone, Globe, Database, Server, CheckCircle2, 
  TrendingUp, Briefcase, AlertTriangle, Cpu, Layers 
} from 'lucide-react';
import { GlassCard } from '@/app/components/GlassCard';

// --- DATA: TECH COMPARISON ---
const techData = {
  mobile: {
    title: 'Mobile App Development',
    description: 'Гар утасны аппликейшн хөгжүүлэх технологиуд.',
    icon: Smartphone,
    items: [
      {
        name: 'Flutter',
        isChosen: true, // БИДНИЙ СОНГОЛТ
        language: 'Dart',
        pros: [
            'Cross-Platform: Нэг кодоор iOS болон Android зэрэг гарна.',
            'Performance: Native хурдтай маш ойролцоо (Skia engine).',
            'Hot Reload: Кодоо бичээд үр дүнгээ шууд хардаг (Маш хурдан хөгжүүлэлт).',
            'UI: Маш гоё, pixel-perfect дизайн гаргахад хялбар.'
        ],
        cons: ['Апп-ын хэмжээ (File size) бага зэрэг том байдаг.', 'Зарим маш гүнзгий OS feature-т native код бичих хэрэгтэй болдог.'],
        market: 'Өсөлттэй. Start-up болон дунд хэмжээний компаниудад маш эрэлттэй. Freelance хийхэд тохиромжтой.',
        whyWeChose: 'Бид 14 хоногийн дотор iOS болон Android дээр зэрэг ажиллах бүтэн апп гаргах шаардлагатай тул хурд болон чанарыг бодож Flutter-ийг сонгосон.'
      },
      {
        name: 'React Native',
        isChosen: false,
        language: 'JavaScript / TypeScript',
        pros: ['Web хөгжүүлэгчид сурахад амархан.', 'Community маш том.', 'Code push (Store-оор дамжихгүй update хийх) боломжтой.'],
        cons: ['Performance нь Flutter-аас бага зэрэг удаан (Bridge ашигладаг).', 'Upgrade хийхэд төвөгтэй байх тохиолдол бий.'],
        market: 'Маш өндөр эрэлттэй. Ялангуяа Web багтай компаниуд илүүд үздэг.'
      },
      {
        name: 'Native (Swift/Kotlin)',
        isChosen: false,
        language: 'Swift (iOS), Kotlin (Android)',
        pros: ['Хамгийн өндөр Performance.', 'Үйлдлийн системийн бүх боломжийг 100% ашиглана.'],
        cons: ['iOS болон Android-д тус тусад нь 2 удаа код бичих шаардлагатай.', 'Хөгжүүлэлтийн зардал өндөр, хугацаа их орно.'],
        market: 'Том банк, санхүүгийн апп, тоглоом зэрэгт эрэлттэй.'
      }
    ]
  },
  backend: {
    title: 'Backend Development',
    description: 'Сервер болон API хөгжүүлэлт.',
    icon: Server,
    items: [
      {
        name: 'Node.js (Express)',
        isChosen: true, // БИДНИЙ СОНГОЛТ
        language: 'JavaScript / TypeScript',
        pros: [
            'Fullstack: Frontend (React/Vue) болон Backend дээр нэг хэл ашиглана.',
            'High Performance: Non-blocking I/O учир олон хүсэлтийг зэрэг хурдан шийддэг.',
            'NPM: Дэлхийн хамгийн том сангийн (library) цуглуулгатай.'
        ],
        cons: ['CPU Heavy буюу маш хүнд тооцоолол (Video processing г.м) хийхэд тохиромжгүй.', 'Callback hell үүсэх эрсдэлтэй (гэхдээ Async/Await шийдсэн).'],
        market: 'Маш өндөр. Вэб болон Апп-ын backend-д хамгийн өргөн хэрэглэгддэг.',
        whyWeChose: 'Flutter (Frontend)-тай холбоход хялбар REST API бичихэд хурдан. Мөн сурахад хамгийн ойлгомжтой, орчин үеийн стандарт.'
      },
      {
        name: 'Python (Django/FastAPI)',
        isChosen: false,
        language: 'Python',
        pros: ['Синтакс нь маш энгийн, уншихад хялбар.', 'AI болон Data Science-тай холбоход хамгийн сайн сонголт.'],
        cons: ['Node.js болон Go-той харьцуулахад гүйцэтгэл (execution speed) удаан.'],
        market: 'Тогтвортой өндөр. AI төслүүдэд зайлшгүй шаардлагатай.'
      },
      {
        name: 'Java (Spring Boot)',
        isChosen: false,
        language: 'Java',
        pros: ['Enterprise түвшний маш найдвартай, том системд зориулагдсан.', 'Security сайтай.'],
        cons: ['Код бичихэд их нуршуу (Verbose).', 'Start-up болон жижиг төсөлд хэт нүсэрдэнэ.'],
        market: 'Банк, том корпорациудад маш их эрэлттэй.'
      }
    ]
  },
  database: {
    title: 'Database Systems',
    description: 'Өгөгдөл хадгалах системүүд.',
    icon: Database,
    items: [
      {
        name: 'PostgreSQL',
        isChosen: true, // БИДНИЙ СОНГОЛТ
        language: 'SQL',
        pros: [
            'Advanced Features: JSON дэмждэг, маш нарийн query бичих боломжтой.',
            'Reliability: Өгөгдлийн бүрэн бүтэн байдлыг (ACID) маш сайн хангадаг.',
            'Open Source: Үнэ төлбөргүй, маш хүчирхэг.'
        ],
        cons: ['MySQL-тэй харьцуулахад тохиргоо хийхэд бага зэрэг төвөгтэй байж магадгүй.', 'Read-heavy үйлдлүүд дээр NoSQL-ээс удаан байж болно.'],
        market: 'Сүүлийн жилүүдэд хамгийн хурдацтай өсөж буй SQL бааз. Modern Backend-д стандарт болж байна.',
        whyWeChose: 'Харилцаа холбоотой (Relational) өгөгдөл буюу "Хэрэглэгч -> Захиалга -> Хоол" гэсэн бүтцийг хадгалахад хамгийн тохиромжтой.'
      },
      {
        name: 'MongoDB',
        isChosen: false,
        language: 'NoSQL (BSON)',
        pros: ['Schema-less: Өгөгдлийн бүтэц тогтмол биш үед маш уян хатан.', 'Scaling хийхэд амархан.'],
        cons: ['Complex Query буюу олон хүснэгт холбосон хайлт хийхэд хэцүү.', 'ACID transaction дэмжлэг SQL-ээс сул.'],
        market: 'Start-up болон Big Data төслүүдэд эрэлттэй.'
      },
      {
        name: 'MySQL',
        isChosen: false,
        language: 'SQL',
        pros: ['Хамгийн түгээмэл, маш олон хостинг дэмждэг.', 'Read-heavy системд маш хурдан.'],
        cons: ['PostgreSQL шиг олон дэвшилтэт боломжууд (Full text search г.м) сул.'],
        market: 'Вэбсайтууд (WordPress г.м) маш их ашигладаг.'
      }
    ]
  }
};

type TabType = 'mobile' | 'backend' | 'database';

export default function TechStackPage() {
  const [activeTab, setActiveTab] = useState<TabType>('mobile');

  const activeData = techData[activeTab];

  return (
    <div className="animate-fadeIn pb-24">
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-16 pt-8">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/50 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Technology Research</span>
          </div>
         <h1 className="text-3xl md:text-5xl font-black text-[#161e2e] drop-shadow-sm mb-4">
            Технологийн Сонголт
         </h1>
         <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Орчин үеийн програм хангамжид ашиглагдаж буй технологиудын харьцуулалт болон бидний сонголтын шалтгаан.
         </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-white/30 backdrop-blur-md p-1.5 rounded-2xl border border-white/40 shadow-sm flex gap-1">
          {(Object.keys(techData) as TabType[]).map((key) => {
            const info = techData[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#161e2e] text-white shadow-md' 
                    : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <info.icon size={16} />
                <span className="hidden md:inline">{info.title}</span>
                <span className="md:hidden">{info.title.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 md:gap-8">
        {/* Description of current tab */}
        <div className="text-center mb-4">
           <h2 className="text-xl font-bold text-slate-800">{activeData.title}</h2>
           <p className="text-slate-500 text-sm">{activeData.description}</p>
        </div>

        {activeData.items.map((item, idx) => (
          <GlassCard 
            key={idx} 
            className={`!p-0 relative overflow-hidden transition-all duration-500 ${
                item.isChosen ? 'border-blue-500/50 shadow-blue-900/10 scale-[1.01]' : 'border-white/60 opacity-90 hover:opacity-100'
            }`}
          >
            {/* Project Choice Badge */}
            {item.isChosen && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl shadow-sm z-10 flex items-center gap-1.5">
                    <CheckCircle2 size={12} />
                    БИДНИЙ СОНГОЛТ
                </div>
            )}

            <div className="grid md:grid-cols-12 gap-0">
                {/* Header (Left side on Desktop) */}
                <div className={`p-6 md:p-8 md:col-span-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200/50 ${item.isChosen ? 'bg-blue-50/30' : ''}`}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{item.name}</h3>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">{item.language}</div>
                    
                    {item.isChosen && (
                        <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-blue-100 mb-4">
                            <h4 className="text-[10px] font-bold text-blue-600 uppercase mb-1">Яагаад үүнийг сонгов?</h4>
                            <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                {item.whyWeChose}
                            </p>
                        </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600 mt-auto">
                        <Briefcase size={14} className="text-slate-400" />
                        <span>Эрэлт: {item.market}</span>
                    </div>
                </div>

                {/* Details (Right side) */}
                <div className="p-6 md:p-8 md:col-span-8 space-y-6">
                    
                    {/* Pros */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <TrendingUp size={14} />
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm">Давуу талууд</h4>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {item.pros.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                                    {pro}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                <AlertTriangle size={14} />
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm">Сул талууд</h4>
                        </div>
                        <ul className="space-y-2">
                            {item.cons.map((con, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-500 leading-relaxed">
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0 opacity-50"></span>
                                    {con}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}