"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/motion";
import { Check } from "lucide-react";
import { useLang, translations } from "@/lib/lang-context";

interface StatusTimelineProps {
  currentStep: number;
}

export function StatusTimeline({ currentStep }: StatusTimelineProps) {
  const { lang } = useLang();
  const tr = translations[lang];

  const steps = tr.steps.map((label, i) => ({ id: i + 1, label }));

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      viewport={defaultViewport}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: "24px 28px",
        border: "1px solid #d4e8da",
      }}
    >
      <p className="mb-6 text-sm font-semibold" style={{ color: "#1a3d2b" }}>
        {tr.progressTitle}
      </p>
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isDone = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <motion.div key={step.id} variants={staggerItem} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: isDone ? "#1a3d2b" : isActive ? "#e8f5ee" : "#f4f7f4",
                    color: isDone ? "#ffffff" : isActive ? "#1a3d2b" : "#9ab8a5",
                    border: isActive ? "2px solid #2d6a4f" : "2px solid transparent",
                  }}
                >
                  {isDone ? <Check size={14} /> : step.id}
                </div>
                <span
                  className="text-center text-xs font-medium"
                  style={{ color: isActive ? "#1a3d2b" : isDone ? "#6b8f78" : "#9ab8a5" }}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="mb-6 h-px flex-1"
                  style={{ backgroundColor: step.id < currentStep ? "#2d6a4f" : "#d4e8da" }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
