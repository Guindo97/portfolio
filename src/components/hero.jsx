import React, { useEffect, useRef, useState } from 'react';
import Footer from './footer';

const Hero = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [typingText, setTypingText] = useState('');
  const [currentSkill, setCurrentSkill] = useState(0);
  const heroRef = useRef(null);

  // Données des compétences avec niveaux
  const skills = [
    { name: 'React', level: 90, icon: '/img/react.png' },
    { name: 'JavaScript', level: 85, icon: '/img/javascript.png' },
    { name: 'Flutter', level: 75, icon: '/img/flutter.png' },
    { name: 'Tailwind CSS', level: 90, icon: '/img/tailwind.png' },
    { name: 'TypeScript', level: 75, icon: '/img/typescript.png' },
    { name: 'Vue.js', level: 70, icon: '/img/Vuejs.png' }
  ];

  // Statistiques personnelles
  const stats = [
    { number: '6+', label: lang === "fr" ? "Projets" : "Projects" },
    { number: '3+', label: lang === "fr" ? "Années d'expérience" : "Years Experience" },
    { number: '4+', label: lang === "fr" ? "Technologies" : "Technologies" },
    { number: '100%', label: lang === "fr" ? "Satisfaction" : "Satisfaction" }
  ];

  // Timeline du parcours
  const timeline = [
    {
      year: '2025',
      title: lang === "fr" ? "Diplômé CCNB" : "CCNB Graduate",
      description: lang === "fr" ? "BTS en Développement d'Applications" : "Associate Degree in Application Development"
    },
    {
      year: '2024',
      title: lang === "fr" ? "Premiers Projets" : "First Projects",
      description: lang === "fr" ? "Développement de sites web avec React" : "Web development with React"
    },
    {
      year: '2023',
      title: lang === "fr" ? "Début du Parcours" : "Journey Begins",
      description: lang === "fr" ? "Apprentissage des technologies web" : "Learning web technologies"
    }
  ];

  // Génération de particules flottantes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
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
    const interval = setInterval(generateParticles, 15000);
    return () => clearInterval(interval);
  }, []);

  // Animation de typing
  useEffect(() => {
    const fullText = lang === "fr" ? "Développeur Frontend" : "Frontend Developer";
    let index = 0;
    
    const typeText = () => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      }
    };

    const timer = setTimeout(typeText, 1000);
    return () => clearTimeout(timer);
  }, [lang]);

  // Rotation des compétences
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  // Intersection Observer
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

  // Fonction pour télécharger le CV (compatible iOS)
  const handleDownloadCV = (e) => {
    e.preventDefault();
    
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      window.open('/img/Resume Salifou Guindo Dev.pdf', '_blank');
    } else {
      const link = document.createElement('a');
      link.href = '/img/Resume Salifou Guindo Dev.pdf';
      link.download = 'Resume Salifou Guindo Dev.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
    <section className="hero-enhanced min-h-screen flex flex-col items-center justify-center px-4 text-center transition-colors duration-300 relative overflow-hidden">
      {/* Particules flottantes */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle-home"
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

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 floating-element"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 floating-element animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 floating-element animation-delay-4000"></div>
      </div>

      {/* Contenu principal */}
      <div 
        ref={heroRef}
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 xl:gap-24 max-w-7xl mx-auto transition-all duration-1000 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Photo avec effets avancés */}
        <div className="relative group">
          {/* Halo effect amélioré */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-2xl scale-125 group-hover:opacity-30 transition-opacity duration-500 md:block morphing-shape"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-15 blur-xl scale-110 md:hidden morphing-shape"></div>
          
          <div className="hero-photo-enhanced w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative z-10">
        <img
          src="/img/mrsalifg.jpg"
          alt="Salifou Guindo"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
        </div>

        {/* Contenu textuel avec animations */}
        <div className="space-y-6 text-slate-800 dark:text-white">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up">
            <span className="text-shimmer">Guindo Salifou</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold animate-fade-in-up animation-delay-200 flex items-center">
            <span className="typing-text">{typingText}</span>
            <img 
              src="https://flagcdn.com/w20/ca.png" 
              alt="Canada" 
              className="ml-2 w-6 h-4 object-cover rounded-sm"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="ml-2 text-2xl hidden">🇨🇦</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-white/90 max-w-2xl animate-fade-in-up animation-delay-400 leading-relaxed">
            {lang === "fr"
              ? "Développeur passionné spécialisé en technologies JavaScript (React), Flutter... Diplômé du CCNB en 2025, je suis motivé à rejoindre une équipe dynamique pour relever de vrais défis techniques."
              : "Passionate developer specialized in JavaScript (React), Flutter... Graduated from CCNB in 2025, I'm eager to join a dynamic team and tackle real technical challenges."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <button
              onClick={handleDownloadCV}
              className="group/btn inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              aria-label={lang === "fr" ? "Télécharger mon CV (PDF)" : "Download CV (PDF)"}
            >
              <svg className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {lang === "fr" ? "Télécharger mon CV" : "Download CV"}
            </button>
            
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-200/80 dark:bg-white/10 backdrop-blur-sm text-slate-800 dark:text-white font-semibold rounded-xl hover:bg-slate-300/80 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-slate-300 dark:border-white/20"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {lang === "fr" ? "Voir mes projets" : "View my projects"}
            </a>
          </div>
        </div>
      </div>

      {/* Statistiques personnelles */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card-enhanced animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="stat-number">{stat.number}</div>
            <div className="text-slate-600 dark:text-white/80 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Section des compétences interactives */}
      <div className="mt-20 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12 text-center animate-fade-in-up">
          {lang === "fr" ? "Mes Compétences" : "My Skills"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card animate-fade-in-up ${currentSkill === index ? 'scale-105' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-3">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  <span className="text-slate-800 dark:text-white font-semibold">{skill.name}</span>
                </div>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline du parcours */}
      <div className="mt-20 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12 text-center animate-fade-in-up">
          {lang === "fr" ? "Mon Parcours" : "My Journey"}
        </h2>
        
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item-enhanced animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="glass-card-enhanced">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">{item.year}</span>
                </div>
                <p className="text-slate-600 dark:text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos en défilement horizontal améliorés */}
      <div className="mt-20 scroll-logo-container relative z-10">
        <div className="scroll-logo-track">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <img src="/img/react.png" alt="React" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/javascript.png" alt="JavaScript" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/flutter.png" alt="Flutter" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/tailwind.png" alt="Tailwind" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/typescript.png" alt="TypeScript" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/github.png" alt="GitHub" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/figma.png" alt="Figma" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/html.png" alt="HTML" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/css.png" alt="CSS" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/java.png" alt="Java" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/NuxtJS.png" alt="Nuxt" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/Nextjs.jpeg" alt="Next" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <img src="/img/Vuejs.png" alt="Vue" className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SECTION "How can I help you?" améliorée */}
      <div className="mt-24 text-center max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 animate-fade-in-up">
          {lang === "fr" ? "Comment puis-je vous aider ?" : "How can I help you?"}
        </h2>
        <p className="text-slate-600 dark:text-white/80 text-lg mb-12 animate-fade-in-up animation-delay-200">
          {lang === "fr"
            ? "Je conçois des expériences utilisateurs sur mesure, alignées avec vos objectifs."
            : "I craft tailored user experiences from scratch, aligned with your goals."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300 group animate-fade-in-up animation-delay-400">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <img src="/img/webdev.png" alt="Web Development" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              {lang === "fr" ? "Développement Web" : "Web Development"}
            </h3>
            <p className="text-slate-600 dark:text-white/80 leading-relaxed">
              {lang === "fr"
                ? "Création de sites modernes et performants avec React, totalement responsives."
                : "Building modern and high-performance websites with React, fully responsive."}
            </p>
          </div>

          {/* REST API */}
          <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300 group animate-fade-in-up animation-delay-600">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <img src="/img/api.png" alt="API Development" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              {lang === "fr" ? "Développement d'API REST" : "REST API Development"}
            </h3>
            <p className="text-slate-600 dark:text-white/80 leading-relaxed">
              {lang === "fr"
                ? "Création d'API REST robustes avec Node.js, architecture propre et modulaire."
                : "Creating robust REST APIs using Node.js with a clean and modular architecture."}
            </p>
          </div>

          {/* UI/UX */}
          <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300 group animate-fade-in-up animation-delay-800">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <img src="/img/design.png" alt="UI/UX Design" className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              UI/UX Design
            </h3>
            <p className="text-slate-600 dark:text-white/80 leading-relaxed">
              {lang === "fr"
                ? "Conception de maquettes interactives et prototypage avec Figma."
                : "Designing interactive mockups and prototyping user interfaces using Figma."}
            </p>
          </div>
        </div>
      </div>
    </section>
    
    {/* Footer */}
    <Footer lang={lang} />
    </>
  );
};

export default Hero;