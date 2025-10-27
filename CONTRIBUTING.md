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
