import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center px-4 text-center transition-colors duration-300">
      {/* Contenu principal */}
      <div 
        ref={heroRef}
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 xl:gap-24 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative group">
          {/* Halo effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-2xl scale-125 group-hover:opacity-30 transition-opacity duration-500 md:block"></div>
          {/* Halo effect mobile */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-15 blur-xl scale-110 md:hidden"></div>
          
          <img
            src="/img/mrsalifg.jpg"
            alt="Salifou Guindo"
            className="hero-photo hero-photo-pulse w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full mb-6 object-cover object-top transition-all duration-500 group-hover:scale-105 border-4 border-white dark:border-slate-800 relative z-10"
          />
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
          {/* Effet de brillance */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white animate-fade-in-up">
            Guindo Salifou
          </h1>
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mt-2 animate-fade-in-up animation-delay-200">
            {lang === "fr" ? "Développeur Frontend 🇨🇦" : "Frontend Developer 🇨🇦"}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 animate-fade-in-up animation-delay-400">
            {lang === "fr"
              ? "Développeur passionné spécialisé en technologies JavaScript (React), Flutter... Diplômé du CCNB en 2025, je suis motivé à rejoindre une équipe dynamique pour relever de vrais défis techniques."
              : "Passionate developer specialized in JavaScript (React), Flutter... Graduated from CCNB in 2025, I'm eager to join a dynamic team and tackle real technical challenges."}
          </p>
          <a
            href="/img/Resume_SalifGCV.pdf"
            download
            className="mt-6 inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-600"
          >
            {lang === "fr" ? "Télécharger mon CV" : "Download CV"}
          </a>
        </div>
      </div>

      {/* Logos en défilement horizontal */}
      <div className="mt-12 scroll-logo-container">
        <div className="scroll-logo-track">
          <img src="/img/react.png" alt="React" className="h-8" />
          <img src="/img/javascript.png" alt="JavaScript" className="h-8" />
          <img src="/img/flutter.png" alt="Flutter" className="h-8" />
          <img src="/img/tailwind.png" alt="Tailwind" className="h-8" />
          <img src="/img/typescript.png" alt="TypeScript" className="h-8" />
          <img src="/img/github.png" alt="GitHub" className="h-8" />
          <img src="/img/figma.png" alt="Figma" className="h-8" />
          <img src="/img/html.png" alt="HTML" className="h-8" />
          <img src="/img/css.png" alt="CSS" className="h-8" />
          <img src="/img/java.png" alt="Java" className="h-8" />
          <img src="/img/NuxtJS.png" alt="Nust" className="h-8" />
          <img src="/img/Nextjs.jpeg" alt="Next" className="h-8" />
          <img src="/img/Vuejs.png" alt="Vue" className="h-8" />
          {/* Dupliqué pour boucle */}
          <img src="/img/react.png" alt="React" className="h-8" />
          <img src="/img/javascript.png" alt="JavaScript" className="h-8" />
          <img src="/img/flutter.png" alt="Flutter" className="h-8" />
          <img src="/img/tailwind.png" alt="Tailwind" className="h-8" />
          <img src="/img/typescript.png" alt="TypeScript" className="h-8" />
          <img src="/img/github.png" alt="GitHub" className="h-8" />
          <img src="/img/figma.png" alt="Figma" className="h-8" />
          <img src="/img/html.png" alt="HTML" className="h-8" />
          <img src="/img/css.png" alt="CSS" className="h-8" />
          <img src="/img/java.png" alt="Java" className="h-8" />
          <img src="/img/NuxtJS.png" alt="Nust" className="h-8" />
          <img src="/img/Nextjs.jpeg" alt="Next" className="h-8" />
          <img src="/img/Vuejs.png" alt="Vue" className="h-8" />
        </div>
      </div>

      {/* SECTION "How can I help you?" */}
      <div className="mt-24 text-center max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 animate-fade-in-up">
          {lang === "fr" ? "Comment puis-je vous aider ?" : "How can I help you?"}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10 animate-fade-in-up animation-delay-200">
          {lang === "fr"
            ? "Je conçois des expériences utilisateurs sur mesure, alignées avec vos objectifs."
            : "I craft tailored user experiences from scratch, aligned with your goals."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Development */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up animation-delay-400">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <img src="/img/webdev.png" alt="Web Development" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              {lang === "fr" ? "Développement Web" : "Web Development"}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {lang === "fr"
                ? "Création de sites modernes et performants avec React, totalement responsives."
                : "Building modern and high-performance websites with React, fully responsive."}
            </p>
          </div>

          {/* REST API */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up animation-delay-600">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <img src="/img/api.png" alt="API Development" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              {lang === "fr" ? "Développement d'API REST" : "REST API Development"}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {lang === "fr"
                ? "Création d'API REST robustes avec Node.js, architecture propre et modulaire."
                : "Creating robust REST APIs using Node.js with a clean and modular architecture."}
            </p>
          </div>

          {/* UI/UX */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up animation-delay-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <img src="/img/design.png" alt="UI/UX Design" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              UI/UX Design
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {lang === "fr"
                ? "Conception de maquettes interactives et prototypage avec Figma."
                : "Designing interactive mockups and prototyping user interfaces using Figma."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
