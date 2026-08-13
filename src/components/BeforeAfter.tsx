import type { Topic } from '../data/topics'
import { fr } from '../lib/typo'

export function BeforeAfter({ topic }: { topic: Topic }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="shell grid grid-cols-1 gap-10 py-[56px] wide:grid-cols-2 wide:gap-[56px] wide:py-[72px]">
        <div className="flex flex-col gap-[14px]">
          <h2 className="eyebrow m-0">AUJOURD’HUI</h2>
          <p className="m-0 text-[18px] leading-[1.6] text-body text-pretty wide:text-[20px]">
            {fr(topic.avant)}
          </p>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h2 className="eyebrow m-0 text-primary">APRÈS</h2>
          <p className="m-0 text-[18px] leading-[1.6] text-body text-pretty wide:text-[20px]">
            {fr(topic.apres)}
          </p>
        </div>
      </div>
    </section>
  )
}
