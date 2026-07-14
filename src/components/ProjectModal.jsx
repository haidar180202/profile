import React, { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm transition-opacity animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
        <button
          onClick={onClose}
          type="button"
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4 flex items-center gap-3 flex-wrap">
          <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.badgeColor}`}>
            {project.category}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {project.role}
          </span>
        </div>

        <h3 className="mb-1 text-2xl font-extrabold text-dark dark:text-white md:text-3xl">
          {project.title}
        </h3>
        <h4 className="mb-4 text-base font-semibold text-primary dark:text-sky-400">
          {project.subtitle}
        </h4>

        <div className="mb-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200/60 dark:border-slate-700/60">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            System Architecture & Archetype
          </p>
          <p className="text-sm font-bold text-dark dark:text-slate-200">
            {project.archetype}
          </p>
          <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            ⚡ Verified Performance Metrics: {project.metrics}
          </p>
        </div>

        <div className="mb-6">
          <h5 className="mb-2 text-sm font-bold uppercase tracking-wider text-dark dark:text-white">
            Executive Summary
          </h5>
          <p className="text-sm md:text-base font-medium leading-relaxed text-secondary dark:text-slate-300">
            {project.summary}
          </p>
        </div>

        <div className="mb-6">
          <h5 className="mb-3 text-sm font-bold uppercase tracking-wider text-dark dark:text-white">
            Key Engineering Highlights & Impact
          </h5>
          <ul className="space-y-2.5">
            {project.highlights.map((item, index) => (
              <li key={index} className="flex items-start text-sm md:text-base font-medium text-secondary dark:text-slate-300">
                <span className="mr-2.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h5 className="mb-3 text-sm font-bold uppercase tracking-wider text-dark dark:text-white">
            Core Technology Stack & Ecosystem
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary py-3 px-6 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              <span>Visit Live Portal (`{project.liveUrl.replace(/^https?:\/\//, "")}`)</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 py-3 px-6 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              🔒 {project.protectedUrlText || "Internal / Enterprise Protected Portal"}
            </span>
          )}

          <button
            onClick={onClose}
            type="button"
            className="rounded-xl border border-slate-300 dark:border-slate-700 py-3 px-6 text-sm font-bold text-dark dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
