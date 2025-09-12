// src/components/footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  // Fonction pour scroller vers le haut de la page
  const scrollToTop = () => {
    // Forcer le scroll même si on est déjà sur la même page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-6 w-full">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Informations personnelles */}
          <div>
            <h3 className="text-lg font-bold text-purple-400 mb-2">
              Salifou Guindo
            </h3>
            <p className="text-slate-300 text-sm mb-3">
              {lang === "fr" 
                ? "Développeur Frontend passionné, spécialisé en React, Flutter et technologies modernes."
                : "Passionate Frontend Developer, specialized in React, Flutter and modern technologies."
              }
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/Guindo97" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-1"
                aria-label={lang === "fr" ? "Profil GitHub" : "GitHub Profile"}
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/salifou-guindo7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-1"
                aria-label={lang === "fr" ? "Profil LinkedIn" : "LinkedIn Profile"}
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:salifouguindo7@gmail.com"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-1"
                aria-label={lang === "fr" ? "Envoyer un email" : "Send email"}
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold text-purple-400 mb-3">
              {lang === "fr" ? "Liens rapides" : "Quick Links"}
            </h3>
            <nav className="space-y-1">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-1"
              >
                <FaHome className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>{lang === "fr" ? "Accueil" : "Home"}</span>
              </Link>
              <Link 
                to="/about" 
                onClick={scrollToTop}
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-1"
              >
                <FaUser className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>{lang === "fr" ? "À propos" : "About"}</span>
              </Link>
              <Link 
                to="/projects" 
                onClick={scrollToTop}
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-1"
              >
                <FaFolderOpen className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>{lang === "fr" ? "Projets" : "Projects"}</span>
              </Link>
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-1"
              >
                <FaEnvelopeOpen className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>{lang === "fr" ? "Contact" : "Contact"}</span>
              </Link>
            </nav>
          </div>

          {/* Contact et localisation */}
          <div>
            <h3 className="text-lg font-bold text-purple-400 mb-3">
              {lang === "fr" ? "Contact" : "Contact"}
            </h3>
            <div className="text-sm text-slate-300 space-y-1">
              <p>
                <span className="font-medium">{lang === "fr" ? "Email:" : "Email:"}</span>
                <a 
                  href="mailto:salifouguindo7@gmail.com" 
                  className="hover:text-purple-400 transition-colors duration-300 ml-1"
                >
                  salifouguindo7@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">{lang === "fr" ? "Localisation:" : "Location:"}</span>
                <span className="ml-1">{lang === "fr" ? "Edmonton, Alberta, Canada" : "Edmonton, Alberta, Canada"}</span>
              </p>
              <p>
                <span className="font-medium">{lang === "fr" ? "Disponibilité:" : "Availability:"}</span>
                <span className="ml-1">{lang === "fr" ? "Ouvert aux opportunités" : "Open to opportunities"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="border-t border-slate-700 mt-4 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Salifou Guindo. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
            </p>
            <p className="text-slate-500 text-xs mt-1 sm:mt-0">
              {lang === "fr" 
                ? "Développé avec ❤️ en React" 
                : "Developed with ❤️ in React"
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
