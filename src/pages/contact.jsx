import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact({ lang }) {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          {lang === "fr" ? "📢 Contact" : "📢 Contact Me"}
        </h2>
        <p className="text-slate-600 mb-4">
          {lang === "fr"
            ? "Une question ou un projet en tête ? N’hésitez pas à me contacter."
            : "Have a question or a project in mind? Feel free to reach out."}
        </p>

        <p className="text-slate-700 mb-6 flex items-center justify-center gap-2">
          <FaMapMarkerAlt />
          {lang === "fr" ? "Canada, Alberta" : "Canada, Alberta"}
        </p>

        {/* Icônes de contact */}
        <div className="flex justify-center gap-6 text-2xl text-slate-600">
          <a href="https://github.com/Guindo97" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            <FaGithub />
          </a>
          <a href="mailto:salifouguindo7@gmail.com" className="hover:text-purple-600">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/salifou-guindo7" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          © 2025 Salifou Guindo. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>
      </div>
    </section>
  );
}

export default Contact;
