// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import "./index.css"; // ✅ CSS global

function App() {
  const [lang, setLang] = useState("fr");
  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  return (
    <>
      <Header toggleLang={toggleLang} lang={lang} />
      <Routes>
        <Route path="/" element={<Hero lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/projects" element={<Projects lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
      </Routes>
    </>
  );
}

export default App;
