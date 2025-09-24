// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // Votre Service ID (trouvé dans EmailJS Dashboard > Email Services)
  SERVICE_ID: 'service_4z9k8rs',

  // Votre Template ID (trouvé dans EmailJS Dashboard > Email Templates)
  TEMPLATE_ID: 'template_b1jjywu',

  // Votre Public Key (trouvé dans EmailJS Dashboard > Account > API Keys)
  PUBLIC_KEY: 'jGqKB9H7YaX18ZGG3',

  // Email de destination - CONFIGURÉ
  TO_EMAIL: 'salifouguindo7@gmail.com'
};

// Fonction de validation des clés EmailJS
export const validateEmailJSConfig = () => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;
  
  const isConfigured = 
    SERVICE_ID && SERVICE_ID !== 'service_your_service_id' &&
    TEMPLATE_ID && TEMPLATE_ID !== 'template_your_template_id' &&
    PUBLIC_KEY && PUBLIC_KEY !== 'your_public_key';
  
  if (!isConfigured) {
    console.warn('⚠️ EmailJS non configuré. Le formulaire de contact ne fonctionnera pas.');
    console.log('📧 Configuration actuelle :');
    console.log('Service ID:', SERVICE_ID);
    console.log('Template ID:', TEMPLATE_ID);
    console.log('Public Key:', PUBLIC_KEY);
  }
  
  return isConfigured;
};

// Template de l'email (à configurer dans EmailJS Dashboard)
export const EMAIL_TEMPLATE = {
  // Variables disponibles dans le template :
  // {{from_name}} - Nom de l'expéditeur
  // {{from_email}} - Email de l'expéditeur  
  // {{subject}} - Sujet du message
  // {{message}} - Contenu du message
  // {{to_email}} - Email de destination
};
