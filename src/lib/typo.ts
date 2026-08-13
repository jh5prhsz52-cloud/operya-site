const NNBSP = ' ' // espace fine insécable
const NBSP = ' ' // espace insécable

/**
 * Applique les espacements typographiques français : fine insécable avant
 * ? ! ; et à l'intérieur des guillemets, insécable avant :, et avant %.
 * Le contenu est stocké en texte simple ; la ponctuation est corrigée au rendu.
 */
export function fr(text: string): string {
  return text
    .replace(/\s*([?!;])/g, `${NNBSP}$1`)
    .replace(/\s*:/g, `${NBSP}:`)
    .replace(/«\s*/g, `«${NNBSP}`)
    .replace(/\s*»/g, `${NNBSP}»`)
    .replace(/(\d)\s*%/g, `$1${NNBSP}%`)
}
