import React, { useState } from "react";
import { portfolioProjects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects (18+)");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    "All Projects (18+)",
    "Enterprise BUMN & Fintech Apps",
    "Personal AI R&D & Local Automation",
    "Electrical, Mechanical & Embedded Hardware",
    "Academic, Client & Web Practice SPAs"
  ];

  const filteredProjects =
    selectedCategory === "All Projects (18+)"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-32 pb-28 dark:bg-slate-850 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h4 className="mb-2 text-lg font-bold tracking-wider text-primary uppercase">
              Full-Spectrum Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-extrabold text-dark dark:text-white sm:text-4xl lg:text-5xl tracking-tight">
              18+ Verified Systems &amp; Web Practice Apps
            </h2>
            <p className="text-base font-medium text-secondary dark:text-slate-400 md:text-lg leading-relaxed">
              Complete digital representation of Slide Deck V4 across 4 specialized domains: Enterprise BUMN porting (`HCMS Pusri`, `CISEA PTBA`), AI/IoT hardware bridges, and reactive SPA prototypes.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-14 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 shadow-sm ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-lg border border-slate-200/70 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
            >
              <div>
                {/* Header Image or Architecture Gradient Banner */}
                <div className="relative overflow-hidden group">
                  {project.image ? (
                    <a
                      href={project.link || "#"}
                      target={project.link ? "_blank" : "_self"}
                      rel={project.link ? "noopener noreferrer" : ""}
                      onClick={(e) => !project.link && e.preventDefault()}
                      className="block h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <div className="flex h-52 w-full flex-col justify-between bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 text-white border-b border-slate-800 relative overflow-hidden">
                      <div className="absolute right-0 top-0 -mt-6 -mr-6 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"></div>
                      <div className="flex items-center justify-between gap-2 relative z-10">
                        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.badgeColor || "bg-primary text-white"}`}>
                          {project.category}
                        </span>
                        {project.link || project.liveUrl ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                            Live Portal
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                            🔒 {project.protectedUrlText?.split(" ")[0] || "Protected"}
                          </span>
                        )}
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          System Archetype
                        </p>
                        <p className="text-xs font-extrabold text-white truncate">
                          {project.archetype}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Category Pill for image cards */}
                  {project.image && (
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md ${project.badgeColor || "bg-primary text-white"}`}>
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <h4 className="mb-3 text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-wide">
                      {project.subtitle}
                    </h4>
                  )}
                  <p className="mb-5 text-sm font-medium text-secondary dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description || project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {(project.tags || project.techStack)?.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {(project.tags || project.techStack)?.length > 4 && (
                      <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-500">
                        +{(project.tags || project.techStack).length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                  >
                    <span>Architecture Breakdown</span>
                    <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {project.link || project.liveUrl ? (
                    <a
                      href={project.link || project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Visit Live App</span>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400" title={project.protectedUrlText}>
                      🔒 {project.protectedUrlText?.split(" ")[0] || "Internal"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

export default Portfolio;
