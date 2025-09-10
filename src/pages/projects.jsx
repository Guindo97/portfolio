// src/pages/projects.jsx 
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";

function Projects({ lang }) {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [particles, setParticles] = useState([]);
  const projectRefs = useRef([]);

  // Génération de particules flottantes (désactivée sur mobile)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Pas de particules sur mobile pour les performances
    
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        delay: Math.random() * 8
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 10000);
    return () => clearInterval(interval);
  }, []);

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

  // Statistiques des projets
  const projectStats = {
    total: 6,
    technologies: 4,
    completed: 3,
    github: 6
  };

  const projectCategories = [
    {
      id: "react",
      title: lang === "fr" ? "React & Tailwind CSS" : "React & Tailwind CSS",
      description: lang === "fr" 
        ? "Applications web modernes développées avec React et Tailwind CSS"
        : "Modern web applications built with React and Tailwind CSS",
      projects: [
        {
          title: "Andrew's Lobsters",
          description: lang === "fr"
            ? "Site web moderne pour Andrew's Lobsters, une entreprise familiale de homards frais à Bathurst, NB. Application React multilingue avec menu interactif, galerie photo, système de panier et formulaire de contact."
            : "Modern website for Andrew's Lobsters, a family business of fresh lobsters in Bathurst, NB. Multilingual React application with interactive menu, photo gallery, cart system and contact form.",
          github: "https://github.com/Guindo97/andrewlobsters",
          live: "https://andrewlobsters.vercel.app",
          images: Array.from({ length: 51 }, (_, i) => `/img/IMG-20250910-WA${String(i + 5).padStart(4, '0')}.jpg`)
        },
        {
          title: lang === "fr" ? "Communauté Ivoiro-Canadienne" : "Ivoiro-Canadian Community",
          description: lang === "fr"
            ? "Site web officiel de la communauté ivoirienne à Edmonton. Permet aux membres d'accéder aux services, événements, et de contacter l'association."
            : "Official website for the Ivoiro-Canadian community in Edmonton. Allows members to access services, events, and contact the association.",
          github: "https://github.com/Guindo97/cie",
          live: "https://cie-nine.vercel.app/",
          images: Array.from({ length: 15 }, (_, i) => `/img/cie${i + 1}.png`)
        }
      ]
    },
    {
      id: "vue",
      title: lang === "fr" ? "Vue.js & Next.js" : "Vue.js & Next.js",
      description: lang === "fr"
        ? "Plateformes web développées avec Vue.js et Next.js"
        : "Web platforms built with Vue.js and Next.js",
      projects: [
        {
          title: "Tika Harvest",
          description: lang === "fr"
            ? "Tika Harvest est une plateforme développée en Vue.js et Next.js pour permettre aux agriculteurs de mon pays de s'envoyer des messages directement sur la plateforme et aussi de marchander."
            : "Tika Harvest is a platform built with Vue.js and Next.js that allows farmers in my country to message each other directly and negotiate deals.",
          live: "https://sms.tikaharvest.com/login",
          github: "https://github.com/Guindo97/sms-sender-font-main.git",
          images: Array.from({ length: 22 }, (_, i) => `/img/tika${i + 1}.png`)
        }
      ]
    },
    {
      id: "flutter",
      title: lang === "fr" ? "Flutter & Firebase" : "Flutter & Firebase",
      description: lang === "fr"
        ? "Applications mobiles développées avec Flutter et Firebase"
        : "Mobile applications built with Flutter and Firebase",
      projects: [
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
          title: lang === "fr" ? "Calculatrice iPhone" : "iPhone Calculator",
          description: lang === "fr"
            ? "Reproduction de la calculatrice iOS avec Flutter."
            : "iOS calculator clone with Flutter.",
          github: "https://github.com/Guindo97/calculatrice",
          images: ["/img/calculatrice1.png", "/img/calculatrice2.png"]
        }
      ]
    },
    {
      id: "java",
      title: lang === "fr" ? "Java & Eclipse" : "Java & Eclipse",
      description: lang === "fr"
        ? "Applications desktop développées en Java avec Eclipse"
        : "Desktop applications built with Java and Eclipse",
      projects: [
        {
          title: lang === "fr" ? "Jeu Snake" : "Snake Game",
          description: lang === "fr"
            ? "Jeu Snake en Java avec interface graphique."
            : "Snake game in Java with GUI.",
          github: "https://github.com/Guindo97/snakegame",
          images: ["/img/snake1.png", "/img/snake2.png", "/img/snake3.png", "/img/snake4.png"]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Particules flottantes (désactivées sur mobile) */}
      {typeof window !== 'undefined' && window.innerWidth >= 768 && particles.map(particle => (
        <div
          key={particle.id}
          className="particle animate-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${8 + particle.speed}s`
          }}
        />
      ))}

      {/* Background decorations améliorées */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-15 animate-parallax"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-fade-in-up animate-gradient">
            {lang === "fr" ? "Mes Projets" : "My Projects"}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {lang === "fr"
              ? "Découvrez mes réalisations organisées par technologies. Chaque projet reflète ma passion pour l'innovation et l'excellence technique."
              : "Discover my work organized by technologies. Each project reflects my passion for innovation and technical excellence."}
          </p>
        </div>

        {/* Statistiques des projets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="stat-card rounded-xl p-4 animate-fade-in-up animation-delay-400">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{projectStats.total}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{lang === "fr" ? "Projets" : "Projects"}</div>
          </div>
          <div className="stat-card rounded-xl p-4 animate-fade-in-up animation-delay-500">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{projectStats.technologies}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{lang === "fr" ? "Technologies" : "Technologies"}</div>
          </div>
          <div className="stat-card rounded-xl p-4 animate-fade-in-up animation-delay-600">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{projectStats.completed}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{lang === "fr" ? "En ligne" : "Live"}</div>
          </div>
          <div className="stat-card rounded-xl p-4 animate-fade-in-up animation-delay-700">
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{projectStats.github}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">GitHub</div>
          </div>
        </div>

        {/* Filtres et mode d'affichage */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex gap-2">
            {["all", "react", "vue", "flutter", "java"].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`filter-button px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/50"
                }`}
                data-tooltip={lang === "fr" ? 
                  filter === "all" ? "Tous les projets" :
                  filter === "react" ? "React & Tailwind" :
                  filter === "vue" ? "Vue.js & Next.js" :
                  filter === "flutter" ? "Flutter & Firebase" :
                  "Java & Eclipse" :
                  filter === "all" ? "All projects" :
                  filter === "react" ? "React & Tailwind" :
                  filter === "vue" ? "Vue.js & Next.js" :
                  filter === "flutter" ? "Flutter & Firebase" :
                  "Java & Eclipse"
                }
              >
                <span className="tooltip">
                  {filter === "all" ? (lang === "fr" ? "Tous" : "All") :
                   filter === "react" ? "React" :
                   filter === "vue" ? "Vue" :
                   filter === "flutter" ? "Flutter" : "Java"}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`filter-button p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/50"
              }`}
              data-tooltip={lang === "fr" ? "Vue grille" : "Grid view"}
            >
              <span className="tooltip">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`filter-button p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/50"
              }`}
              data-tooltip={lang === "fr" ? "Vue liste" : "List view"}
            >
              <span className="tooltip">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Affichage par catégories avec filtres */}
        {projectCategories
          .filter(category => selectedFilter === "all" || category.id === selectedFilter)
          .map((category, categoryIndex) => (
          <div key={category.id} className="mb-20 relative">
            {/* Indicateur de progression amélioré */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full opacity-60 animate-glow"></div>
            <div className="absolute -left-2 top-8 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
            
            {/* En-tête de catégorie avec glassmorphism */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-6 p-6 glass-card rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group card-3d animate-card-float">
                {category.id === "react" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src="/img/react.png" alt="React" className="w-10 h-10" />
                  </div>
                )}
                {category.id === "vue" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src="/img/Vuejs.png" alt="Vue.js" className="w-10 h-10" />
                  </div>
                )}
                {category.id === "flutter" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src="/img/flutter.png" alt="Flutter" className="w-10 h-10" />
                  </div>
                )}
                {category.id === "java" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src="/img/java.png" alt="Java" className="w-10 h-10" />
                  </div>
                )}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full">
                        {category.projects.length} {lang === "fr" ? "projet" : "project"}{category.projects.length > 1 ? (lang === "fr" ? "s" : "s") : ""}
                      </span>
                      <div className="skill-badge">
                        {category.id === "react" ? "React" :
                         category.id === "vue" ? "Vue.js" :
                         category.id === "flutter" ? "Flutter" : "Java"}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.id === "react" && ["React", "JSX", "Tailwind CSS", "Vite"].map(skill => (
                      <span key={skill} className="skill-badge text-xs">{skill}</span>
                    ))}
                    {category.id === "vue" && ["Vue.js", "Next.js", "JavaScript"].map(skill => (
                      <span key={skill} className="skill-badge text-xs">{skill}</span>
                    ))}
                    {category.id === "flutter" && ["Flutter", "Dart", "Firebase"].map(skill => (
                      <span key={skill} className="skill-badge text-xs">{skill}</span>
                    ))}
                    {category.id === "java" && ["Java", "Eclipse", "Swing"].map(skill => (
                      <span key={skill} className="skill-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projets de la catégorie avec mode d'affichage */}
            <div className={`gap-4 sm:gap-6 ${
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "flex flex-col space-y-6"
            }`}>
              {category.projects.map((project, projectIndex) => {
                const globalIndex = projectIndex + categoryIndex * 10; // Index global approximatif
                return (
                  <div
                    key={`${category.id}-${projectIndex}`}
                    ref={el => projectRefs.current[globalIndex] = el}
                    className={`project-card glass-card rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 text-left group card-3d animate-card-float ${
                      viewMode === "list" ? "flex flex-row items-center space-x-6" : ""
                    } ${
                      visibleProjects.includes(globalIndex) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${projectIndex * 150}ms` }}
                  >
                    {/* Carrousel d'images avec design amélioré */}
                    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 group-hover:from-purple-50 dark:group-hover:from-purple-900/20 group-hover:to-blue-50 dark:group-hover:to-blue-900/20 transition-all duration-500 ${
                      viewMode === "list" ? "w-1/3 mb-0" : "mb-6"
                    }`}>
                      <div className="overflow-x-auto scrollbar-hide">
                        <div className={`flex gap-3 w-max py-4 ${project.images.length > 10 ? 'animate-scroll-slow' : 'animate-scroll'}`}>
                          {[...project.images, ...project.images].map((img, i) => (
                            <div key={i} className="relative group/image project-image-container">
                              <img
                                src={img}
                                alt={`${project.title} image ${i}`}
                                className={`${project.images.length > 10 ? 'project-image-large' : 'project-image'} shadow-lg hover:shadow-xl transition-all duration-300 group-hover/image:scale-105`}
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Indicateur de défilement */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-200"></div>
                        <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse animation-delay-400"></div>
                      </div>
                    </div>

                    {/* Contenu du projet */}
                    <div className={`${viewMode === "list" ? "flex-1" : ""}`}>
                      {/* Titre du projet avec gradient */}
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 dark:from-white dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-300 dark:group-hover:to-blue-300 transition-all duration-300">
                        {project.title}
                      </h3>

                      {/* Description avec style amélioré */}
                      <p className={`text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 ${
                        viewMode === "list" ? "mb-4" : "mb-6 line-clamp-3"
                      }`}>
                        {project.description}
                      </p>

                      {/* Badges de technologies du projet */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {category.id === "react" && ["React", "JSX", "Tailwind"].map(tech => (
                          <span key={tech} className="skill-badge text-xs">{tech}</span>
                        ))}
                        {category.id === "vue" && ["Vue.js", "Next.js"].map(tech => (
                          <span key={tech} className="skill-badge text-xs">{tech}</span>
                        ))}
                        {category.id === "flutter" && ["Flutter", "Dart", "Firebase"].map(tech => (
                          <span key={tech} className="skill-badge text-xs">{tech}</span>
                        ))}
                        {category.id === "java" && ["Java", "Swing"].map(tech => (
                          <span key={tech} className="skill-badge text-xs">{tech}</span>
                        ))}
                      </div>

                      {/* Boutons d'action avec design moderne */}
                      <div className="project-buttons flex flex-wrap gap-3 sm:gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 text-sm font-semibold min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl hover:scale-105 border border-slate-200 dark:border-slate-600"
                            data-tooltip={lang === "fr" ? "Voir le code source" : "View source code"}
                          >
                            <span className="tooltip">
                              <svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </span>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-xl hover:shadow-2xl min-h-[48px] touch-manipulation"
                            data-tooltip={lang === "fr" ? "Voir le projet en ligne" : "View live project"}
                          >
                            <span className="tooltip">
                              <svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              {lang === "fr" ? "Voir le projet" : "View Project"}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <Footer lang={lang} />
    </section>
  );
}

export default Projects;