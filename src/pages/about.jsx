import React, { useEffect, useRef, useState } from "react";
import guindoPhoto from "/img/salifouguindo.jpg";

function About({ lang }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    
    // Forcer l'affichage immédiat sur mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setVisible(true);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Photo à gauche */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <img
              src={guindoPhoto}
              alt="Guindo Salifou"
              className="object-cover rounded-lg shadow-xl w-full max-w-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Texte à droite */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 animate-fade-in-up">
            {lang === "fr" ? "À propos de moi" : "About Me"}
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 animate-fade-in-up animation-delay-200">
            {lang === "fr"
              ? "Développeur d'applications mobiles avec 8 années de formation postsecondaire et une solide expérience acquise à travers de nombreux projets académiques et personnels. Curieux, rigoureux et analytique, je suis à la recherche d'une opportunité professionnelle où je pourrai contribuer à des projets concrets tout en continuant à développer mes compétences techniques et professionnelles."
              : "Mobile application development professional with 8 years of post-secondary education and solid experience through numerous academic and personal projects. Curious, detail-oriented, and analytical, I am seeking a professional opportunity where I can actively contribute to impactful projects while continuing to develop my technical and professional skills."}
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 animate-fade-in-up animation-delay-400">
            {lang === "fr"
              ? "Communicateur multilingue (français, anglais, russe) avec une forte capacité à soutenir les clients et à offrir des solutions centrées sur leurs besoins."
              : "Strong multilingual communicator (French, English, Russian) with proven ability to support clients and deliver exceptional customer-focused solutions."}
          </p>

          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              {lang === "fr" ? "Mon parcours" : "My Journey"}
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">2023 – 2025</span>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">
                    {lang === "fr"
                      ? "Diplôme d'études collégiales en programmation d'applications mobiles — CCNB, Canada"
                      : "College Diploma in Mobile Application Programming — CCNB, Canada"}
                  </p>
                </div>
              </div>
              
              <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="font-bold text-blue-600 dark:text-blue-400">2017 – 2022</span>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">
                    {lang === "fr"
                      ? "Baccalauréat en Génie informatique appliqué (non terminé, je n'ai pas pu obtenir de stage pour valider le bachelor) — Russie"
                      : "Bachelor's in Applied Computer Engineering (not completed, I couldn't secure an internship to validate the degree) — Russia"}
                  </p>
                </div>
              </div>
              
              <div className="relative pl-6 border-l-2 border-green-200 dark:border-green-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="font-bold text-green-600 dark:text-green-400">2015 – 2017</span>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">
                    {lang === "fr"
                      ? "BTS en Développement d'Applications — Côte d'Ivoire"
                      : "Associate Degree in Application Development — Ivory Coast"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
