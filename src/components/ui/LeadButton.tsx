"use client";

import React from 'react';

interface LeadButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function LeadButton({ children, className = '', onClick }: LeadButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('https://wa.me/56984410379', '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] active:scale-95 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </button>
  );
}
