"use client";

import { motion } from "framer-motion";
import { type Project } from "@/lib/mock-data";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className="h-1 w-8 rounded-full"
          style={{ background: project.coverColor }}
        />
        <h2 className="text-xl font-bold text-slate-900">{project.name} — სიახლეები</h2>
      </div>

      <motion.ul
        className="space-y-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {project.updates.map((update, i) => (
          <motion.li
            key={i}
            variants={staggerItem}
            className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
              style={{ background: `${project.coverColor}15` }}
            >
              {update.icon}
            </div>
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-slate-900">{update.title}</h3>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    background: `${project.coverColor}15`,
                    color: project.coverColor,
                  }}
                >
                  {update.stage}
                </span>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-slate-600">{update.description}</p>
              <time className="text-xs text-slate-400">
                {new Date(update.date).toLocaleDateString("ka-GE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
