// src/App.jsx
import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";

// Lazy loading des pages pour le code splitting
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Contact = lazy(() => import("./pages/contact"));

import "./index.css"; // ✅ CSS global

function App() {
  const [lang, setLang] = useState(() => {
    // Vérifier si on est côté client
    if (typeof window === 'undefined') {
      return 'en'; // Langue par défaut : anglais
    }
    
    // Vérifier si l'utilisateur a une préférence sauvegardée
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      return savedLang;
    }
    
    // Langue par défaut : anglais
    return 'en';
  });

  const toggleLang = () => {
    setLang((prevLang) => {
      const newLang = prevLang === "fr" ? "en" : "fr";
      // Sauvegarder la préférence dans localStorage
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  // Composant de chargement pour Suspense
  const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          {lang === "fr" ? "Chargement..." : "Loading..."}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Header toggleLang={toggleLang} lang={lang} />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Hero lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/projects" element={<Projects lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
