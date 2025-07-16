import React, { useEffect, useRef, useState } from "react";
import guindoPhoto from "/img/salifouguindo.jpg";

function About({ lang }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Photo à gauche */}
        <div className="flex justify-center md:justify-end">
          <img
            src={guindoPhoto}
            alt="Guindo Salifou"
            className=" object-cover shadow-xl"
          />
        </div>

        {/* Texte à droite */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {lang === "fr" ? "À propos de moi" : "About Me"}
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            {lang === "fr"
              ? "Je suis Salifou Guindo, développeur passionné avec un parcours international entre la Côte d'Ivoire, la Russie et le Canada. Curieux, rigoureux et motivé, je conçois des applications mobiles et web avec passion."
              : "I'm Salifou Guindo, a passionate developer with an international journey between Ivory Coast, Russia, and Canada. Curious, rigorous, and motivated, I build mobile and web applications with dedication."}
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            {lang === "fr" ? "🎓 Mon parcours" : "🎓 My Journey"}
          </h3>
          <ul className="space-y-4 text-slate-700">
            <li>
              <span className="font-bold">2023 – 2025</span><br />
              {lang === "fr"
                ? "Diplôme d’études collégiales en programmation d’applications mobiles — CCNB, Canada"
                : "College Diploma in Mobile Application Programming — CCNB, Canada"}
            </li>
            <li>
              <span className="font-bold">2017 – 2022</span><br />
              {lang === "fr"
                ? "Baccalauréat en Génie informatique appliqué (non terminé, je n’ai pas pu obtenir de stage pour valider le bachelor) — Russie"
                : "Bachelor’s in Applied Computer Engineering (not completed, I couldn’t secure an internship to validate the degree) — Russia"}
            </li>
            <li>
              <span className="font-bold">2015 – 2017</span><br />
              {lang === "fr"
                ? "BTS en Développement d’Applications — Côte d’Ivoire"
                : "BTS in Application Development — Ivory Coast"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
