# 📧 Guide de Configuration EmailJS

## Étapes de Configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un Service Email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email :
   - **Gmail** (recommandé) : Connectez votre compte Gmail
   - **Outlook** : Connectez votre compte Outlook
   - **Yahoo** : Connectez votre compte Yahoo
4. Suivez les instructions de connexion
5. Notez le **Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un Template d'Email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}} - {{subject}}

Bonjour Salifou,

Vous avez reçu un nouveau message via votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. Sauvegardez et notez le **Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir la Clé Publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxxxxx`)

### 5. Mettre à jour la Configuration
Remplacez les valeurs dans `src/config/emailjs.js` :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_votre_service_id',      // Remplacez par votre Service ID
  TEMPLATE_ID: 'template_votre_template_id',  // Remplacez par votre Template ID
  PUBLIC_KEY: 'votre_cle_publique',            // Remplacez par votre Public Key
  TO_EMAIL: 'salifouguindo7@gmail.com'
};
```

### 6. Tester le Formulaire
1. Lancez votre application : `npm run dev`
2. Allez sur la page Contact
3. Remplissez et envoyez le formulaire
4. Vérifiez que vous recevez l'email

## 🔧 Configuration Automatique

Vous pouvez aussi utiliser le script de configuration :

```bash
node setup-emailjs.js
```

## ⚠️ Notes Importantes

- Le compte gratuit EmailJS permet 200 emails/mois
- Les emails sont envoyés depuis votre adresse configurée
- Vérifiez votre dossier spam si vous ne recevez pas les emails
- Testez avec différents navigateurs

## 🆘 Dépannage

### Problème : "EmailJS non configuré"
- Vérifiez que vous avez mis à jour les clés dans `emailjs.js`
- Redémarrez votre serveur de développement

### Problème : "Erreur lors de l'envoi"
- Vérifiez que votre service email est bien connecté
- Vérifiez que le template utilise les bonnes variables
- Consultez la console pour les erreurs détaillées

### Problème : "Email non reçu"
- Vérifiez votre dossier spam
- Vérifiez que l'adresse email de destination est correcte
- Testez avec un autre email
