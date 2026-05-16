"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/mock-data";
import { ProjectSelector } from "@/components/news/project-selector";
import { ProjectDetail } from "@/components/news/project-detail";
import { fadeUp } from "@/lib/motion";

export default function NewsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="mb-2 text-3xl font-bold text-slate-900">სიახლეები</h1>
          <p className="text-slate-500">
            აირჩიეთ პროექტი, რომ ნახოთ მშენებლობის მდგომარეობა და განახლებები
          </p>
        </motion.div>

        <div className="mb-8">
          <ProjectSelector
            projects={projects}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
          />
        </div>

        {selectedProject && (
          <ProjectDetail project={selectedProject} />
        )}
      </div>
    </main>
  );
}
