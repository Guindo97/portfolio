// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ lang, toggleLang }) => {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Overlay pour mobile */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      <header className="bg-white shadow-md dark:bg-slate-900 relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">
          Guindo <span className="text-purple-600">Salifou</span>
        </h1>

        {/* Bouton burger mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg className="w-6 h-6 text-slate-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Menu navigation */}
        <nav className={`md:flex items-center space-x-6 ${open ? "block mobile-menu-enter" : "hidden"} absolute md:static bg-white/95 dark:bg-slate-900/95 mobile-menu left-0 top-16 w-full md:w-auto px-4 py-4 md:p-0 shadow-lg md:shadow-none z-50`}>
          <div className="space-y-2 md:space-y-0 md:flex md:items-center md:space-x-6">
            <Link 
              to="/" 
              className="block py-3 px-2 text-slate-800 dark:text-white hover:text-purple-600 transition-colors border-b border-slate-200 dark:border-slate-700 md:border-none"
              onClick={() => setOpen(false)}
            >
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <Link 
              to="/about" 
              className="block py-3 px-2 text-slate-800 dark:text-white hover:text-purple-600 transition-colors border-b border-slate-200 dark:border-slate-700 md:border-none"
              onClick={() => setOpen(false)}
            >
              {lang === "fr" ? "À propos" : "About"}
            </Link>
            <Link 
              to="/projects" 
              className="block py-3 px-2 text-slate-800 dark:text-white hover:text-purple-600 transition-colors border-b border-slate-200 dark:border-slate-700 md:border-none"
              onClick={() => setOpen(false)}
            >
              {lang === "fr" ? "Projets" : "Projects"}
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-2 text-slate-800 dark:text-white hover:text-purple-600 transition-colors border-b border-slate-200 dark:border-slate-700 md:border-none"
              onClick={() => setOpen(false)}
            >
              {lang === "fr" ? "Contact" : "Contact"}
            </Link>

            {/* Boutons de contrôle */}
            <div className="flex items-center justify-between pt-4 md:pt-0">
              {/* Bouton mode sombre */}
              <button
                onClick={toggleTheme}
                className="mobile-button flex items-center gap-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 w-full md:w-auto justify-center"
                aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
              >
                {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                <span className="md:hidden">{isDark ? "Mode clair" : "Mode sombre"}</span>
              </button>

              {/* Bouton langue */}
              <button
                onClick={toggleLang}
                className="mobile-button flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white px-4 py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 w-full md:w-auto justify-center"
              >
                <span>{lang === "fr" ? "EN" : "FR"}</span>
                <span className="md:hidden">{lang === "fr" ? "English" : "Français"}</span>
              </button>
            </div>
          </div>
        </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
