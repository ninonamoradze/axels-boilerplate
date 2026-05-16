"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
      style={{
        backgroundColor: isActive ? "#2d6a4f" : "transparent",
        color: isActive ? "#ffffff" : "#a8d5b5",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(45,106,79,0.4)";
          (e.currentTarget as HTMLElement).style.color = "#ffffff";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#a8d5b5";
        }
      }}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
}
