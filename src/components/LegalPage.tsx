import { SITE } from '../config'
import { Wordmark } from './Wordmark'

const SECTIONS = [
  {
    titre: 'Éditeur du site',
    lignes: [
      `Raison sociale : ${SITE.legal.raisonSociale}`,
      `Forme juridique : ${SITE.legal.forme}`,
      `SIRET : ${SITE.legal.siret}`,
      `Adresse : ${SITE.legal.adresse}`,
      `Contact : ${SITE.email}`,
      `Directeur de la publication : ${SITE.legal.directeurPublication}`,
    ],
  },
  {
    titre: 'Hébergement',
    lignes: [SITE.legal.hebergeur],
  },
  {
    titre: 'Propriété intellectuelle',
    lignes: [
      'L’ensemble des contenus de ce site (textes, visuels, marque Operya) est protégé par le droit d’auteur. Toute reproduction, même partielle, est soumise à autorisation préalable.',
    ],
  },
  {
    titre: 'Données personnelles',
    lignes: [
      'Le formulaire de contact n’enregistre aucune donnée sur ce site : il ouvre votre logiciel de messagerie avec un message pré-rempli, que vous envoyez vous-même. Les informations reçues par email servent uniquement à répondre à votre demande et ne sont ni cédées ni revendues.',
      `Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à ${SITE.email}.`,
    ],
  },
  {
    titre: 'Cookies',
    lignes: [
      'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience.',
    ],
  },
]

export function LegalPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="shell flex items-center justify-between gap-6 py-4">
          <a href="#top" aria-label="Operya — accueil">
            <Wordmark size={52} textSize={27} accent />
          </a>
          <a href="#top" className="text-[14px] text-muted-foreground hover:text-foreground">
            ← Retour au site
          </a>
        </div>
      </header>

      <main className="shell pt-[64px] pb-[96px]">
        <p className="eyebrow mb-3">INFORMATIONS LÉGALES</p>
        <h1 className="mt-0 mb-10 text-[34px] leading-[1.2] font-normal tracking-[-0.03em] wide:text-[40px]">
          Mentions légales
        </h1>

        <div className="flex max-w-[680px] flex-col gap-10">
          {SECTIONS.map((section) => (
            <section key={section.titre} className="flex flex-col gap-3">
              <h2 className="m-0 text-[19px] font-medium">{section.titre}</h2>
              {section.lignes.map((ligne) => (
                <p key={ligne} className="m-0 text-[15px] leading-[1.65] text-body">
                  {ligne}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
