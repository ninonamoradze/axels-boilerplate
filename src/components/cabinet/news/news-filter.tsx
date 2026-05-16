"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/motion";
import { NewsCard, type NewsCategory } from "./news-card";

type Filter = "all" | NewsCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "ყველა" },
  { id: "offer", label: "შეთავაზებები" },
  { id: "news", label: "სიახლეები" },
  { id: "event", label: "ღონისძიებები" },
];

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: NewsCategory;
  isNew?: boolean;
  downloadUrl?: string;
  downloadLabel?: string;
}

interface NewsFilterProps {
  items: NewsItem[];
}

export function NewsFilter({ items }: NewsFilterProps) {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-colors",
              active === f.id
                ? "bg-white/15 text-white"
                : "text-white/40 hover:bg-white/5 hover:text-white/70",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={defaultViewport}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </motion.div>
    </div>
  );
}
