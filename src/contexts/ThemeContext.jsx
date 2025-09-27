import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Vérifier si on est côté client
    if (typeof window === 'undefined') {
      return true; // Mode sombre par défaut
    }
    
    // Vérifier si l'utilisateur a une préférence sauvegardée
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Mode sombre par défaut (au lieu de suivre la préférence système)
    return true;
  });

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    // Sauvegarder la préférence dans localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Appliquer la classe au document
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Debug: vérifier que la classe est appliquée
    console.log('Classe appliquée au document:', root.className);
  }, [isDark]);

  // Effet pour appliquer le thème au chargement initial
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Effet pour appliquer le thème immédiatement au montage du composant
  useEffect(() => {
    const root = document.documentElement;
    // Appliquer le mode sombre par défaut immédiatement
    root.classList.add('dark');
  }, []);

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
