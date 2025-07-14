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

          {/* Duplique les logos pour effet infini */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
