"use client";

import { LogOut } from "lucide-react";
import { useLang, translations } from "@/lib/lang-context";

interface CabinetHeaderProps {
  userName?: string;
  onLogout?: () => void;
}

export function CabinetHeader({ userName = "კლიენტი", onLogout }: CabinetHeaderProps) {
  const { lang, setLang } = useLang();
  const tr = translations[lang];

  return (
    <header
      className="flex h-14 items-center justify-between px-6"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #d4e8da" }}
    >
      <div />
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium" style={{ color: "#1a3d2b" }}>{userName}</span>

        {/* KA/EN toggle */}
        <div
          className="flex overflow-hidden rounded-md"
          style={{ border: "1px solid #d4e8da" }}
        >
          {(["ka", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-2.5 py-1 text-xs font-semibold uppercase transition-colors"
              style={{
                backgroundColor: lang === l ? "#1a3d2b" : "transparent",
                color: lang === l ? "#ffffff" : "#6b8f78",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition-colors hover:bg-[#e8f5ee]"
          style={{ color: "#6b8f78", border: "1px solid #d4e8da" }}
        >
          <LogOut size={14} />
          <span>{tr.logout}</span>
        </button>
      </div>
    </header>
  );
}
