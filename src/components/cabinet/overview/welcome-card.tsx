"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/motion";

interface WelcomeCardProps {
  userName: string;
  apartmentStatus: string;
  apartmentNumber: string;
}

export function WelcomeCard({ userName, apartmentStatus, apartmentNumber }: WelcomeCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      viewport={defaultViewport}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <p className="text-sm text-white/50">გამარჯობა,</p>
      <h2 className="mt-1 text-2xl font-medium text-white">{userName}</h2>
      <div className="mt-4 flex items-center gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
          ბინა №{apartmentNumber}
        </span>
        <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">
          {apartmentStatus}
        </span>
      </div>
    </motion.div>
  );
}
