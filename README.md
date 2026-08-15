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

## Positionnement commercial

Operya démarre et n'a pas encore de référence client publiable. Le site
n'affiche donc **aucun chiffre de résultat ni témoignage** : les fausses preuves
du prototype ont toutes été supprimées. La réassurance repose sur quatre
engagements vérifiables (`GUARANTEES` dans `src/data/static.ts`) et sur la
transparence du flux installé.

L'objection « vous n'avez pas encore de références » est traitée frontalement
dans la section Questions plutôt que contournée.

## ⚠️ À relire avant de communiquer sur le site

Les **tarifs** (490 €/49 € et 990 €/79 €) proviennent de la page `/offres` du
site actuel et sont donc fiables. En revanche, le **détail de ce que contient
chaque offre** (`src/data/offers.ts`) est une proposition rédigée à partir du
positionnement : chaque ligne est à confirmer ou corriger. En particulier ces
affirmations, qui engagent :

- « données hébergées en Europe, sauvegardées chaque jour » ;
- « fonctionne sans réseau et se synchronise au retour de la connexion » ;
- « plusieurs utilisateurs, avec des droits différents selon les rôles » ;
- les délais annoncés (2 semaines / 3 à 4 semaines) et la garantie associée
  « le délai est tenu, ou l'installation n'est pas facturée ».

Restent aussi à compléter :

- les informations légales marquées « À compléter » dans `src/config.ts`
  (forme juridique, SIRET, adresse, directeur de la publication) ;
- les logos des outils connectés, aujourd'hui de simples libellés (`static.ts`).
