import React, { useEffect, useRef, useState } from "react";
import guindoPhoto from "/img/salifouguindo.jpg";
import Footer from "../components/footer";

function About({ lang }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [particles, setParticles] = useState([]);

  // Génération de particules flottantes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        delay: Math.random() * 5
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 12000);
    return () => clearInterval(interval);
  }, []);

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

  // Données des compétences
  const skills = [
    { name: 'React', level: 90, icon: '/img/react.png', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 85, icon: '/img/javascript.png', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Flutter', level: 75, icon: '/img/flutter.png', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Tailwind CSS', level: 90, icon: '/img/tailwind.png', color: 'from-teal-400 to-teal-600' },
    { name: 'TypeScript', level: 75, icon: '/img/typescript.png', color: 'from-blue-500 to-blue-700' },
    { name: 'Vue.js', level: 70, icon: '/img/Vuejs.png', color: 'from-green-400 to-green-600' }
  ];

  // Données des langues
  const languages = [
    { name: 'Français', level: 100, flag: '🇫🇷' },
    { name: 'Anglais', level: 85, flag: '🇺🇸' },
    { name: 'Russe', level: 85, flag: '🇷🇺' }
  ];

  // Données des passions
  const passions = [
    { icon: '💻', title: lang === "fr" ? "Développement" : "Development", desc: lang === "fr" ? "Créer des solutions innovantes" : "Creating innovative solutions" },
    { icon: '🌍', title: lang === "fr" ? "Multiculturalisme" : "Multiculturalism", desc: lang === "fr" ? "Communiquer dans 3 langues" : "Communicating in 3 languages" },
    { icon: '🎯', title: lang === "fr" ? "Résolution de problèmes" : "Problem Solving", desc: lang === "fr" ? "Analyser et résoudre des défis" : "Analyzing and solving challenges" },
    { icon: '📚', title: lang === "fr" ? "Apprentissage continu" : "Continuous Learning", desc: lang === "fr" ? "Toujours apprendre de nouvelles technologies" : "Always learning new technologies" }
  ];

  return (
    <>
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Particules flottantes */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + particle.speed}s`
          }}
        />
      ))}

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header avec navigation par onglets */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            {lang === "fr" ? "À propos de moi" : "About Me"}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up animation-delay-200">
            {lang === "fr" 
              ? "Découvrez mon parcours, mes compétences et ma passion pour le développement" 
              : "Discover my journey, skills and passion for development"}
          </p>
          
          {/* Navigation par onglets */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            {[
              { id: 'about', label: lang === "fr" ? "À propos" : "About" },
              { id: 'skills', label: lang === "fr" ? "Compétences" : "Skills" },
              { id: 'education', label: lang === "fr" ? "Formation" : "Education" },
              { id: 'passions', label: lang === "fr" ? "Passions" : "Passions" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Onglet À propos */}
          {activeTab === 'about' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo avec effets avancés */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Halo effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-2xl scale-110 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={guindoPhoto}
                      alt="Guindo Salifou"
                      className="w-full max-w-md h-auto object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Badge flottant */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                    {lang === "fr" ? "Développeur" : "Developer"}
                  </div>
                </div>
              </div>

              {/* Texte avec animations */}
              <div className="space-y-6">
                <div className="glass-card-enhanced p-8">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                    {lang === "fr" ? "Salut, je suis Salifou ! 👋" : "Hi, I'm Salifou! 👋"}
                  </h2>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                    {lang === "fr"
                      ? "Développeur d'applications mobiles avec 8 années de formation postsecondaire et une solide expérience acquise à travers de nombreux projets académiques et personnels. Curieux, rigoureux et analytique, je suis à la recherche d'une opportunité professionnelle où je pourrai contribuer à des projets concrets tout en continuant à développer mes compétences techniques et professionnelles."
                      : "Mobile application development professional with 8 years of post-secondary education and solid experience through numerous academic and personal projects. Curious, detail-oriented, and analytical, I am seeking a professional opportunity where I can actively contribute to impactful projects while continuing to develop my technical and professional skills."}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                    {lang === "fr"
                      ? "Communicateur multilingue (français, anglais, russe) avec une forte capacité à soutenir les clients et à offrir des solutions centrées sur leurs besoins."
                      : "Strong multilingual communicator (French, English, Russian) with proven ability to support clients and deliver exceptional customer-focused solutions."}
                  </p>

                  {/* Statistiques rapides */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">3+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{lang === "fr" ? "Années d'expérience" : "Years Experience"}</div>
                    </div>
                    <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">6+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{lang === "fr" ? "Projets réalisés" : "Projects Completed"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Onglet Compétences */}
          {activeTab === 'skills' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {lang === "fr" ? "Mes Compétences Techniques" : "My Technical Skills"}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {lang === "fr" ? "Technologies que je maîtrise" : "Technologies I master"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-3">
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        <span className="text-slate-800 dark:text-white font-semibold">{skill.name}</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress bg-gradient-to-r ${skill.color}`}
                        style={{ '--skill-level': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Langues */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
                  {lang === "fr" ? "Langues" : "Languages"}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {languages.map((lang, index) => (
                    <div key={index} className="glass-card-enhanced p-6 text-center">
                      <div className="text-3xl mb-2">{lang.flag}</div>
                      <div className="font-semibold text-slate-800 dark:text-white mb-2">{lang.name}</div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress bg-gradient-to-r from-green-400 to-green-600"
                          style={{ '--skill-level': `${lang.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Onglet Formation */}
          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {lang === "fr" ? "Mon Parcours Académique" : "My Academic Journey"}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {lang === "fr" ? "8 années de formation postsecondaire" : "8 years of post-secondary education"}
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    year: '2023 – 2025',
                    title: lang === "fr" ? "Diplôme d'études collégiales en programmation d'applications mobiles" : "College Diploma in Mobile Application Programming",
                    location: "CCNB, Canada",
                    description: lang === "fr" ? "Formation spécialisée en développement d'applications mobiles avec React Native, Flutter et technologies web modernes." : "Specialized training in mobile application development with React Native, Flutter and modern web technologies.",
                    color: 'purple',
                    icon: '🎓'
                  },
                  {
                    year: '2017 – 2022',
                    title: lang === "fr" ? "Baccalauréat en Génie informatique appliqué" : "Bachelor's in Applied Computer Engineering",
                    location: "Russie",
                    description: lang === "fr" ? "Formation en génie informatique (non terminé, stage non obtenu pour valider le diplôme)." : "Computer engineering training (not completed, internship not obtained to validate the degree).",
                    color: 'blue',
                    icon: '🔬'
                  },
                  {
                    year: '2015 – 2017',
                    title: lang === "fr" ? "BTS en Développement d'Applications" : "Associate Degree in Application Development",
                    location: "Côte d'Ivoire",
                    description: lang === "fr" ? "Première formation en développement d'applications et programmation." : "First training in application development and programming.",
                    color: 'green',
                    icon: '💻'
                  }
                ].map((item, index) => (
                  <div key={index} className="timeline-item-enhanced">
                    <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                          item.color === 'purple' ? 'from-purple-400 to-purple-600' :
                          item.color === 'blue' ? 'from-blue-400 to-blue-600' :
                          'from-green-400 to-green-600'
                        } flex items-center justify-center text-white text-xl`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                            <span className={`font-bold ${
                              item.color === 'purple' ? 'text-purple-600' :
                              item.color === 'blue' ? 'text-blue-600' :
                              'text-green-600'
                            }`}>{item.year}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">{item.location}</p>
                          <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Onglet Passions */}
          {activeTab === 'passions' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {lang === "fr" ? "Mes Passions & Intérêts" : "My Passions & Interests"}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {lang === "fr" ? "Ce qui me motive au quotidien" : "What motivates me daily"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {passions.map((passion, index) => (
                  <div key={index} className="glass-card-enhanced p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-4xl mb-4">{passion.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{passion.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{passion.desc}</p>
                  </div>
                ))}
              </div>

              {/* Citation inspirante */}
              <div className="mt-16 text-center">
                <div className="glass-card-enhanced p-8 max-w-4xl mx-auto">
                  <blockquote className="text-2xl font-medium text-slate-700 dark:text-slate-300 italic mb-4">
                    "{lang === "fr" 
                      ? "Le code est de la poésie logique qui résout des problèmes réels." 
                      : "Code is logical poetry that solves real problems."}"
                  </blockquote>
                  <cite className="text-slate-600 dark:text-slate-400">— Salifou Guindo</cite>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    
    {/* Footer */}
    <Footer lang={lang} />
    </>
  );
}

export default About;