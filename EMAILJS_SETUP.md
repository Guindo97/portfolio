# Configuration EmailJS pour le formulaire de contact

## Étapes pour configurer l'envoi d'emails

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre dashboard

### 2. Configurer le service email
1. Dans le dashboard, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. **Copiez le Service ID** (format: `service_xxxxxxx`)

### 3. Créer un template d'email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

**Subject:** Nouveau message de {{from_name}} - {{subject}}

**Content:**
```
Bonjour Salifou,

Vous avez reçu un nouveau message via votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre formulaire de contact.
```

4. **Copiez le Template ID** (format: `template_xxxxxxx`)

### 4. Obtenir la clé publique
1. Allez dans **Account** > **API Keys**
2. **Copiez la Public Key** (format: `xxxxxxxxxxxxxxxx`)

### 5. Configurer le projet
1. Ouvrez le fichier `src/config/emailjs.js`
2. Remplacez les valeurs par vos vraies clés :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_votre_service_id', // Remplacez par votre Service ID
  TEMPLATE_ID: 'template_votre_template_id', // Remplacez par votre Template ID
  PUBLIC_KEY: 'votre_public_key', // Remplacez par votre Public Key
  TO_EMAIL: 'salifouguindo7@gmail.com'
};
```

### 6. Installer EmailJS
Exécutez cette commande dans votre terminal :

```bash
npm install @emailjs/browser
```

### 7. Tester le formulaire
1. Démarrez votre application
2. Allez sur la page Contact
3. Remplissez le formulaire
4. Cliquez sur "Envoyer le message"
5. Vérifiez que vous recevez l'email à salifouguindo7@gmail.com

## Fonctionnalités
- ✅ Envoi d'emails en temps réel
- ✅ Validation des champs
- ✅ Messages de succès/erreur
- ✅ Interface responsive
- ✅ Support multilingue (FR/EN)

## Limites du plan gratuit
- 200 emails/mois
- 2 services email
- 2 templates
- Support par email

Pour plus d'emails, considérez un plan payant sur EmailJS.
