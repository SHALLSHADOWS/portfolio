# Portfolio Lem Israel Aroukoume

Ce dossier contient le code source du portfolio statique destiné à être publié sur GitHub Pages. Il est construit avec Vite, React, TypeScript et Tailwind CSS, et met en avant un design premium avec animations (Framer Motion & Lenis).

## Prérequis

- Node.js ≥ 20
- npm, pnpm ou yarn (les scripts supposent `npm`)

## Installation & développement

```bash
cd portfolio
npm install
npm run dev
```

Scripts disponibles :

- `npm run dev` : lance le serveur Vite en mode développement
- `npm run build` : compile le site (TS + Vite) dans `dist/`
- `npm run preview` : prévisualise le build localement
- `npm run lint` : analyse ESLint (strict)
- `npm run format` : formatte le code avec Prettier

## Structure principale

- `src/App.tsx` : composition des sections
- `src/components/` : layout, animations, UI
- `src/data/` : contenu statique (navigation, projets, process, etc.)
- `src/sections/` : sections du site (`Hero`, `Expertise`, `Projects`, `Highlights`, `Process`, `CV`, `Contact`)
- `public/cv/index.html` : CV statique (prévisualisation & impression PDF)
- `.github/workflows/deploy.yml` : workflow GitHub Pages

## Intégration du CV

- La section `CvSection` embarque un iframe vers `public/cv/index.html` et un bouton “Exporter en PDF” qui déclenche `window.print()` dans l’iframe.
- Ajoutez votre PDF final dans `public/cv/` si besoin (exemple : `public/cv/israel-aroukoume-cv.pdf`) et mettez à jour le bouton si vous souhaitez un téléchargement direct.

## Animations & accessibilité

- Animations Framer Motion (`SplitText`, `RevealCard`, etc.).
- Lenis est désactivé automatiquement si l’utilisateur préfère réduire les animations.
- Tailwind est enrichi (palette `brand`, backgrounds, utilitaires `text-balance`).

## Contact & formulaire

- CTA directs : mailto, Calendly (placeholder), WhatsApp, GitHub.
- Formulaire statique via [formsubmit.co](https://formsubmit.co/) → mettez à jour `_next` si vous créez une page de remerciement personnalisée.

## Déploiement GitHub Pages

1. Vérifiez que la branche par défaut est `main`.
2. Poussez le dossier `portfolio/` dans le dépôt (`npm run build` n’est pas nécessaire, l’action GitHub s’en charge).
3. Le workflow `Deploy to GitHub Pages` s’exécute automatiquement à chaque `git push` sur `main`.
4. La variable `DEPLOY_BASE` définit automatiquement le `base` Vite (format `/nom-du-repo/`). Pour un site utilisateur (`username.github.io`), remplacez la valeur par `"/"` dans `vite.config.ts`.

## Personnalisation rapide

- Couleurs / halos : `tailwind.config.ts` et décorations dans `MainLayout`.
- Contenu textuel : fichiers dans `src/data/`.
- Projets : `src/data/projects.ts` + cartes dans `ProjectsSection`.
- Section highlights : `src/data/highlights.ts`.
- Navigation : `src/data/navigation.ts`.

## Prochaines étapes suggérées

- Ajouter des témoignages ou études de cas détaillées.
- Optimiser les images (ajouter un dossier `public/images/`).
- Créer une page de remerciement pour le formulaire (`public/merci.html`).
- Brancher Calendly/WhatsApp réels dès que disponibles.

---

Pour toute mise à jour, modifiez les fichiers concernés et exécutez `npm run lint` + `npm run build` avant de pousser. Aucune dépendance backend n’est requise : le site est 100 % statique.


