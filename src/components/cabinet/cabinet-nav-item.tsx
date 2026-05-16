"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface CabinetNavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export function CabinetNavItem({ href, label, icon: Icon }: CabinetNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
        isActive
          ? "bg-white/10 text-white"
          : "text-white/60 hover:bg-white/5 hover:text-white/90",
      )}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
}
