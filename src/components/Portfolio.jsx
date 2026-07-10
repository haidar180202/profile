import React from "react";
import { portfolioProjects } from "../data/portfolioData";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-36 pb-24 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold tracking-wider text-primary uppercase">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Web Practice Projects
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg leading-relaxed">
              Full-stack web applications built with modern component architectures, reusable state concepts in React, and clean RESTful API integrations.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center xl:mx-auto xl:w-10/12">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="mb-12 p-4 md:w-1/2 transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300">
                <div className="overflow-hidden relative group">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 mb-3 text-xl font-bold text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                    <p className="text-base font-medium text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                    >
                      View Live App
                      <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
