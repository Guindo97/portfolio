#!/usr/bin/env node

/**
 * Script de configuration EmailJS
 * Ce script vous guide pour configurer EmailJS étape par étape
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Configuration EmailJS pour le formulaire de contact\n');

console.log('📋 Étapes à suivre :');
console.log('1. Allez sur https://www.emailjs.com/');
console.log('2. Créez un compte gratuit');
console.log('3. Configurez un service email (Gmail, Outlook, etc.)');
console.log('4. Créez un template d\'email');
console.log('5. Obtenez vos clés API\n');

rl.question('Avez-vous terminé la configuration sur EmailJS ? (y/n): ', (answer) => {
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    console.log('\n🔑 Maintenant, entrez vos clés EmailJS :\n');
    
    rl.question('Service ID (service_xxxxxxx): ', (serviceId) => {
      rl.question('Template ID (template_xxxxxxx): ', (templateId) => {
        rl.question('Public Key (xxxxxxxxxxxxxxxx): ', (publicKey) => {
          
          // Mise à jour du fichier de configuration
          const configContent = `// Configuration EmailJS
// Généré automatiquement le ${new Date().toLocaleDateString()}

export const EMAILJS_CONFIG = {
  // Votre Service ID (trouvé dans EmailJS Dashboard > Email Services)
  SERVICE_ID: '${serviceId}',
  
  // Votre Template ID (trouvé dans EmailJS Dashboard > Email Templates)
  TEMPLATE_ID: '${templateId}',
  
  // Votre Public Key (trouvé dans EmailJS Dashboard > Account > API Keys)
  PUBLIC_KEY: '${publicKey}',
  
  // Email de destination
  TO_EMAIL: 'salifouguindo7@gmail.com'
};

// Template de l'email (à configurer dans EmailJS Dashboard)
export const EMAIL_TEMPLATE = {
  // Variables disponibles dans le template :
  // {{from_name}} - Nom de l'expéditeur
  // {{from_email}} - Email de l'expéditeur  
  // {{subject}} - Sujet du message
  // {{message}} - Contenu du message
  // {{to_email}} - Email de destination
};`;

          try {
            fs.writeFileSync(path.join(__dirname, 'src', 'config', 'emailjs.js'), configContent);
            console.log('\n✅ Configuration sauvegardée avec succès !');
            console.log('📧 Le formulaire de contact est maintenant configuré pour envoyer des emails à salifouguindo7@gmail.com');
            console.log('\n🧪 Testez le formulaire en :');
            console.log('1. Démarrant votre application (npm run dev)');
            console.log('2. Allant sur la page Contact');
            console.log('3. Remplissant et envoyant le formulaire');
            console.log('4. Vérifiant que vous recevez l\'email\n');
          } catch (error) {
            console.error('❌ Erreur lors de la sauvegarde :', error.message);
          }
          
          rl.close();
        });
      });
    });
  } else {
    console.log('\n📖 Consultez le fichier EMAILJS_SETUP.md pour les instructions détaillées');
    console.log('🔄 Relancez ce script une fois la configuration terminée : node setup-emailjs.js');
    rl.close();
  }
});
