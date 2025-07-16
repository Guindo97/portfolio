// src/pages/projects.jsx 
import React from "react";

function Projects({ lang }) {
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
      title: "Snake Game",
      description: lang === "fr"
        ? "Jeu Snake en Java avec interface graphique."
        : "Snake game in Java with GUI.",
      github: "https://github.com/Guindo97/snakegame",
      images: ["/img/snake1.png", "/img/snake2.png", "/img/snake3.png", "/img/snake4.png"]
    },
    {
      title: "Calculatrice iPhone",
      description: lang === "fr"
        ? "Reproduction de la calculatrice iOS avec Flutter."
        : "iOS calculator clone with Flutter.",
      github: "https://github.com/Guindo97/calculatrice",
      images: ["/img/calculatrice1.png", "/img/calculatrice2.png"]
    },
    {
      title: "Tika Harvest",
      description: lang === "fr"
        ? "Tika Harvest est une plateforme développée en Vue.js et Next.js pour permettre aux agriculteurs de mon pays de s’envoyer des messages directement sur la plateforme et aussi de marchander."
        : "Tika Harvest is a platform built with Vue.js and Next.js that allows farmers in my country to message each other directly and negotiate deals.",
      live: "https://sms.tikaharvest.com/login",
      github: "https://github.com/Guindo97/sms-sender-font",
      images: Array.from({ length: 22 }, (_, i) => `/img/tika${i + 1}.png`)
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          {lang === "fr" ? "📁 Mes projets" : "📁 My Projects"}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          {lang === "fr"
            ? "Voici quelques projets réalisés récemment."
            : "Here are some recent projects I've built."}
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-4 hover:shadow-xl transition text-left"
            >
              {/* Carrousel d’images visibles entièrement */}
              <div className="overflow-x-auto rounded-md mb-4 bg-white flex items-center justify-center">
                <div className="flex gap-3 w-max animate-scroll py-2">
                  {[...project.images, ...project.images].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} image ${i}`}
                      className="h-40 max-w-none object-contain rounded-lg bg-slate-100 shadow"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>

              {/* Bouton : GitHub ou Voir le projet */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  GitHub ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  {lang === "fr" ? "Voir le projet ↗" : "View Project ↗"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
