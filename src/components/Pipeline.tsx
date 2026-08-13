import type { Topic, TopicKey } from '../data/topics'
import { CONNECTORS } from '../data/static'
import { fr } from '../lib/typo'

type Props = {
  topic: Topic
  topicKey: TopicKey
}

const BADGES = (delai: string) => [
  `installé en ${delai}`,
  'vos outils actuels',
  'alerte si le flux s’arrête',
  'journal des exécutions',
]

export function Pipeline({ topic, topicKey }: Props) {
  return (
    <section id="methode" className="shell pt-[64px] pb-[56px] wide:pt-[80px] wide:pb-[72px]">
      <p className="eyebrow mb-3">LE FLUX QU’ON INSTALLE</p>
      <h2 className="mt-0 mb-10 max-w-[620px] text-[27px] leading-[1.25] font-normal tracking-[-0.02em] text-pretty wide:text-[34px]">
        {fr(topic.fluxTitre)}
      </h2>

      <div className="overflow-hidden rounded-[14px] border border-border bg-card">
        {/* Barre de titre du pipeline */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-[18px] py-3 font-mono text-[11px] text-muted-foreground">
          <span>pipeline · {topicKey}_v1</span>
          <span className="flex items-center gap-[7px]">
            <span className="size-[7px] rounded-full bg-primary" aria-hidden="true" />
            en production
          </span>
        </div>

        {/* Les 3 nœuds : en ligne au-dessus de 900px, empilés en dessous.
            Les séparateurs pointillés basculent de vertical à horizontal. */}
        <ol className="m-0 flex list-none flex-col p-[24px] wide:flex-row wide:items-stretch wide:px-[28px] wide:py-8">
          {topic.steps.map((step, i) => (
            <li
              key={step.titre}
              className={[
                'flex-1',
                i > 0
                  ? 'mt-6 border-t border-dashed border-border pt-6 wide:mt-0 wide:border-t-0 wide:border-l wide:pt-0'
                  : '',
                'wide:px-6',
                i === 0 ? 'wide:pl-0' : '',
                i === topic.steps.length - 1 ? 'wide:pr-0' : '',
              ].join(' ')}
            >
              <div className="flex items-center gap-[10px]">
                <span
                  aria-hidden="true"
                  className={[
                    'size-[10px] shrink-0 rounded-[3px]',
                    i === 1 ? 'bg-primary' : 'border-[1.5px] border-primary',
                  ].join(' ')}
                />
                <span className="font-mono text-[11px] font-medium text-muted-foreground">
                  étape {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-[14px] mb-0 text-[15px] font-medium">{fr(step.titre)}</h3>
              <p className="mt-[6px] mb-0 text-[14px] leading-[1.6] text-body">
                {fr(step.detail)}
              </p>
            </li>
          ))}
        </ol>

        <ul className="m-0 flex list-none flex-wrap gap-2 border-t border-border px-[18px] py-3 font-mono text-[11px] text-muted-foreground">
          {BADGES(topic.delai).map((badge) => (
            <li key={badge} className="rounded-[5px] border border-border px-[9px] py-1">
              {fr(badge)}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-[14px]">
        <p className="m-0 font-mono text-[11px] text-muted-foreground">se branche sur</p>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {CONNECTORS.map((tool) => (
            <li
              key={tool}
              className="rounded-[6px] border border-dashed border-border px-3 py-[6px] font-mono text-[12px] text-body"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
