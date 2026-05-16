"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const steps = [
  { id: 1, label: "რეზერვაცია" },
  { id: 2, label: "ხელშეკრულება" },
  { id: 3, label: "მშენებლობა" },
  { id: 4, label: "ჩაბარება" },
];

interface StatusTimelineProps {
  currentStep: number;
}

export function StatusTimeline({ currentStep }: StatusTimelineProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      viewport={defaultViewport}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <p className="mb-6 text-sm font-medium text-white/70">პროექტის პროგრესი</p>
      <div className="flex items-center gap-0">
        {steps.map((step, index) => {
          const isDone = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <motion.div key={step.id} variants={staggerItem} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium",
                    isDone && "border-indigo-400 bg-indigo-500 text-white",
                    isActive && "border-indigo-400 bg-transparent text-indigo-300",
                    !isDone && !isActive && "border-white/20 bg-transparent text-white/30",
                  )}
                >
                  {isDone ? <Check size={14} /> : step.id}
                </div>
                <span
                  className={cn(
                    "text-center text-xs",
                    isActive ? "text-white" : isDone ? "text-white/60" : "text-white/30",
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mb-6 h-px flex-1",
                    step.id < currentStep ? "bg-indigo-400/60" : "bg-white/10",
                  )}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
