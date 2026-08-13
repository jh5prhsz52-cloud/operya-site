import { TOPIC_ORDER, TOPICS, type TopicKey } from '../data/topics'
import { fr } from '../lib/typo'

type Props = {
  topic: TopicKey
  onSelect: (key: TopicKey) => void
}

export function Hero({ topic, onSelect }: Props) {
  return (
    <section id="top" className="grid-backdrop border-b border-border">
      <div className="shell pt-[64px] pb-[56px] wide:pt-[96px] wide:pb-[64px]">
        <p className="eyebrow mb-[28px]">
          operya · flux d’automatisation sur mesure · pme &amp; indépendants
        </p>

        <h1 className="m-0 max-w-[800px] text-[38px] leading-[1.14] font-medium tracking-[-0.03em] text-pretty wide:text-[60px] wide:leading-[1.12]">
          Qu’est-ce qui vous prend le plus de temps{' '}
          <span className="gradient-text">{fr('chaque semaine ?')}</span>
        </h1>

        <p className="mt-[28px] mb-0 max-w-[560px] text-[17px] leading-[1.65] text-body text-pretty wide:text-[18px]">
          {fr(
            'Choisissez, et la page vous montre exactement ce qu’on installerait chez vous : le flux, le délai, le résultat.',
          )}
        </p>

        <div
          role="group"
          aria-label="Ce qui vous prend le plus de temps"
          className="mt-[36px] flex flex-wrap gap-[10px]"
        >
          {TOPIC_ORDER.map((key) => {
            const active = key === topic
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(key)}
                className={[
                  'rounded-token border px-[18px] py-[11px] font-mono text-[14px] transition-colors duration-150',
                  'min-h-[44px] cursor-pointer',
                  active
                    ? 'border-primary bg-primary font-medium text-background'
                    : 'border-border bg-card text-foreground hover:border-primary',
                ].join(' ')}
              >
                {TOPICS[key].label}
              </button>
            )
          })}
        </div>

        {/* Le changement de sujet réécrit la moitié de la page : on l'annonce
            aux lecteurs d'écran, qui ne verraient rien bouger autrement. */}
        <p aria-live="polite" className="sr-only">
          Sujet sélectionné : {TOPICS[topic].label}. Le flux, les chiffres et le formulaire
          ci-dessous ont été mis à jour.
        </p>
      </div>
    </section>
  )
}
