// src/pages/projects.jsx 
import React, { useEffect, useRef, useState } from "react";

function Projects({ lang }) {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, index]);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    // Forcer l'affichage immédiat sur mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setVisibleProjects(projectRefs.current.map((_, index) => index));
    }

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  const projects = [
    

    {
      title: "FoodiFly",
      description: lang === "fr"
        ? "Application de commande mobile pour food trucks."
        : "Mobile ordering app for food trucks.",
      github: "https://github.com/Guindo97/foodifly",
      images: [
        "/img/foodi1.png", "/img/foodi2.png", "/img/foodi3.png", "/img/foodi4.png", "/img/foodi5.png",
        "/img/foodi6.png", "/img/foodi7.png", "/img/foodi8.png", "/img/foodi9.png", "/img/foodi10.png"
      ]
    },

    {
    title: lang === "fr" ? "Communauté Ivoiro-Canadienne" : "Ivoiro-Canadian Community",
    description: lang === "fr"
      ? "Site web officiel de la communauté ivoirienne à Edmonton. Permet aux membres d'accéder aux services, événements, et de contacter l'association."
      : "Official website for the Ivoiro-Canadian community in Edmonton. Allows members to access services, events, and contact the association.",
    github: "https://github.com/Guindo97/cie",
    live: "https://cie-nine.vercel.app/",
    images: Array.from({ length: 15 }, (_, i) => `/img/cie${i + 1}.png`)

  },

    {
      title: lang === "fr" ? "Jeu Snake" : "Snake Game",
      description: lang === "fr"
        ? "Jeu Snake en Java avec interface graphique."
        : "Snake game in Java with GUI.",
      github: "https://github.com/Guindo97/snakegame",
      images: ["/img/snake1.png", "/img/snake2.png", "/img/snake3.png", "/img/snake4.png"]
    },
    {
      title: lang === "fr" ? "Calculatrice iPhone" : "iPhone Calculator",
      description: lang === "fr"
        ? "Reproduction de la calculatrice iOS avec Flutter."
        : "iOS calculator clone with Flutter.",
      github: "https://github.com/Guindo97/calculatrice",
      images: ["/img/calculatrice1.png", "/img/calculatrice2.png"]
    },
    {
      title: "Tika Harvest",
      description: lang === "fr"
        ? "Tika Harvest est une plateforme développée en Vue.js et Next.js pour permettre aux agriculteurs de mon pays de s'envoyer des messages directement sur la plateforme et aussi de marchander."
        : "Tika Harvest is a platform built with Vue.js and Next.js that allows farmers in my country to message each other directly and negotiate deals.",
      live: "https://sms.tikaharvest.com/login",
      github: "https://github.com/Guindo97/sms-sender-font-main.git",
      images: Array.from({ length: 22 }, (_, i) => `/img/tika${i + 1}.png`)
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 animate-fade-in-up">
          {lang === "fr" ? "📁 Mes projets" : "📁 My Projects"}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10 animate-fade-in-up animation-delay-200">
          {lang === "fr"
            ? "Voici quelques projets réalisés récemment."
            : "Here are some recent projects I've built."}
        </p>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`project-card bg-white dark:bg-slate-800 shadow-md rounded-xl p-3 sm:p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 text-left group ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Carrousel d'images visibles entièrement */}
              <div className="overflow-x-auto rounded-md mb-3 sm:mb-4 bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-2 sm:gap-3 w-max animate-scroll py-2">
                  {[...project.images, ...project.images].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} image ${i}`}
                      className="project-image h-32 sm:h-40 max-w-none object-contain rounded-lg bg-white dark:bg-slate-600 shadow-sm hover:shadow-md transition-shadow duration-300"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

              {/* Boutons d'action */}
              <div className="project-buttons flex flex-wrap gap-2 sm:gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 text-xs sm:text-sm font-medium min-h-[44px] touch-manipulation"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl min-h-[44px] touch-manipulation"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {lang === "fr" ? "Voir le projet" : "View Project"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
