/** Réglages du site — le seul fichier à toucher pour changer les coordonnées. */

export const SITE = {
  name: 'Operya',
  url: 'https://operya.cloud',
  email: 'contact@operya.cloud',
  /** Prise de rendez-vous, proposée en second recours seulement. */
  calUrl: 'https://app.cal.eu/operya/diagnostic-operya-15-min',
  /** Mentions légales — à compléter avec les vraies informations. */
  legal: {
    raisonSociale: 'Operya',
    forme: 'À compléter',
    siret: 'À compléter',
    adresse: 'À compléter',
    directeurPublication: 'À compléter',
    hebergeur: 'GitHub Pages — GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  },
} as const
