import React from 'react';

const Hero = ({ lang }) => {
  return (
    <section className="bg-slate-50 min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
        <img
          src="/img/salif.jpg"
          alt="Salifou Guindo"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-slate-900">Guindo Salifou</h1>
          <h2 className="text-xl font-semibold text-slate-700 mt-2">
            {lang === "fr" ? "Développeur Frontend 🇨🇦" : "Frontend Developer 🇨🇦"}
          </h2>
          <p className="mt-4 text-slate-600">
            {lang === "fr"
              ? "Développeur passionné spécialisé en technologies JavaScript (React), Flutter... Diplômé du CCNB en 2025, je suis motivé à rejoindre une équipe dynamique pour relever de vrais défis techniques."
              : "Passionate developer specialized in JavaScript (React), Flutter... Graduated from CCNB in 2025, I’m eager to join a dynamic team and tackle real technical challenges."}
          </p>
          <a
            href="/img/Resume_SalifGCV.pdf"
            download
            className="mt-6 inline-block bg-purple-600 text-white font-medium px-6 py-2 rounded hover:bg-purple-700 transition"
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
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          {lang === "fr" ? "Comment puis-je vous aider ?" : "How can I help you?"}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          {lang === "fr"
            ? "Je conçois des expériences utilisateurs sur mesure, alignées avec vos objectifs."
            : "I craft tailored user experiences from scratch, aligned with your goals."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Development */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6">
            <img src="/img/webdev.png" alt="Web Development" className="w-20 h-20 mx-auto mb-4" />
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
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6">
            <img src="/img/api.png" alt="API Development" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              {lang === "fr" ? "Développement d'API REST" : "REST API Development"}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {lang === "fr"
                ? "Création d’API REST robustes avec Node.js, architecture propre et modulaire."
                : "Creating robust REST APIs using Node.js with a clean and modular architecture."}
            </p>
          </div>

          {/* UI/UX */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6">
            <img src="/img/design.png" alt="UI/UX Design" className="w-20 h-20 mx-auto mb-4" />
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
