# Auth-Next JS 15 — Authentification **stateless** sans librairie externe

Ce projet démontre comment mettre en place une authentification par **JWT + cookie HttpOnly** dans **Next.js 15 (App Router)** *sans recourir à une solution tierce* (pas d’Auth.js/NextAuth, pas de Firebase, etc.).  
L’objectif est pédagogique : comprendre, ligne par ligne, comment fonctionnent :

- la création et la signature d’un JWT (`HS256` via `jose`) ;
- le stockage d’un token dans un cookie `HttpOnly ; Secure ; Expires` ;
- la validation du token côté serveur (Edge Middleware ou route handler) ;
- la protection de pages et d’API Routes ;
- la déconnexion (suppression du cookie).

> **TL;DR** — Si vous cherchez une solution prête pour la prod, passez sur Auth.js !  
> Ce repo sert surtout à *apprendre* les mécanismes internes.

---

## Démarrage

```bash
# Installe les dépendances
pnpm install      # ou npm / yarn / bun

# Lance le mode dev
npm run dev
```

## Variables d'environnement

Pour que tout fonctionne bien, n'oubliez pas de créer un fichier `.env` à la racine du projet avec la variable suivante :
```bash
# .env
SESSION_SECRET="secret" # remplace par une valeur aléatoire générée par un générateur de clé base64
```
