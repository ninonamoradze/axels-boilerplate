"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/motion";
import { NewsCard, type NewsCategory } from "./news-card";

type Filter = "all" | NewsCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all",   label: "ყველა" },
  { id: "offer", label: "შეთავაზებები" },
  { id: "news",  label: "სიახლეები" },
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
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: active === f.id ? "#1a3d2b" : "#ffffff",
              color: active === f.id ? "#ffffff" : "#6b8f78",
              border: "1px solid #d4e8da",
            }}
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
