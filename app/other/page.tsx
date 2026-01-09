'use client';
import React from 'react';
import Link from 'next/link';
import { PenTool, Briefcase, BookOpen, ArrowRight, Lock } from 'lucide-react'; // Lock икон нэмсэн
import { GlassCard } from '../components/GlassCard';

export default function OtherPage() {
  const menuItems = [
    {
      title: 'Самбар & Тэмдэглэл',
      desc: 'Санаагаа зураглах, sticky note наах, чөлөөтэй бичих талбар.',
      icon: PenTool,
      color: 'bg-orange-500',
      href: '/whiteboard',
      bgImage: 'radial-gradient(circle at top right, #fff7ed, transparent)',
      disabled: false
    },
    {
      title: 'Төслүүдийн Үзэсгэлэн',
      desc: 'Бидний хөгжүүлж буй бодит төслүүд, технологийн шийдлүүд.',
      icon: Briefcase,
      color: 'bg-blue-600',
      href: '/projects',
      bgImage: 'radial-gradient(circle at top right, #eff6ff, transparent)',
      disabled: true // ЭНЭ ХЭСГИЙГ ХААСАН
    },
    {
      title: 'Мэдлэгийн Сан (Wiki)',
      desc: 'Кодын жишээ, заавар, алдаа засах гарын авлага.',
      icon: BookOpen,
      color: 'bg-emerald-500',
      href: '/resources',
      bgImage: 'radial-gradient(circle at top right, #ecfdf5, transparent)',
      disabled: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 space-y-8 animate-fadeIn">
      
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl font-black text-slate-800 mb-3">
          Нэмэлт Цэс
        </h1>
        <p className="text-slate-600">
          Хөгжүүлэлтийн явцад хэрэг болох хэрэгслүүд болон мэдээллийн сан.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {menuItems.map((item, idx) => {
          // Card Content - Доторх агуулгыг тусад нь хувьсагчид авав
          const CardContent = (
            <GlassCard className={`h-full relative overflow-hidden transition-all duration-300 border-white/60 !p-0 ${item.disabled ? 'opacity-80 grayscale-[0.5]' : 'hover:scale-[1.02] hover:shadow-xl'}`}>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 opacity-50" style={{ background: item.bgImage }}></div>
              
              <div className="p-6 relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-2xl ${item.disabled ? 'bg-slate-400' : item.color} text-white flex items-center justify-center shadow-lg mb-4 ${!item.disabled && 'group-hover:rotate-6'} transition-transform`}>
                   {item.disabled ? <Lock size={24} /> : <item.icon size={24} />}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                  {item.title}
                  {item.disabled && (
                    <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wide border border-slate-300">
                        Хаалттай
                    </span>
                  )}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className={`mt-auto flex items-center text-xs font-bold uppercase tracking-wider transition-colors ${item.disabled ? 'text-slate-400' : 'text-slate-400 group-hover:text-slate-800'}`}>
                  {item.disabled ? (
                      <span>Тун удахгүй нээгдэнэ</span>
                  ) : (
                      <>Нээх <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </div>
              </div>
            </GlassCard>
          );

          // Render Logic: Disabled байвал Link ашиглахгүй
          if (item.disabled) {
            return (
                <div key={idx} className="cursor-not-allowed select-none">
                    {CardContent}
                </div>
            );
          }

          return (
            <Link href={item.href} key={idx} className="group">
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
}