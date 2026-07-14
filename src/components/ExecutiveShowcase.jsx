import React, { useState } from "react";
import executiveProjectsData from "../data/executiveProjectsData";
import ProjectModal from "./ProjectModal";

const ExecutiveShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Enterprise BUMN & AI", "Academic & Leadership"];

  const filteredProjects =
    selectedCategory === "All"
      ? executiveProjectsData
      : executiveProjectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="enterprise-track-record" className="pt-32 pb-28 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h4 className="mb-2 text-lg font-bold uppercase tracking-wider text-primary">
            Executive Track Record
          </h4>
          <h2 className="mb-4 text-3xl font-extrabold text-dark dark:text-white sm:text-4xl lg:text-5xl tracking-tight">
            Enterprise BUMN &amp; AI Leadership
          </h2>
          <p className="text-base font-medium text-secondary dark:text-slate-400 md:text-lg leading-relaxed">
            Delivering high-throughput Super-Apps, real-time IoT safety telemetry, and zero-trust corporate portals across Indonesia&apos;s leading BUMN and financial ecosystems.
          </p>
        </div>

        {/* Executive Deck V4 Download Hub Banner */}
        <div className="mb-16 mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 md:p-10 text-white shadow-2xl border border-blue-500/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-blue-500/20 border border-blue-400/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                ⭐ Official Presentation V5 Master (Dev Lead Edition)
              </span>
              <h3 className="text-2xl font-extrabold sm:text-3xl tracking-tight mb-3">
                Project Development &amp; Architecture Portfolio V5 (`Master Deck`)
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed">
                Featuring our mathematical <strong className="text-white">True Widescreen (`13.333 x 7.50` in / `960 x 540 pt`) geometry</strong>. Comprehensive breakdowns of IFG Life Corporate LifeHub (`Quarkus + BPMN`), CISEA Facelift, and Investree Fintech portals under pure <strong className="text-white">Dev Lead</strong> execution.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <a
                href={`${process.env.PUBLIC_URL}/documents/Project_Development_Portfolio_Haidar_v5_Master.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download PDF (`720 KB`)</span>
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/documents/Project_Development_Portfolio_Haidar_v5_Master.pptx`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-slate-600 bg-slate-800/80 hover:border-blue-400 hover:bg-slate-800 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
              >
                <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>PPTX Editable (`825 KB`)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 shadow-sm ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-800/90 p-7 shadow-lg border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  {project.liveUrl ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Live Portal
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      🔒 {project.protectedUrlText?.split(" ")[0] || "Protected Portal"}
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <h4 className="mb-4 text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-wide">
                  {project.subtitle}
                </h4>
                <p className="mb-6 text-sm font-medium text-secondary dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                <div className="mb-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 p-3.5 border border-slate-200/50 dark:border-slate-800/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    System Archetype
                  </p>
                  <p className="text-xs font-bold text-dark dark:text-slate-200 truncate">
                    {project.archetype}
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 dark:bg-slate-900 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="rounded-md bg-slate-100 dark:bg-slate-900 px-2 py-1 text-xs font-semibold text-slate-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/60 pt-5">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                  >
                    <span>Architecture Breakdown</span>
                    <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Breakdown Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default ExecutiveShowcase;
