"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";
import { Tag, Calendar, Download } from "lucide-react";

export type NewsCategory = "offer" | "news" | "event";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  category: NewsCategory;
  isNew?: boolean;
  downloadUrl?: string;
  downloadLabel?: string;
}

const categoryConfig: Record<NewsCategory, { label: string; bg: string; color: string }> = {
  offer: { label: "სპეციალური შეთავაზება", bg: "#fff8e1", color: "#b45309" },
  news:  { label: "სიახლე",                bg: "#e8f5ee", color: "#1a3d2b" },
  event: { label: "ღონისძიება",             bg: "#eff6ff", color: "#1d4ed8" },
};

export function NewsCard({ title, description, date, category, isNew, downloadUrl, downloadLabel }: NewsCardProps) {
  const { label, bg, color } = categoryConfig[category];

  return (
    <motion.div
      variants={staggerItem}
      className="relative flex flex-col rounded-2xl p-5 transition-shadow hover:shadow-md"
      style={{ backgroundColor: "#ffffff", border: "1px solid #d4e8da" }}
    >
      {isNew && (
        <span
          className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[10px] font-semibold"
          style={{ backgroundColor: "#1a3d2b", color: "#ffffff" }}
        >
          ახალი
        </span>
      )}
      <div className="mb-3 flex items-center gap-1.5">
        <span
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
          style={{ backgroundColor: bg, color }}
        >
          <Tag size={11} />
          {label}
        </span>
      </div>
      <h3 className="mb-2 text-sm font-semibold" style={{ color: "#1a3d2b" }}>{title}</h3>
      <p className="flex-1 text-sm leading-relaxed" style={{ color: "#6b8f78" }}>{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "#9ab8a5" }}>
          <Calendar size={12} />
          <span>{date}</span>
        </div>
        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
            style={{ color: "#2d6a4f", border: "1px solid #d4e8da" }}
          >
            <Download size={13} />
            <span>{downloadLabel ?? "ჩამოტვირთვა"}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
