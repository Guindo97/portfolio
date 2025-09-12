// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // Votre Service ID (trouvé dans EmailJS Dashboard > Email Services)
  SERVICE_ID: 'service_your_service_id',
  
  // Votre Template ID (trouvé dans EmailJS Dashboard > Email Templates)
  TEMPLATE_ID: 'template_your_template_id',
  
  // Votre Public Key (trouvé dans EmailJS Dashboard > Account > API Keys)
  PUBLIC_KEY: 'your_public_key',
  
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
};
