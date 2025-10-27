# 🧑‍💻 Guide de contribution – AI228-HUB

Bienvenue et merci de votre intérêt pour contribuer à **AI228-HUB** ! Ce projet open source vise à créer des outils robustes et inclusifs pour les communautés tech. Ce guide vous aidera à contribuer efficacement tout en respectant les règles du dépôt.

---

## 📦 Pré-requis

Avant de commencer, assurez-vous d’avoir :

- Un compte GitHub
- Forké le dépôt ou cloné votre propre branche
- Node.js installé (si applicable)
- Accès à la documentation du projet (`README.md`, `docs/`, etc.)

---

## 🌿 Convention de branches

Les contributeurs sont libres de nommer leurs branches comme ils le souhaitent.  
Cependant, pour garder un historique clair et faciliter la revue de code, nous recommandons :

| Type de contribution | Préfixe recommandé |
|----------------------|--------------------|
| Nouvelle fonctionnalité | `feature/nom-de-la-fonctionnalité` |
| Correction de bug | `fix/nom-du-bug` |
| Documentation | `docs/nom-du-document` |
| Refactorisation | `refactor/nom-du-module` |

Exemples :
- `feature/auth-flow`
- `fix/login-error`
- `docs/contributing-guide`

> 📝 **Note :** Ces conventions sont recommandées, mais non obligatoires.

---

## 🚀 Étapes pour contribuer

1. **Créez une branche dédiée** à partir de `master`
2. **Effectuez vos modifications** localement
3. **Testez votre code** (`npm run build`, `npm run lint`, `npm test`)
4. **Ouvrez une Pull Request** vers `master`
5. **Décrivez clairement votre contribution** dans le champ de description
6. Attendez la revue et la validation par un mainteneur

---

## ✅ Vérifications automatiques

À chaque `push` sur `master`, un workflow GitHub Actions s’exécute pour :

- Vérifier la compilation (`build`)
- Vérifier le linting (`lint`)
- Exécuter les tests (`test`)
- Créer automatiquement un tag versionné (`vX.Y.Z`) si tout est validé

---

## 🔐 Protection des tags

Ce dépôt utilise un ruleset GitHub (`tags-protection-ai228`) pour sécuriser les balises de version :

| Règle | Description |
|-------|-------------|
| Création restreinte | Seuls les mainteneurs ou bots CI peuvent créer des tags |
| Mise à jour restreinte | Les tags existants ne peuvent pas être modifiés |
| Suppression restreinte | Les tags ne peuvent pas être supprimés |
| Historique linéaire requis | Les contributions doivent suivre un historique clair |
| Commits signés requis | Tous les commits doivent être signés |
| Vérifications CI/CD obligatoires | Les tags ne sont créés que si les tests passent |
| Push forcé interdit | Les `git push --force` sont bloqués sur les tags protégés |

---

## 📣 Besoin d’aide ?

Pour toute question, suggestion ou problème :

- Ouvrez une **issue GitHub**
- Mentionnez un mainteneur dans votre PR
- Consultez la documentation du projet

---

Merci de contribuer à AI228-HUB et de faire avancer la tech inclusive et collaborative 🚀



## 🔐 Protection des tags Git – `tags-protection-ai228`

Ce dépôt utilise un **ensemble de règles GitHub** pour sécuriser les balises de version (`tags`) et garantir la stabilité du projet.

### 🎯 Pourquoi cette protection ?
Les tags représentent des versions stables du projet. Pour éviter les erreurs ou les modifications non validées, nous avons mis en place des restrictions sur leur création, modification et suppression.

### ✅ Règles appliquées

| Règle | Description |
|-------|-------------|
| **Création restreinte** | Seuls les mainteneurs ou bots CI peuvent créer des tags (ex. `v1.0.0`) |
| **Mise à jour restreinte** | Les tags existants ne peuvent pas être modifiés |
| **Suppression restreinte** | Les tags ne peuvent pas être supprimés par les contributeurs |
| **Historique linéaire requis** | Les contributions doivent suivre un historique clair (rebase recommandé) |
| **Commits signés requis** | Tous les commits doivent être signés pour garantir leur authenticité |
| **Vérifications CI/CD obligatoires** | Les tags ne sont créés que si les tests `build`, `lint`, `test` sont validés |
| **Push forcé interdit** | Les `git push --force` sont bloqués sur les tags protégés |

### 🛠️ Comment contribuer à une release ?

1. **Crée une Pull Request** avec les modifications proposées.
2. **Assure-toi que les tests passent** (`build`, `lint`, `test`).
3. **Demande une création de tag** via un commentaire ou une issue, si ta PR est validée.
4. **Le tag sera créé automatiquement** par le bot CI ou manuellement par un mainteneur.

### 🎯 Ciblage des tags
refs/tags/v*

Ce ruleset s’applique uniquement aux tags correspondant au motif suivant :


Cela inclut toutes les versions du type `v1.0.0`, `v2.3.1`, etc.

---

Pour toute question ou suggestion, ouvre une issue ou contacte un mainteneur. Merci de contribuer à la stabilité et à la qualité du projet 🚀
