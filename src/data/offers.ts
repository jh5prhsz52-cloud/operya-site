/**
 * Offres et tarifs.
 *
 * Les montants viennent de la page /offres du site actuel (490 €/49 € et
 * 990 €/79 €). Le détail de ce qui est inclus est une PROPOSITION rédigée à
 * partir du positionnement Operya : à relire et corriger ligne par ligne.
 */

export type Offer = {
  id: string
  nom: string
  promesse: string
  prixInstallation: string
  prixMensuel: string
  delai: string
  pourQui: string
  inclus: string[]
  abonnement: string
  cta: string
  /** Mise en avant visuelle : bordure primaire + badge. */
  vedette?: boolean
}

export const OFFERS: Offer[] = [
  {
    id: 'automatisation',
    nom: 'Automatisation essentielle',
    promesse: 'Un flux qui tourne tout seul, branché sur les outils que vous avez déjà.',
    prixInstallation: '490 €',
    prixMensuel: '49 €',
    delai: '2 semaines',
    pourQui: 'Indépendants et petites équipes qui perdent des demandes en route.',
    inclus: [
      'Un flux automatisé installé de bout en bout, de la demande jusqu’au classement',
      'Connexion à votre boîte mail, votre agenda et votre outil de suivi actuels',
      'Les messages automatiques écrits avec vos mots, envoyés depuis votre adresse',
      'Une alerte qui vous prévient si le flux s’arrête',
      'Le journal des exécutions, consultable à tout moment',
    ],
    abonnement:
      'Hébergement, surveillance 24/7, corrections et ajustements du flux quand vos outils évoluent.',
    cta: 'Démarrer avec cette offre',
  },
  {
    id: 'application',
    nom: 'Application métier',
    promesse:
      'Votre outil interne, à votre vocabulaire, accessible depuis un téléphone comme depuis un poste.',
    prixInstallation: '990 €',
    prixMensuel: '79 €',
    delai: '3 à 4 semaines',
    pourQui: 'PME et structures qui jonglent entre un tableur, des mails et trois onglets.',
    inclus: [
      'Une application sur mesure, installable sur mobile et ordinateur sans passer par un store',
      'Vos écrans, vos champs, votre vocabulaire métier — pas un logiciel à réapprendre',
      'Plusieurs utilisateurs, avec des droits différents selon les rôles',
      'Fonctionne sans réseau et se synchronise au retour de la connexion',
      'Vos données hébergées en Europe, sauvegardées chaque jour',
    ],
    abonnement:
      'Hébergement, sauvegardes quotidiennes, surveillance et évolutions mineures au fil de l’eau.',
    cta: 'Démarrer avec cette offre',
    vedette: true,
  },
]

export const CUSTOM_OFFER = {
  nom: 'Les deux, ou plus',
  texte:
    'Application métier et flux automatisés qui se parlent, ou plusieurs flux à installer d’affilée. Le périmètre se décide au diagnostic, et le prix est annoncé avant qu’on commence.',
  prix: 'Sur devis',
}
