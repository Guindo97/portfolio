import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload, FaCopy, FaCheck, FaPhone, FaClock, FaGlobe, FaRocket, FaHeart, FaStar, FaAward, FaCode, FaPalette, FaLightbulb } from "react-icons/fa";
import Footer from "../components/footer";

function Contact({ lang }) {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typingText, setTypingText] = useState('');
  const contactRef = useRef(null);

  // Génération de particules flottantes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 0.5,
        delay: Math.random() * 5,
        color: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)]
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animation de typing pour le titre
  useEffect(() => {
    const fullText = lang === "fr" ? "Contactez-moi" : "Get In Touch";
    let index = 0;
    
    const typeText = () => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      }
    };

    const timer = setTimeout(typeText, 500);
    return () => clearTimeout(timer);
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Forcer l'affichage immédiat sur mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  // Données de contact enrichies
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: lang === "fr" ? "Email" : "Email",
      value: "salifouguindo7@gmail.com",
      link: "mailto:salifouguindo7@gmail.com",
      color: "from-red-400 to-red-600",
      description: lang === "fr" ? "Réponse sous 24h" : "Response within 24h"
    },
    {
      icon: FaMapMarkerAlt,
      title: lang === "fr" ? "Localisation" : "Location",
      value: "Alberta, Canada",
      link: "#",
      color: "from-blue-400 to-blue-600",
      description: lang === "fr" ? "Disponible partout" : "Available worldwide"
    },
    {
      icon: FaClock,
      title: lang === "fr" ? "Disponibilité" : "Availability",
      value: lang === "fr" ? "Réponse rapide" : "Quick Response",
      link: "#",
      color: "from-green-400 to-green-600",
      description: lang === "fr" ? "Je vous répondrai le plus tôt possible" : "I'll get back to you as soon as possible"
    }
  ];

  // Réseaux sociaux enrichis
  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/Guindo97",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
      description: lang === "fr" ? "Mes projets open source" : "My open source projects"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/salifou-guindo7",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      description: lang === "fr" ? "Mon profil professionnel" : "My professional profile"
    },
    {
      icon: FaEnvelope,
      name: "Email",
      url: "mailto:salifouguindo7@gmail.com",
      color: "from-red-500 to-red-700",
      hoverColor: "hover:from-red-400 hover:to-red-600",
      description: lang === "fr" ? "Contact direct" : "Direct contact"
    }
  ];

  // Services offerts
  const services = [
    {
      icon: FaCode,
      title: lang === "fr" ? "Développement Web" : "Web Development",
      description: lang === "fr" ? "Sites modernes et performants" : "Modern and performant websites",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: FaPalette,
      title: lang === "fr" ? "UI/UX Design" : "UI/UX Design",
      description: lang === "fr" ? "Interfaces intuitives" : "Intuitive interfaces",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: FaRocket,
      title: lang === "fr" ? "Optimisation" : "Optimization",
      description: lang === "fr" ? "Performance et SEO" : "Performance and SEO",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: FaLightbulb,
      title: lang === "fr" ? "Conseil" : "Consulting",
      description: lang === "fr" ? "Stratégie digitale" : "Digital strategy",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  // Statistiques
  const stats = [
    { number: "24h", label: lang === "fr" ? "Réponse" : "Response" },
    { number: "100%", label: lang === "fr" ? "Satisfaction" : "Satisfaction" },
    { number: "50+", label: lang === "fr" ? "Projets" : "Projects" },
    { number: "3+", label: lang === "fr" ? "Années" : "Years" }
  ];

  // Gestion du formulaire
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplacer par vraie logique)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Afficher message de succès
    alert(lang === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!");
  };

  // Copier email
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('salifouguindo7@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Particules flottantes améliorées */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + particle.speed}s`
          }}
        />
      ))}

      {/* Background decorations améliorées */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header avec animation de typing */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8 animate-fade-in-up">
            <span className="typing-text">{typingText}</span>
            <span className="text-4xl ml-4">🚀</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto leading-relaxed">
            {lang === "fr" 
              ? "Prêt à donner vie à vos idées ? Discutons de votre prochain projet !" 
              : "Ready to bring your ideas to life? Let's discuss your next project!"}
          </p>
          
          {/* Statistiques rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card-enhanced p-4 text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Navigation par onglets améliorée */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
            {[
              { id: 'contact', label: lang === "fr" ? "Contact" : "Contact", icon: FaEnvelope },
              { id: 'form', label: lang === "fr" ? "Formulaire" : "Form", icon: FaRocket },
              { id: 'social', label: lang === "fr" ? "Réseaux" : "Social", icon: FaGlobe },
              { id: 'services', label: lang === "fr" ? "Services" : "Services", icon: FaAward }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:scale-105'
                }`}
              >
                <tab.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div
          ref={contactRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Onglet Contact Info amélioré */}
          {activeTab === 'contact' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2 text-lg">{info.value}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{info.description}</p>
                    {info.title === "Email" && (
                      <button
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300"
                      >
                        {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                        {copied ? (lang === "fr" ? "Copié !" : "Copied!") : (lang === "fr" ? "Copier" : "Copy")}
                      </button>
                    )}
                    {info.link !== "#" && (
                      <a
                        href={info.link}
                        className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {lang === "fr" ? "Contacter" : "Contact"}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Carte de localisation améliorée */}
              <div className="glass-card-enhanced p-12 text-center">
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
                  {lang === "fr" ? "Ma Localisation" : "My Location"}
                </h3>
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8">
                  <FaMapMarkerAlt className="text-6xl text-purple-600 mx-auto mb-6" />
                  <p className="text-xl text-slate-700 dark:text-slate-300 mb-4">
                    {lang === "fr" 
                      ? "Basé en Alberta, Canada - Disponible pour des projets locaux et distants" 
                      : "Based in Alberta, Canada - Available for local and remote projects"}
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      🌍 {lang === "fr" ? "Remote" : "Remote"}
                    </span>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      🏢 {lang === "fr" ? "Local" : "Local"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Onglet Formulaire amélioré */}
          {activeTab === 'form' && (
            <div className="max-w-3xl mx-auto">
              <div className="glass-card-enhanced p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                    {lang === "fr" ? "Envoyez-moi un message" : "Send me a message"}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    {lang === "fr" ? "Décrivez votre projet et je vous répondrai rapidement !" : "Describe your project and I'll get back to you quickly!"}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {lang === "fr" ? "Nom complet" : "Full Name"} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 text-lg"
                        placeholder={lang === "fr" ? "Votre nom" : "Your name"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        {lang === "fr" ? "Email" : "Email"} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      {lang === "fr" ? "Sujet" : "Subject"} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 text-lg"
                      placeholder={lang === "fr" ? "Sujet de votre message" : "Message subject"}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      {lang === "fr" ? "Message" : "Message"} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 resize-none text-lg"
                      placeholder={lang === "fr" ? "Décrivez votre projet en détail..." : "Describe your project in detail..."}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xl rounded-xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {lang === "fr" ? "Envoi en cours..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        <FaRocket className="w-6 h-6" />
                        {lang === "fr" ? "Envoyer le message" : "Send Message"}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Onglet Réseaux sociaux amélioré */}
          {activeTab === 'social' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                  {lang === "fr" ? "Suivez-moi" : "Follow Me"}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  {lang === "fr" ? "Connectez-vous avec moi sur les réseaux sociaux et découvrez mes derniers projets" : "Connect with me on social media and discover my latest projects"}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up ${social.hoverColor}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white text-4xl group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{social.name}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{social.description}</p>
                    <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium text-lg">
                      {lang === "fr" ? "Visiter" : "Visit"}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* Téléchargement CV amélioré */}
              <div className="text-center">
                <div className="glass-card-enhanced p-12">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                    {lang === "fr" ? "Téléchargez mon CV" : "Download my CV"}
                  </h3>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                    {lang === "fr" 
                      ? "Consultez mon CV pour plus d'informations sur mon parcours et mes compétences" 
                      : "Check out my CV for more information about my background and skills"}
                  </p>
                  <a
                    href="/img/Resume Salifou Guindo Dev.pdf"
                    download
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xl rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <FaDownload className="w-6 h-6" />
                    {lang === "fr" ? "Télécharger le CV" : "Download CV"}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Nouvel onglet Services */}
          {activeTab === 'services' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                  {lang === "fr" ? "Mes Services" : "My Services"}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  {lang === "fr" ? "Découvrez les services que je peux vous offrir pour votre projet" : "Discover the services I can offer you for your project"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="text-center mt-16">
                <div className="glass-card-enhanced p-12">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                    {lang === "fr" ? "Prêt à commencer ?" : "Ready to get started?"}
                  </h3>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                    {lang === "fr" 
                      ? "Contactez-moi dès maintenant pour discuter de votre projet et obtenir un devis gratuit !" 
                      : "Contact me now to discuss your project and get a free quote!"}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:salifouguindo7@gmail.com"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <FaEnvelope className="w-5 h-5" />
                      {lang === "fr" ? "Envoyer un email" : "Send Email"}
                    </a>
                    <button
                      onClick={() => setActiveTab('form')}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold text-lg rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <FaRocket className="w-5 h-5" />
                      {lang === "fr" ? "Remplir le formulaire" : "Fill Form"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer lang={lang} />
    </section>
  );
}

export default Contact;