"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useLang, translations } from "@/lib/lang-context";

interface WelcomeCardProps {
  userName: string;
  apartmentStatus: string;
  apartmentNumber: string;
}

export function WelcomeCard({ userName, apartmentStatus, apartmentNumber }: WelcomeCardProps) {
  const { lang } = useLang();
  const tr = translations[lang];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: "#1a3d2b",
        borderRadius: 16,
        padding: "24px 28px",
      }}
    >
      <p style={{ fontSize: 13, color: "#a8d5b5", marginBottom: 4 }}>{tr.greeting}</p>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
        {userName} 👋
      </h2>
      <p style={{ fontSize: 13, color: "#a8d5b5", marginBottom: 16 }}>{tr.greetingSub}</p>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "#2d6a4f", color: "#a8d5b5" }}
        >
          {tr.apartment} №{apartmentNumber}
        </span>
        <span
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "#e8f5ee", color: "#1a3d2b" }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#2d6a4f", display: "inline-block" }} />
          {apartmentStatus}
        </span>
      </div>
    </motion.div>
  );
}
