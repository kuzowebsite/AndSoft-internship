import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard = ({ children, className = '', onClick }: GlassCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-[2rem] p-8 text-slate-800 transition-all duration-300 hover:bg-white/25 hover:scale-[1.01] ${className}`}
    >
      {children}
    </div>
  );
};