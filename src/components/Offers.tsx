import { OFFERS, CUSTOM_OFFER, type Offer } from '../data/offers'
import { fr } from '../lib/typo'

export function Offers() {
  return (
    <section id="offres" className="border-t border-border bg-card">
      <div className="shell pt-[64px] pb-[56px] wide:pt-[80px] wide:pb-[72px]">
        <p className="eyebrow mb-3">OFFRES &amp; TARIFS</p>
        <h2 className="mt-0 mb-3 max-w-[620px] text-[27px] leading-[1.25] font-normal tracking-[-0.02em] text-pretty wide:text-[34px]">
          Deux façons de commencer, prix annoncés.
        </h2>
        <p className="mt-0 mb-10 max-w-[560px] text-[16px] leading-[1.65] text-body">
          {fr(
            'Une installation payée une fois, puis un abonnement mensuel qui couvre l’hébergement et la surveillance. Sans engagement de durée.',
          )}
        </p>

        <div className="grid grid-cols-1 gap-6 wide:grid-cols-2">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Le sur-mesure reste une ligne discrète : il ne doit pas concurrencer
            les deux offres chiffrées, juste exister pour ceux qui la cherchent. */}
        <div className="mt-6 flex flex-col gap-3 rounded-[14px] border border-dashed border-border p-[24px] wide:flex-row wide:items-center wide:justify-between wide:gap-8">
          <div className="max-w-[640px]">
            <h3 className="m-0 text-[16px] font-medium">{CUSTOM_OFFER.nom}</h3>
            <p className="mt-2 mb-0 text-[14px] leading-[1.6] text-body">
              {fr(CUSTOM_OFFER.texte)}
            </p>
          </div>
          <span className="shrink-0 font-mono text-[15px] text-primary">{CUSTOM_OFFER.prix}</span>
        </div>
      </div>
    </section>
  )
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      className={[
        'relative flex flex-col rounded-[14px] border bg-background p-[28px]',
        offer.vedette ? 'border-primary' : 'border-border',
      ].join(' ')}
    >
      {offer.vedette && (
        <span className="absolute -top-[10px] left-[28px] rounded-[5px] bg-primary px-[9px] py-1 font-mono text-[11px] font-medium text-background">
          recommandé
        </span>
      )}

      <h3 className="m-0 text-[19px] font-medium">{offer.nom}</h3>
      <p className="mt-2 mb-0 text-[15px] leading-[1.6] text-body">{fr(offer.promesse)}</p>

      <p className="mt-[22px] mb-0 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-mono text-[40px] leading-none font-medium tracking-[-0.04em] text-primary">
          {offer.prixInstallation}
        </span>
        <span className="text-[14px] text-muted-foreground">à l’installation</span>
      </p>
      <p className="mt-2 mb-0 font-mono text-[14px] text-body">
        puis {offer.prixMensuel}/mois
      </p>

      <ul className="mt-[22px] mb-0 flex list-none flex-col gap-[10px] border-t border-border p-0 pt-[22px]">
        {offer.inclus.map((ligne) => (
          <li key={ligne} className="flex gap-[10px] text-[14px] leading-[1.6] text-body">
            <span
              aria-hidden="true"
              className="mt-[7px] size-[6px] shrink-0 rounded-[2px] bg-primary"
            />
            {fr(ligne)}
          </li>
        ))}
      </ul>

      <dl className="mt-[22px] mb-0 flex flex-col gap-[10px] border-t border-border pt-[22px] text-[13px] leading-[1.6]">
        <div className="flex flex-col gap-1">
          <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
            ABONNEMENT
          </dt>
          <dd className="m-0 text-body">{fr(offer.abonnement)}</dd>
        </div>
        <div className="flex flex-col gap-1">
          <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
            MISE EN PLACE
          </dt>
          <dd className="m-0 text-body">{offer.delai}</dd>
        </div>
        <div className="flex flex-col gap-1">
          <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
            POUR QUI
          </dt>
          <dd className="m-0 text-body">{fr(offer.pourQui)}</dd>
        </div>
      </dl>

      <a
        href="#contact"
        className={[
          'rounded-token mt-[26px] min-h-[44px] px-[24px] py-[13px] text-center text-[15px] font-medium transition-opacity',
          offer.vedette
            ? 'gradient-bg glow text-background hover:opacity-90'
            : 'border border-primary text-foreground hover:bg-primary/10',
        ].join(' ')}
      >
        {offer.cta}
      </a>
    </article>
  )
}
