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
  const infoItems = [
    { label: "სართული", value: floor },
    { label: "ფართობი", value: `${area} მ²` },
    { label: "ოთახები", value: rooms },
    { label: "ბლოკი", value: block },
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      viewport={defaultViewport}
      style={{ backgroundColor: "#ffffff", borderRadius: 16, border: "1px solid #d4e8da", overflow: "hidden" }}
    >
      <div style={{ backgroundColor: "#1a3d2b", padding: "20px 24px" }}>
        <p style={{ fontSize: 11, color: "#a8d5b5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
          შეძენილი ქონება
        </p>
        <div className="flex items-center justify-between">
          <h3 style={{ fontSize: 28, fontWeight: 700, color: "#ffffff" }}>№{number}</h3>
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "#e8f5ee", color: "#1a3d2b" }}
          >
            {status}
          </span>
        </div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-4"
        style={{ gap: "1px", backgroundColor: "#d4e8da" }}
      >
        {infoItems.map(({ label, value }) => (
          <div key={label} style={{ backgroundColor: "#ffffff", padding: "20px 24px" }}>
            <p style={{ fontSize: 10, color: "#9ab8a5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              {label}
            </p>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#1a3d2b" }}>{value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
