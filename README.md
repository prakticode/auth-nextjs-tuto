# Auth-Next JS 15 — Authentification **stateless** sans librairie externe

Ce projet démontre comment mettre en place une authentification par **JWT + cookie HttpOnly** dans **Next.js 15 (App Router)** *sans recourir à une solution tierce* (pas d’Auth.js/NextAuth, pas de Firebase, etc.).  
L’objectif est pédagogique : comprendre, ligne par ligne, comment fonctionnent :

- la création et la signature d’un JWT (`HS256` via `jose`);
- le stockage d’un token dans un cookie `HttpOnly ; Secure ; Expires`;
- la validation du token côté serveur (Edge Middleware ou route handler);
- la protection de pages et d’API Routes;
- la déconnexion (suppression du cookie).

> **TL;DR** — Si vous cherchez une solution prête pour la prod, passez sur Auth.js !  
> Ce repo sert surtout à *apprendre* les mécanismes internes.

---

## Démarrage

```bash
# Installe les dépendances
pnpm install      # ou npm / yarn / bun

# Lance le mode dev
pnpm dev
```

Ouvre <http://localhost:3000> pour voir la page d’accueil.

---

## Scripts utiles

| Script  | Fonction                                                |
|---------|---------------------------------------------------------|
| `dev`   | Démarrage en mode développement (`next dev`)            |
| `build` | Build production (`next build`)                         |
| `start` | Démarrage du build (`next start`)                       |
| `lint`  | Lint avec **eslint**                                    |
| `test`  | Tests unitaires (à venir)                               |

---

## Ressources pour aller plus loin

- [Doc Next.js 15](https://nextjs.org/docs) – App Router, Middleware, Edge Runtime  
- [RFC 7519 – JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)  
- [jose](https://github.com/panva/jose) – implémentation JS/JWT/JWE/JWS

---

## Déploiement

Le projet est prêt pour Vercel ; il suffit de :

1. Créer un nouveau projet Vercel.
2. Ajouter la variable d’environnement `SESSION_SECRET`.
3. Déployer 🚀.

---

## Licence

MIT – faites-en bon usage et pensez à sécuriser davantage avant la production (rotation de clé, refresh tokens, CSRF, etc.).
