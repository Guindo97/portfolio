import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/footer";

function Contact({ lang }) {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

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

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div 
        ref={contactRef}
        className={`max-w-2xl mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 animate-fade-in-up">
          {lang === "fr" ? "📢 Contact" : "📢 Contact Me"}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4 animate-fade-in-up animation-delay-200">
          {lang === "fr"
            ? "Une question ou un projet en tête ? N'hésitez pas à me contacter."
            : "Have a question or a project in mind? Feel free to reach out."}
        </p>

        <p className="text-slate-700 dark:text-slate-400 mb-8 flex items-center justify-center gap-2 animate-fade-in-up animation-delay-400">
          <FaMapMarkerAlt className="text-purple-600" />
          {lang === "fr" ? "Canada, Alberta" : "Canada, Alberta"}
        </p>

        {/* Icônes de contact */}
        <div className="flex justify-center gap-6 text-2xl text-slate-600 dark:text-slate-400 animate-fade-in-up animation-delay-600">
          <a 
            href="https://github.com/Guindo97" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white dark:bg-slate-700 shadow-md hover:shadow-lg hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
            aria-label={lang === "fr" ? "Profil GitHub" : "GitHub Profile"}
          >
            <FaGithub className="group-hover:animate-bounce" />
          </a>
          <a 
            href="mailto:salifouguindo7@gmail.com" 
            className="p-3 rounded-full bg-white dark:bg-slate-700 shadow-md hover:shadow-lg hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
            aria-label={lang === "fr" ? "Envoyer un email" : "Send email"}
          >
            <FaEnvelope className="group-hover:animate-bounce" />
          </a>
          <a 
            href="https://www.linkedin.com/in/salifou-guindo7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white dark:bg-slate-700 shadow-md hover:shadow-lg hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
            aria-label={lang === "fr" ? "Profil LinkedIn" : "LinkedIn Profile"}
          >
            <FaLinkedin className="group-hover:animate-bounce" />
          </a>
        </div>

      </div>
      
      {/* Footer */}
      <Footer lang={lang} />
    </section>
  );
}

export default Contact;
