// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ lang, toggleLang }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-slate-900">
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
        <nav className={`md:flex items-center space-x-6 ${open ? "block" : "hidden"} absolute md:static bg-white dark:bg-slate-900 left-0 top-16 w-full md:w-auto px-4 py-4 md:p-0 shadow-md md:shadow-none`}>
          <Link to="/" className="block py-2 text-slate-800 dark:text-white hover:text-purple-600">{lang === "fr" ? "Accueil" : "Home"}</Link>
          <Link to="/about" className="block py-2 text-slate-800 dark:text-white hover:text-purple-600">{lang === "fr" ? "À propos" : "About"}</Link>
          <Link to="/projects" className="block py-2 text-slate-800 dark:text-white hover:text-purple-600">{lang === "fr" ? "Projets" : "Projects"}</Link>
          <Link to="/contact" className="block py-2 text-slate-800 dark:text-white hover:text-purple-600">{lang === "fr" ? "Contact" : "Contact"}</Link>

          {/* Bouton langue */}
          <button
            onClick={toggleLang}
            className="mt-2 md:mt-0 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white px-3 py-1 rounded"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
