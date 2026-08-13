import { OBJECTIONS } from '../data/static'
import { fr } from '../lib/typo'

export function Objections() {
  return (
    <section id="questions" className="border-t border-border bg-card">
      <div className="shell grid grid-cols-1 gap-10 py-[56px] wide:grid-cols-2 wide:gap-x-[56px] wide:gap-y-[40px] wide:py-[72px]">
        {OBJECTIONS.map((item) => (
          <div key={item.question} className="flex flex-col gap-2">
            <h3 className="m-0 text-[16px] font-medium text-pretty">{fr(item.question)}</h3>
            <p className="m-0 text-[15px] leading-[1.65] text-body">{fr(item.reponse)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
