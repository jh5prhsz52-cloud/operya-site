/**
 * Contenu des 4 sujets du sélecteur.
 *
 * Aucun chiffre ni témoignage ici : Operya démarre et n'a pas encore de
 * référence publiable. La réassurance passe par les garanties (`static.ts`)
 * et par la transparence du flux, pas par de la preuve sociale inventée.
 */

export type TopicKey = 'relances' | 'devis' | 'saisie' | 'reporting'

export type Step = {
  titre: string
  detail: string
}

export type Topic = {
  label: string
  avant: string
  apres: string
  fluxTitre: string
  delai: string
  steps: [Step, Step, Step]
  ctaTitre: string
}

export const TOPIC_ORDER: TopicKey[] = ['relances', 'devis', 'saisie', 'reporting']

export const TOPICS: Record<TopicKey, Topic> = {
  relances: {
    label: 'Les relances',
    avant:
      'Vous relancez de mémoire, entre deux rendez-vous. Certains devis restent sans réponse simplement parce que personne n’y est revenu.',
    apres:
      'Chaque devis part avec sa séquence de relance. Vous ne relancez plus : vous répondez à ceux qui reviennent.',
    fluxTitre: 'Un devis envoyé, trois relances, une décision.',
    delai: '2 semaines',
    steps: [
      {
        titre: 'Devis envoyé',
        detail: 'Le devis part de votre outil habituel et entre dans le suivi automatiquement.',
      },
      {
        titre: 'J+3 · J+8 · J+15',
        detail:
          'Trois relances écrites avec vos mots, envoyées depuis votre adresse. Elles s’arrêtent dès qu’il répond.',
      },
      {
        titre: 'Réponse ou clôture',
        detail:
          'Signé, refusé ou sans réponse : le dossier se range tout seul dans la bonne colonne.',
      },
    ],
    ctaTitre: 'Parlons de vos relances.',
  },

  devis: {
    label: 'Les devis',
    avant:
      'Chaque devis se refait à la main : on repart du dernier fichier, on corrige les lignes, on oublie une remise, on renvoie.',
    apres:
      'Le devis se génère depuis vos modèles et vos tarifs, part signé électroniquement et se retrouve dans votre suivi sans ressaisie.',
    fluxTitre: 'De la demande au devis signé, sans repasser par le tableur.',
    delai: '3 semaines',
    steps: [
      {
        titre: 'Demande reçue',
        detail: 'Formulaire, mail ou appel : la demande crée une fiche avec le bon interlocuteur.',
      },
      {
        titre: 'Devis généré',
        detail: 'Vos modèles, vos tarifs, vos conditions. Vous relisez, vous validez, il part.',
      },
      {
        titre: 'Signé et classé',
        detail: 'Signature en ligne, archivage, facture préparée. Rien à recopier ailleurs.',
      },
    ],
    ctaTitre: 'Parlons de vos devis.',
  },

  saisie: {
    label: 'La saisie',
    avant:
      'Les mêmes informations sont recopiées dans trois endroits différents. Une erreur quelque part, et plus personne ne sait quel fichier fait foi.',
    apres:
      'Les données circulent d’un outil à l’autre. Une saisie unique, au bon endroit, et tout le reste suit.',
    fluxTitre: 'Saisir une fois, retrouver l’information partout.',
    delai: '2 à 4 semaines',
    steps: [
      {
        titre: 'Point d’entrée unique',
        detail: 'On choisit ensemble l’outil qui fait référence pour chaque type d’information.',
      },
      {
        titre: 'Synchronisation',
        detail: 'Les autres outils se mettent à jour seuls, dans les deux sens quand c’est utile.',
      },
      {
        titre: 'Contrôle',
        detail: 'Les incohérences remontent dans une liste courte au lieu de dormir dans un fichier.',
      },
    ],
    ctaTitre: 'Parlons de votre saisie.',
  },

  reporting: {
    label: 'Le reporting',
    avant:
      'Le point mensuel se prépare la veille au soir, à coups d’exports et de copier-coller. Les chiffres arrivent trop tard pour changer quoi que ce soit.',
    apres:
      'Un tableau à jour en permanence, lisible en une minute, avec les trois chiffres qui décident vraiment de votre mois.',
    fluxTitre: 'Les chiffres arrivent à vous, pas l’inverse.',
    delai: '2 semaines',
    steps: [
      {
        titre: 'Sources branchées',
        detail: 'Facturation, CRM, planning : on va chercher les données là où elles vivent déjà.',
      },
      {
        titre: 'Tableau unique',
        detail: 'Trois à cinq indicateurs choisis avec vous. Pas de graphique décoratif.',
      },
      {
        titre: 'Point hebdo automatique',
        detail: 'Un récapitulatif arrive chaque lundi matin, prêt à être lu en réunion.',
      },
    ],
    ctaTitre: 'Parlons de votre pilotage.',
  },
}
