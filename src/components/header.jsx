// src/components/header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleLang, lang }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Nom à gauche */}
      <h2 className="text-xl font-bold text-slate-800">Guindo Salifou</h2>

      {/* Menu à droite */}
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-4 text-slate-700 font-medium">
          <Link to="/" className="hover:text-purple-600 transition">
            {lang === "fr" ? "Accueil" : "Home"}
          </Link>
          <Link to="/about" className="hover:text-purple-600 transition">
            {lang === "fr" ? "À propos" : "About"}
          </Link>
          <Link to="/projects" className="hover:text-purple-600 transition">
            {lang === "fr" ? "Projets" : "Projects"}
          </Link>
          <Link to="/contact" className="hover:text-purple-600 transition">
            {lang === "fr" ? "Contact" : "Contact"}
          </Link>
        </nav>

        {/* Bouton langue */}
        <button
          onClick={toggleLang}
          className="text-sm text-slate-700 border px-3 py-1 rounded hover:bg-slate-100 transition"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </header>
  );
}

export default Header;
