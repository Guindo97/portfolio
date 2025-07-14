import React from "react";

function Projects({ lang }) {
  const projects = [
    {
      title: "FoodiFly",
      description: lang === "fr"
        ? "Application de commande mobile pour food trucks."
        : "Mobile ordering app for food trucks.",
      github: "https://github.com/Guindo97/foodifly",
    },
    {
      title: "Snake Game",
      description: lang === "fr"
        ? "Jeu Snake en Java avec interface graphique."
        : "Snake game in Java with GUI.",
      github: "https://github.com/Guindo97/snakegame",
    },
    {
      title: "Calculatrice iPhone",
      description: lang === "fr"
        ? "Reproduction de la calculatrice iOS avec Flutter."
        : "iOS calculator clone with Flutter.",
      github: "https://github.com/Guindo97/calculatrice",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          {lang === "fr" ? "📁 Mes projets" : "📁 My Projects"}
        </h2>
        <p className="text-slate-600 mb-10">
          {lang === "fr"
            ? "Voici quelques projets réalisés récemment."
            : "Here are some recent projects I've built."}
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition text-left"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
