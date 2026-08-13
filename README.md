# Operya — site vitrine

Refonte de [operya.cloud](https://operya.cloud). Landing page unique, structurée
**symptôme → solution** : le visiteur choisit dans le hero ce qui lui coûte le plus
de temps, et la moitié de la page s'adapte à ce choix.

Construit d'après le handoff de design hi-fi `Refonte site Operya`.

## Stack

React 19 · TypeScript · Vite 7 · Tailwind CSS 4. Aucune dépendance UI externe,
aucun backend, aucun cookie.

## Démarrer

```bash
npm install
npm run dev
```

Autres scripts : `npm run build` (typecheck + build dans `dist/`),
`npm run preview` (sert le build), `npm run typecheck`.

## Architecture

| Chemin | Rôle |
|---|---|
| `src/config.ts` | Coordonnées, lien de RDV, informations légales. **Le seul fichier à toucher pour changer un contact.** |
| `src/data/topics.ts` | Contenu des 4 sujets du sélecteur (avant/après, pipeline, chiffres, citation). |
| `src/data/static.ts` | Sections fixes : périmètre, méthode, objections. |
| `src/index.css` | Tokens de design (couleurs, typo, rupture responsive `wide:` à 900px). |
| `src/components/` | Une section de page par fichier. |

Deux états locaux suffisent à toute la page : le sujet sélectionné (`App.tsx`)
et l'état d'envoi du formulaire (`Contact.tsx`). Les mentions légales sont une
vue à part, servie par un routage minimal en hash (`#/mentions-legales`).

## Formulaire de contact

Il n'y a pas de backend : après validation des champs, le formulaire ouvre le
logiciel de messagerie du visiteur avec un message pré-rempli à destination de
`contact@operya.cloud` (adresse définie dans `src/config.ts`).

Pour passer à un envoi réel sans serveur, brancher un service type Formspree
dans `handleSubmit` de `src/components/Contact.tsx`.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit
le site et le publie sur GitHub Pages.

`vite.config.ts` utilise `base: './'` : tous les chemins d'assets sont relatifs,
donc le même build fonctionne à l'identique sur `*.github.io/<repo>/` et sur le
domaine `operya.cloud` à la racine.

### Brancher le domaine operya.cloud

À faire une fois le site validé sur l'URL github.io, et seulement à ce
moment-là — le domaine sert aujourd'hui la version Lovable.

1. Chez le registrar, faire pointer le domaine vers GitHub Pages :
   - enregistrements `A` pour l'apex → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - enregistrement `CNAME` pour `www` → `<compte>.github.io`
2. Dans le dépôt : *Settings → Pages → Custom domain* → `operya.cloud`, puis
   cocher *Enforce HTTPS* une fois le certificat émis.

## ⚠️ Contenus à remplacer avant mise en ligne définitive

Repris tels quels du prototype, ce sont des **exemples de démonstration** :

- tous les chiffres clés (`−9 h`, `×3`, `+18 %`, `1 min`…) dans `src/data/topics.ts` ;
- toutes les citations et les profils clients qui les accompagnent ;
- la photo client, remplacée pour l'instant par un disque neutre (`Proof.tsx`) ;
- les logos des outils connectés, aujourd'hui de simples libellés (`static.ts`) ;
- les informations légales marquées « À compléter » dans `src/config.ts`
  (forme juridique, SIRET, adresse, directeur de la publication).
