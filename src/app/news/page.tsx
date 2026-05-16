"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/mock-data";
import { ProjectSelector } from "@/components/news/project-selector";
import { ProjectDetail } from "@/components/news/project-detail";
import { fadeUp } from "@/lib/motion";
import { LangProvider, useLang, translations } from "@/lib/lang-context";

function NewsContent() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { lang } = useLang();
  const tr = translations[lang];
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <main className="min-h-screen pb-16 pt-20" style={{ backgroundColor: "#f4f7f4" }}>
      <div className="mx-auto max-w-3xl px-4">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <h1 className="mb-2 text-3xl font-bold" style={{ color: "#1a3d2b" }}>
            {tr.newsTitle}
          </h1>
          <p style={{ color: "#6b8f78" }}>{tr.newsSub}</p>
        </motion.div>

        <div className="mb-8">
          <ProjectSelector
            projects={projects}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
          />
        </div>

        {selectedProject && <ProjectDetail project={selectedProject} />}
      </div>
    </main>
  );
}

export default function NewsPage() {
  return (
    <LangProvider>
      <NewsContent />
    </LangProvider>
  );
}
