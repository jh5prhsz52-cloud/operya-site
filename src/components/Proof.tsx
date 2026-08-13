import type { Topic } from '../data/topics'
import { fr } from '../lib/typo'

export function Proof({ topic }: { topic: Topic }) {
  const stats = [
    { value: topic.stat1, label: topic.stat1Label },
    { value: topic.stat2, label: topic.stat2Label },
  ]

  return (
    <section id="cas" className="border-t border-border">
      <div className="shell grid grid-cols-1 items-start gap-10 py-[56px] wide:grid-cols-[1fr_1.15fr] wide:gap-16 wide:py-[72px]">
        <div className="flex flex-col gap-9">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="m-0 font-mono text-[44px] leading-none font-medium tracking-[-0.04em] text-primary wide:text-[52px]">
                {stat.value}
              </p>
              <p className="mt-[10px] mb-0 max-w-[220px] text-[15px] leading-[1.55] text-body">
                {fr(stat.label)}
              </p>
            </div>
          ))}
        </div>

        <figure className="m-0 flex flex-col gap-[22px]">
          <blockquote className="m-0 text-[21px] leading-[1.6] tracking-[-0.01em] text-pretty wide:text-[24px]">
            {fr(topic.citation)}
          </blockquote>
          <figcaption className="flex items-center gap-[14px]">
            {/* Disque neutre en attendant la photo client — volontairement
                sobre plutôt que « placeholder rayé », qui se verrait en ligne. */}
            <span
              aria-hidden="true"
              className="flex size-[44px] shrink-0 items-center justify-center rounded-full border border-border bg-elevated font-mono text-[18px] leading-none text-primary"
            >
              ”
            </span>
            <span className="text-[13px] leading-[1.5] text-body">{topic.auteur}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
