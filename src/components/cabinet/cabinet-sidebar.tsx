"use client";

import { LayoutDashboard, Building2, FileText, CreditCard, User, Newspaper } from "lucide-react";
import { CabinetNavItem } from "./cabinet-nav-item";
import { useLang, translations } from "@/lib/lang-context";

export function CabinetSidebar() {
  const { lang } = useLang();
  const tr = translations[lang];

  const navItems = [
    { href: "/cabinet/overview", label: tr.nav.overview, icon: LayoutDashboard },
    { href: "/cabinet/property", label: tr.nav.property, icon: Building2 },
    { href: "/cabinet/documents", label: tr.nav.documents, icon: FileText },
    { href: "/cabinet/payments", label: tr.nav.payments, icon: CreditCard },
    { href: "/cabinet/news", label: tr.nav.news, icon: Newspaper },
    { href: "/cabinet/profile", label: tr.nav.profile, icon: User },
  ];

  return (
    <aside
      className="flex h-screen w-60 shrink-0 flex-col px-4 py-6"
      style={{ backgroundColor: "#1a3d2b", borderRight: "3px solid #2d6a4f" }}
    >
      <div className="mb-8 px-3">
        <div
          className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: "#2d6a4f" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a8d5b5" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a8d5b5" }}>
          {tr.portalLabel}
        </p>
        <p className="mt-0.5 text-sm font-semibold" style={{ color: "#ffffff" }}>
          შენი სახლი
        </p>
        <p className="text-xs" style={{ color: "#6b8f78" }}>
          უნივერსიტეტის ქუჩაზე
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <CabinetNavItem key={item.href} {...item} />
        ))}
      </nav>

      <div className="mt-auto px-3 pt-4" style={{ borderTop: "1px solid #2d6a4f" }}>
        <p className="text-xs" style={{ color: "#6b8f78" }}>© 2025 შენი სახლი</p>
      </div>
    </aside>
  );
}
