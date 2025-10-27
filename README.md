![AI228 Logo](https://img.shields.io/badge/AI228-Hub%20Togolais%20d'IA-green?style=for-the-badge&logo=github)
![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange?style=for-the-badge&logo=digitalocean)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

![Last Commit](https://img.shields.io/github/last-commit/Donchaminade/ai228-hub?style=for-the-badge)
![Open Issues](https://img.shields.io/github/issues/Donchaminade/ai228-hub?style=for-the-badge)
![Open PRs](https://img.shields.io/github/issues-pr/Donchaminade/ai228-hub?style=for-the-badge)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=for-the-badge)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-OpenSource-pink?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=for-the-badge)


**AI228 Hub** est une plateforme open source qui recense les **meilleures intelligences artificielles (IA)** utilisées par les Togolais au quotidien.
Chaque utilisateur peut partager ses outils IA préférés **par catégorie**, expliquer **comment il les utilise**, et **découvrir de nouvelles IA** adaptées à ses besoins.

---

## 🌟 À propos

**AI228 Hub** (Artificial Intelligence 228) est un projet communautaire togolais visant à :

* Mettre en avant les **IA utiles et accessibles** pour les créateurs, développeurs et entrepreneurs.
* Encourager le **partage d’expériences locales** autour de l’intelligence artificielle.
* Créer un **répertoire national open source** d’outils IA selon leur usage.

Le “228” fait référence à l’indicatif téléphonique du Togo 🇹🇬 — symbole d’un projet **créé par et pour les Togolais**.

---

## 🚀 Fonctionnalités

* 🧩 **Catalogue d’IA** : Découvrez les outils IA les plus utilisés par la communauté.
* 🗂️ **Classement par catégories** : Code, Contenu, Vidéo, Images, Audio, Éducation, Debugage, etc.
* ✍️ **Explication personnelle d’usage** : Chaque contributeur explique, avec ses propres mots, comment il utilise une IA.
* 🔍 **Recherche & Filtrage** : Trouvez rapidement les IA selon vos besoins.
* 📱 **Responsive Design** : Interface adaptée à tous les écrans.
* 🌐 **Interface en français**.
* 🔐 **Connexion GitHub** (optionnelle) : Pour afficher vos contributions et profil.
* 🤝 **Open Source & Hacktoberfest** : Contributions ouvertes à tous !

---

## 🛠️ Technologies utilisées

* **Next.js 15** — Framework React moderne
* **TypeScript** — Typage robuste
* **Tailwind CSS** — Design rapide et élégant
* **Framer Motion** — Animations fluides
* **NextAuth.js v5** — Authentification GitHub
* **JSON (ou Prisma)** — Gestion simple des données
* **GitHub API** *(optionnel)* — Statistiques contributeurs

---

## ⚙️ Installation et démarrage

### 🧩 Prérequis

* Node.js **18+**
* npm, yarn, pnpm ou bun

### 🚀 Étapes

1. **Cloner le repository**

   ```bash
   git clone https://github.com/Donchaminade/ai228-hub.git
   cd ai228-hub
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer le serveur**

   ```bash
   npm run dev
   ```

4. **Accéder à l’application**

   > [http://localhost:3000](http://localhost:3000)

---

## 🔐 Configuration de l'authentification GitHub *(optionnelle)*

Si tu veux permettre aux utilisateurs de se connecter avec leur compte GitHub :

1. Crée une **GitHub OAuth App**

2. Configure ton `.env.local` :

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=votre-secret-aleatoire
   GITHUB_CLIENT_ID=votre-client-id
   GITHUB_CLIENT_SECRET=votre-client-secret
   ```

3. Redémarre le serveur.

---

## 🤝 Comment contribuer

Nous accueillons toutes les contributions, que ce soit du **code**, de la **documentation** ou simplement **l’ajout d’une IA** !

### 🔧 1. Fork et clone

```bash
git clone https://github.com/Donchaminade/ai228-hub.git
```

### 🌿 2. Crée une branche

```bash
git checkout -b feature/ajout-nouvelle-ia
```

### ✍️ 3. Modifie le fichier `data/ai.json`

Ajoute ton IA avec cette structure :

```json
{
  "id": 3,
  "name": "Nom de l'IA",
  "description": "Brève description de ce que fait cette IA.",
  "link": "https://lien-de-l-ia.com/",
  "category": "Contenu",
  "author": "Ton nom ou pseudo",
  "date_added": "YYYY-MM-DD",
  "utilisation": "Explique comment tu utilises cette IA dans ton quotidien, avec tes propres mots."
}
```

### 🚀 4. Envoie ta contribution

```bash
git commit -m "Ajout: [Nom de l'IA]"
git push origin feature/ajout-nouvelle-ia
```

Puis crée une **Pull Request**.

---

## 🧱 Structure du projet

```
ai228-hub/
├── app/                   # Pages Next.js
│   ├── layout.tsx
│   ├── page.tsx
│   ├── categories/        # Pages par catégorie
│   └── add-ai/            # Formulaire d’ajout
├── components/
│   ├── Navbar.tsx
│   ├── AICard.tsx
│   └── CategoryFilter.tsx
├── data/
│   └── ai.json            # Liste des IA recensées
├── public/
│   ├── logo.svg
│   └── icons/
├── README.md
└── LICENSE
```

---

## 🧠 Exemple de données (`data/ai.json`)

```json
[
  {
    "id": 1,
    "name": "ChatGPT",
    "description": "Assistant IA développé par OpenAI, utile pour le code, le contenu et le brainstorming.",
    "link": "https://chat.openai.com/",
    "category": "Contenu",
    "author": "Docteur-Parfait",
    "date_added": "2025-10-27",
    "utilisation": "Je l’utilise pour générer des idées de textes, corriger mes écrits et trouver des solutions de code rapidement."
  },
  {
    "id": 2,
    "name": "Midjourney",
    "description": "Outil de génération d’images artistiques à partir de texte.",
    "link": "https://midjourney.com/",
    "category": "Images",
    "author": "Chaminade",
    "date_added": "2025-10-27",
    "utilisation": "Je décris une scène en français simple, et Midjourney me génère des visuels magnifiques pour mes designs et présentations."
  }
]
```

---

## 🎯 Objectifs communautaires

* 🔍 Mettre en avant les **IA les plus utiles pour les Togolais**
* 💬 Encourager le **partage d’expériences locales**
* 🤝 Promouvoir la **collaboration open source**
* 🎓 Inspirer la **formation et l’éducation à l’IA**

---

## 🏷️ Hacktoberfest 2025

Ce projet participe au **Hacktoberfest 2025** 🎃
Les contributions avec les labels suivants sont encouragées :

* `hacktoberfest`
* `good first issue`
* `help wanted`

---

## 📝 Licence

Ce projet est sous licence **MIT**.
Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👥 Auteurs

* **Chaminade Dondah Adjolou** – *Créateur du projet* – [@Donchaminade](https://github.com/Donchaminade)

---

## 🙏 Remerciements

* La communauté tech du Togo 🇹🇬
* Les participants du Hacktoberfest
* Tous les passionnés d’IA et d’open source

---

**Fait avec ❤️ par @Donchaminade — AI228 Hub 🇹🇬**