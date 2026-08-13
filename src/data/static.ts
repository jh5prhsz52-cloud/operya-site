/** Contenu indépendant du sélecteur : périmètre, méthode, objections. */

export const SCOPE = [
  {
    titre: 'Les relances',
    texte: 'Chaque devis, chaque prospect suit sa séquence. Rien ne dort en boîte mail.',
  },
  {
    titre: 'Les devis et factures',
    texte: 'Générés depuis vos modèles, envoyés et suivis sans ressaisie.',
  },
  {
    titre: 'La saisie',
    texte: 'Les données passent d’un outil à l’autre toutes seules, sans copier-coller.',
  },
  {
    titre: 'Le suivi',
    texte: 'Un tableau lisible en une minute, à la place de douze onglets ouverts.',
  },
] as const

export const PROCESS = [
  {
    num: '01',
    titre: 'On regarde votre semaine',
    texte:
      '45 minutes en visio. Vous racontez, on note ce qui se répète et ce que ça vous coûte. Vous repartez avec la liste, même si on s’arrête là.',
  },
  {
    num: '02',
    titre: 'On installe le premier flux',
    texte:
      'Celui qui vous coûte le plus, d’abord. Deux à trois semaines, dans vos outils, avec vos règles et vos formulations.',
  },
  {
    num: '03',
    titre: 'On ajuste, puis on passe au suivant',
    texte:
      'Un mois de réglages inclus. Ensuite, vous décidez si on continue — sans engagement de durée.',
  },
] as const

export const OBJECTIONS = [
  {
    question: '« Nos process sont trop spécifiques. »',
    reponse:
      'C’est justement le point de départ. On part de votre façon de faire, on n’installe pas un modèle standard.',
  },
  {
    question: '« On n’a pas envie de changer d’outils. »',
    reponse:
      'Vous n’en changez pas. On connecte ceux que vous avez déjà, et personne ne réapprend un logiciel.',
  },
  {
    question: '« Et si ça casse ? »',
    reponse:
      'Chaque flux est surveillé et vous prévient s’il s’arrête. Rien ne tourne en silence.',
  },
  {
    question: '« Combien ça coûte ? »',
    reponse: 'Au flux, annoncé avant de commencer. Le premier échange, lui, ne coûte rien.',
  },
] as const

/** Familles d'outils sur lesquelles les flux se branchent. */
export const CONNECTORS = [
  'votre CRM',
  'votre facturation',
  'votre boîte mail',
  'votre agenda',
] as const
