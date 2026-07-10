import React, { useState } from "react";

function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Clients", href: "#clients" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="sticky top-0 left-0 z-50 flex w-full items-center bg-white/85 dark:bg-dark/85 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between py-4">
          <div className="px-2">
            <a href="#home" className="block text-xl font-bold tracking-tight text-primary transition-colors hover:opacity-80">
              M.Haidar<span className="text-dark dark:text-white">Shahab</span>
            </a>
          </div>

          <div className="flex items-center px-2">
            <button
              id="hamburger"
              onClick={toggleMenu}
              name="hamburger"
              type="button"
              className="block lg:hidden focus:outline-none p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger-line block h-0.5 w-6 bg-dark dark:bg-white my-1 transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`hamburger-line block h-0.5 w-6 bg-dark dark:bg-white my-1 transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`hamburger-line block h-0.5 w-6 bg-dark dark:bg-white my-1 transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>

            <div
              id="nav-menu"
              className={`absolute right-4 top-full ${
                isMenuOpen ? "block animate-fadeIn" : "hidden"
              } w-full max-w-[260px] rounded-xl bg-white dark:bg-slate-900 py-6 shadow-2xl border border-slate-200 dark:border-slate-700 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:py-0 lg:shadow-none lg:border-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex lg:items-center">
                {navLinks.map((link) => (
                  <li key={link.name} className="group">
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="mx-4 flex py-2 text-base font-semibold text-dark hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

                <li className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center pl-4 lg:mt-0 lg:pt-0 lg:border-none lg:pl-6">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Light</span>
                    <button
                      type="button"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-300 dark:bg-primary transition-colors duration-200 ease-in-out focus:outline-none"
                      aria-label="Toggle dark mode"
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          theme === "dark" ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></span>
                    </button>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Dark</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
