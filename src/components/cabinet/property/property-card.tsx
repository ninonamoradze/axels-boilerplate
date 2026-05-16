"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/motion";

interface PropertyCardProps {
  number: string;
  floor: number;
  area: number;
  rooms: number;
  block: string;
  status: string;
}

export function PropertyCard({ number, floor, area, rooms, block, status }: PropertyCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      viewport={defaultViewport}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-white/50">ბინა</p>
          <h3 className="mt-1 text-3xl font-medium text-white">№{number}</h3>
        </div>
        <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">
          {status}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "სართული", value: floor },
          { label: "ფართობი", value: `${area} მ²` },
          { label: "ოთახები", value: rooms },
          { label: "ბლოკი", value: block },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-white/40">{label}</p>
            <p className="mt-1 text-lg font-medium text-white">{value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
