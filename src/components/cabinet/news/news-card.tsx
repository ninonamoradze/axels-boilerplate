"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";
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

const categoryConfig: Record<NewsCategory, { label: string; styles: string }> = {
  offer: {
    label: "სპეციალური შეთავაზება",
    styles: "bg-amber-500/15 text-amber-300",
  },
  news: {
    label: "სიახლე",
    styles: "bg-indigo-500/15 text-indigo-300",
  },
  event: {
    label: "ღონისძიება",
    styles: "bg-emerald-500/15 text-emerald-300",
  },
};

export function NewsCard({ title, description, date, category, isNew, downloadUrl, downloadLabel }: NewsCardProps) {
  const { label, styles } = categoryConfig[category];

  return (
    <motion.div
      variants={staggerItem}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08]"
    >
      {isNew && (
        <span className="absolute top-4 right-4 rounded-full bg-indigo-500 px-2 py-0.5 text-[10px] font-medium text-white">
          ახალი
        </span>
      )}
      <div className="flex items-center gap-2">
        <span className={cn("flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs", styles)}>
          <Tag size={11} />
          {label}
        </span>
      </div>
      <h3 className="mt-3 text-sm font-medium text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/50">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-white/30">
          <Calendar size={12} />
          <span>{date}</span>
        </div>
        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-white/50 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Download size={13} />
            <span>{downloadLabel ?? "ჩამოტვირთვა"}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
