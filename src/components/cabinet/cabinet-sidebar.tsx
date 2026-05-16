"use client";

import { LayoutDashboard, Building2, FileText, CreditCard, User, Newspaper } from "lucide-react";
import { CabinetNavItem } from "./cabinet-nav-item";

const navItems = [
  { href: "/cabinet/overview", label: "მთავარი", icon: LayoutDashboard },
  { href: "/cabinet/property", label: "ჩემი ბინა", icon: Building2 },
  { href: "/cabinet/documents", label: "დოკუმენტები", icon: FileText },
  { href: "/cabinet/payments", label: "გადახდები", icon: CreditCard },
  { href: "/cabinet/news", label: "სიახლეები", icon: Newspaper },
  { href: "/cabinet/profile", label: "პროფილი", icon: User },
];

export function CabinetSidebar() {
  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-white/10 bg-background px-4 py-6">
      <div className="mb-8 px-3">
        <p className="text-xs font-medium tracking-widest text-white/40 uppercase">შენი სახლი</p>
        <p className="mt-0.5 text-sm text-white/70">უნივერსიტეტის ქუჩაძე</p>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <CabinetNavItem key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
