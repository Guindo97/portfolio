# 🧪 Guide de Test des Fonctionnalités

## ✅ Checklist de Test

### 1. 🔧 Configuration EmailJS
- [ ] Vérifier que le guide `EMAILJS_SETUP_GUIDE.md` est présent
- [ ] Tester le formulaire de contact (doit afficher message d'erreur si non configuré)
- [ ] Vérifier que l'email de destination est `salifouguindo7@gmail.com`

### 2. 🖼️ Optimisation des Images
- [ ] Vérifier que toutes les images utilisent le composant `OptimizedImage`
- [ ] Tester le lazy loading (images se chargent au scroll)
- [ ] Vérifier les placeholders de chargement
- [ ] Tester le support WebP (si images WebP disponibles)

### 3. ⚡ Code Splitting
- [ ] Vérifier que les pages se chargent avec Suspense
- [ ] Tester le spinner de chargement
- [ ] Vérifier que le bundle initial est réduit

### 4. ♿ Accessibilité
- [ ] Tester la navigation au clavier (Tab, Enter, Escape)
- [ ] Vérifier le lien "Skip to content"
- [ ] Tester avec `prefers-reduced-motion: reduce`
- [ ] Vérifier les attributs ARIA (aria-expanded, aria-controls)

### 5. 🔍 SEO
- [ ] Vérifier les métadonnées dans `index.html`
- [ ] Tester le sitemap.xml
- [ ] Vérifier robots.txt
- [ ] Tester les Open Graph tags

## 🚀 Commandes de Test

```bash
# Installation des dépendances
npm install

# Test en développement
npm run dev

# Build de production
npm run build

# Test du build
npm run preview

# Linting
npm run lint
```

## 📱 Tests Responsive

### Desktop (1920x1080)
- [ ] Navigation complète
- [ ] Animations fluides
- [ ] Formulaire de contact
- [ ] Galerie de projets

### Tablet (768x1024)
- [ ] Menu mobile
- [ ] Images optimisées
- [ ] Formulaire adaptatif

### Mobile (375x667)
- [ ] Menu hamburger
- [ ] Touch interactions
- [ ] Performance optimisée

## 🎯 Tests de Performance

### Lighthouse Score
- [ ] Performance: >90
- [ ] Accessibility: >95
- [ ] Best Practices: >90
- [ ] SEO: >95

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): <2.5s
- [ ] FID (First Input Delay): <100ms
- [ ] CLS (Cumulative Layout Shift): <0.1

## 🐛 Dépannage Commun

### Problème: Images ne se chargent pas
```bash
# Vérifier que les images sont dans public/img/
ls public/img/
```

### Problème: Formulaire ne fonctionne pas
```bash
# Vérifier la configuration EmailJS
cat src/config/emailjs.js
```

### Problème: Animations trop rapides
```bash
# Tester avec prefers-reduced-motion
# Dans les DevTools: Rendering > Emulate CSS media feature prefers-reduced-motion
```

## 📊 Métriques de Succès

- ✅ Toutes les images optimisées
- ✅ Code splitting fonctionnel
- ✅ Accessibilité WCAG 2.1 AA
- ✅ SEO optimisé
- ✅ Performance >90
- ✅ Formulaire de contact opérationnel
