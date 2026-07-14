import React from "react";
import imageProfile from "../assets/images/pasfoto.png";

const Home = () => {
  return (
    <section id="home" className="pt-36 pb-20 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full self-center px-4 lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-base font-bold uppercase tracking-wider text-primary md:text-xl">
              Hello Everyone 👋, my name is
              <span className="mt-2 block text-4xl font-extrabold text-dark dark:text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                Muhammad Haidar Shahab
              </span>
            </h1>
            <h2 className="mt-3 mb-4 text-base font-bold text-secondary dark:text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              <span className="text-dark dark:text-white font-extrabold">Bachelor of Electrical Engineering (`S1 Teknik Elektro | GPA &gt; 3.5`)</span> |{" "}
              <span className="text-primary dark:text-blue-400">Lead Project Management &amp; Senior Systems Analyst (`&plusmn; 5 Years BUMN Energy &amp; Operations Track Record`)</span>
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary dark:text-slate-400 text-lg max-w-xl">
              A hybrid engineering talent combining a formal degree in <span className="font-bold text-dark dark:text-white">Electrical Engineering (S1 Teknik Elektro, GPA &gt; 3.5)</span> with self-taught, industry-proven mastery in <span className="font-bold text-dark dark:text-white">Operations Systems Analysis, Real-Time Dashboard Architecture, and BUMN Project Management</span>. Proven track record consolidating 100+ operational/mining modules for <span className="font-bold text-dark dark:text-white">PT Bukit Asam Tbk (`CISEA v2.0.0 Super-App`)</span> in South Sumatra, alongside industrial PLC safety interlocks (`PT Pupuk Sriwidjaja`). Backed by verified <span className="font-bold text-dark dark:text-white">Google Project Management</span> and <span className="font-bold text-dark dark:text-white">Kemnaker RI Scrum Master</span> certifications.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="rounded-full bg-primary py-3.5 px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="rounded-full border-2 border-slate-300 dark:border-slate-700 py-3.5 px-8 text-base font-bold text-dark dark:text-white transition-all duration-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
              >
                Explore Projects
              </a>
            </div>
          </div>

          <div className="w-full self-center px-4 lg:w-1/2 -translate-y-2 lg:-translate-y-4">
            <div className="relative mt-10 lg:mt-0 mx-auto max-w-md">
              <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent p-3 flex items-center justify-center shadow-xl shadow-primary/5">
                <img
                  src={imageProfile}
                  alt="Muhammad Haidar Shahab"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="max-w-full mx-auto h-[400px] object-contain object-center drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  width={400}
                />
              </div>
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 scale-125 dark:opacity-80">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <path
                    fill="#3b82f6"
                    fillOpacity="0.15"
                    d="M48.2,-64.7C55.3,-51.6,48.8,-29.5,45.2,-13.4C41.6,2.8,40.9,13,36.3,21C31.7,29,23.2,34.8,13,40.6C2.8,46.4,-9.2,52.3,-24.6,53C-40.1,53.8,-59,49.4,-65.4,37.9C-71.9,26.5,-65.9,7.9,-59.2,-7C-52.5,-22,-45,-33.4,-35,-46C-25,-58.7,-12.5,-72.6,4,-77.4C20.6,-82.2,41.2,-77.9,48.2,-64.7Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
