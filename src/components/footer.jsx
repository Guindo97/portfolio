// src/components/footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">
              {lang === "fr" ? "Salifou Guindo" : "Salifou Guindo"}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === "fr" 
                ? "Développeur Frontend passionné, spécialisé en React, Flutter et technologies modernes."
                : "Passionate Frontend Developer, specialized in React, Flutter and modern technologies."
              }
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Guindo97" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700"
                aria-label={lang === "fr" ? "Profil GitHub" : "GitHub Profile"}
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/salifou-guindo7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700"
                aria-label={lang === "fr" ? "Profil LinkedIn" : "LinkedIn Profile"}
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:salifouguindo7@gmail.com"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700"
                aria-label={lang === "fr" ? "Envoyer un email" : "Send email"}
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              {lang === "fr" ? "Liens rapides" : "Quick Links"}
            </h3>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-slate-700/50 hover:shadow-lg border border-transparent hover:border-purple-500/30"
              >
                <FaHome className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{lang === "fr" ? "Accueil" : "Home"}</span>
              </Link>
              <Link 
                to="/about" 
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-slate-700/50 hover:shadow-lg border border-transparent hover:border-purple-500/30"
              >
                <FaUser className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{lang === "fr" ? "À propos" : "About"}</span>
              </Link>
              <Link 
                to="/projects" 
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-slate-700/50 hover:shadow-lg border border-transparent hover:border-purple-500/30"
              >
                <FaFolderOpen className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{lang === "fr" ? "Projets" : "Projects"}</span>
              </Link>
              <Link 
                to="/contact" 
                className="group flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-slate-700/50 hover:shadow-lg border border-transparent hover:border-purple-500/30"
              >
                <FaEnvelopeOpen className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{lang === "fr" ? "Contact" : "Contact"}</span>
              </Link>
            </nav>
          </div>

          {/* Contact et localisation */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">
              {lang === "fr" ? "Contact" : "Contact"}
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                <span className="font-medium">{lang === "fr" ? "Email:" : "Email:"}</span>
                <br />
                <a 
                  href="mailto:salifouguindo7@gmail.com" 
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  salifouguindo7@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">{lang === "fr" ? "Localisation:" : "Location:"}</span>
                <br />
                {lang === "fr" ? "Edmonton, Alberta, Canada" : "Edmonton, Alberta, Canada"}
              </p>
              <p>
                <span className="font-medium">{lang === "fr" ? "Disponibilité:" : "Availability:"}</span>
                <br />
                {lang === "fr" ? "Ouvert aux opportunités" : "Open to opportunities"}
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Salifou Guindo. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
            </p>
            <p className="text-slate-500 text-xs">
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
