import React from "react";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-slate-100 pt-36 pb-32 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold tracking-wider text-primary uppercase">
              Insights & Articles
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Recent Engineering Posts
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg leading-relaxed">
              Perspectives on clean software architecture, developer ergonomics, and continuous technical growth.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          {blogPosts.map((post) => (
            <div key={post.id} className="w-full px-4 lg:w-1/2 xl:w-1/3 mb-10 flex">
              <div className="flex flex-col flex-grow overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/60 dark:border-slate-700/60">
                <div className="relative overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-dark/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>
                
                <div className="py-8 px-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
                      {post.date}
                    </span>
                    <h3>
                      <a
                        href={post.link}
                        className="mb-3 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="mb-6 text-base font-medium text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <a
                      href={post.link}
                      className="inline-flex items-center rounded-lg bg-primary py-2.5 px-5 text-sm font-semibold text-white transition duration-300 hover:opacity-90 hover:shadow-md"
                    >
                      Read Full Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
};

export default Blog;
