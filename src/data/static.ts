/** Contenu indépendant du sélecteur : périmètre, cibles, garanties, objections. */

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

export const AUDIENCES = [
  {
    titre: 'Consultants & indépendants',
    texte: 'Récupérer les heures administratives qui ne se facturent pas.',
  },
  {
    titre: 'PME & structures locales',
    texte: 'Structurer sans imposer un nouvel outil à toute l’équipe.',
  },
  {
    titre: 'Associations & organismes',
    texte: 'Suivre les adhésions, les demandes et les événements au même endroit.',
  },
] as const

export const PROCESS = [
  {
    num: '01',
    titre: 'On regarde votre semaine',
    texte:
      '45 minutes en visio, gratuites. Vous racontez, on note ce qui se répète et ce que ça vous coûte. Vous repartez avec la liste, même si on s’arrête là.',
  },
  {
    num: '02',
    titre: 'On installe le premier flux',
    texte:
      'Celui qui vous coûte le plus, d’abord. Deux à quatre semaines selon l’offre, dans vos outils, avec vos règles et vos formulations.',
  },
  {
    num: '03',
    titre: 'On ajuste, puis on passe au suivant',
    texte:
      'Un mois de réglages inclus. Ensuite, vous décidez si on continue — l’abonnement s’arrête quand vous voulez.',
  },
] as const

/**
 * Ce qui remplace la preuve client tant qu'il n'y a pas de références
 * publiables : des engagements vérifiables plutôt que des chiffres invérifiables.
 */
export const GUARANTEES = [
  {
    titre: 'Le prix est annoncé avant de commencer',
    texte:
      'Le devis est ferme. Pas de dépassement, pas de ligne supplémentaire découverte à la livraison.',
  },
  {
    titre: 'Le délai est tenu, ou l’installation n’est pas facturée',
    texte:
      'Deux semaines pour un flux, trois à quatre pour une application. Si le retard vient de nous, vous ne payez que l’abonnement.',
  },
  {
    titre: 'Sans engagement de durée',
    texte:
      'L’abonnement s’arrête quand vous le décidez, par un simple email. Vos données restent les vôtres et repartent avec vous.',
  },
  {
    titre: 'Le premier échange ne coûte rien',
    texte:
      'Quinze minutes pour regarder votre semaine. Vous repartez avec la liste de ce qui est automatisable, même si on s’arrête là.',
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
    question: '« Pourquoi un abonnement mensuel ? »',
    reponse:
      'Un flux qui tourne doit être hébergé, surveillé, et corrigé quand un de vos outils change de son côté. C’est ce que couvre l’abonnement. Sans lui, le flux s’arrête à la première mise à jour.',
  },
  {
    question: '« Et si je veux arrêter ? »',
    reponse:
      'Un email suffit, l’abonnement s’arrête à la fin du mois en cours. On vous remet vos données et la documentation du flux pour que quelqu’un d’autre puisse le reprendre.',
  },
  {
    question: '« Vous n’avez pas encore de références. »',
    reponse:
      'C’est vrai, Operya démarre. C’est aussi pour ça que le diagnostic est gratuit, que le prix est ferme et que rien ne vous engage dans la durée : vous jugez sur la méthode et sur le premier flux livré, pas sur une promesse.',
  },
] as const

/** Familles d'outils sur lesquelles les flux se branchent. */
export const CONNECTORS = [
  'votre CRM',
  'votre facturation',
  'votre boîte mail',
  'votre agenda',
] as const
