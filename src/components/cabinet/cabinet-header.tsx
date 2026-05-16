"use client";

import { LogOut } from "lucide-react";

interface CabinetHeaderProps {
  userName?: string;
  onLogout?: () => void;
}

export function CabinetHeader({ userName = "კლიენტი", onLogout }: CabinetHeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 bg-background px-6">
      <div />
      <div className="flex items-center gap-4">
        <span className="text-sm text-white/70">{userName}</span>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white/80"
          aria-label="გასვლა"
        >
          <LogOut size={16} />
          <span>გასვლა</span>
        </button>
      </div>
    </header>
  );
}
