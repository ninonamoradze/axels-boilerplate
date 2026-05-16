"use client";

import { motion } from "framer-motion";
import { type Project } from "@/lib/mock-data";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface ProjectSelectorProps {
  projects: Project[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ProjectSelector({ projects, selectedId, onSelect }: ProjectSelectorProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => {
        const isSelected = selectedId === project.id;
        return (
          <motion.button
            key={project.id}
            variants={staggerItem}
            onClick={() => onSelect(project.id)}
            className="group relative overflow-hidden rounded-2xl border text-left transition-all duration-300"
            style={{
              borderColor: isSelected ? project.coverColor : "rgba(0,0,0,0.1)",
              boxShadow: isSelected
                ? `0 0 0 2px ${project.coverColor}40, 0 8px 24px ${project.coverColor}20`
                : "0 2px 8px rgba(0,0,0,0.06)",
              background: isSelected
                ? `linear-gradient(135deg, ${project.coverColor}10 0%, white 60%)`
                : "white",
            }}
          >
            <div
              className="h-2 w-full"
              style={{ background: project.coverColor }}
            />
            <div className="p-5">
              <h3 className="mb-1 text-lg font-semibold text-slate-900">{project.name}</h3>
              <p className="mb-4 text-sm text-slate-500">{project.address}</p>

              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-600">მშენებლობის პროგრესი</span>
                <span className="font-semibold" style={{ color: project.coverColor }}>
                  {project.constructionPercent}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: project.coverColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.constructionPercent}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                ეტაპი: <span className="font-medium text-slate-700">{project.constructionStage}</span>
              </p>
            </div>

            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden
            >
              →
            </div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
