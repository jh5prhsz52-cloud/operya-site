import { PROCESS } from '../data/static'
import { fr } from '../lib/typo'

export function Process() {
  return (
    <section className="shell pt-[64px] pb-[56px] wide:pt-[80px] wide:pb-[72px]">
      <h2 className="eyebrow mt-0 mb-9">COMMENT ÇA SE PASSE</h2>
      <ol className="m-0 grid list-none grid-cols-1 gap-9 p-0 wide:grid-cols-3">
        {PROCESS.map((step) => (
          <li
            key={step.num}
            className="flex flex-col gap-[10px] border-t-2 border-primary pt-[18px]"
          >
            <span className="text-[13px] text-muted-foreground">{step.num}</span>
            <h3 className="m-0 text-[19px] font-medium text-pretty">{step.titre}</h3>
            <p className="m-0 text-[15px] leading-[1.65] text-body">{fr(step.texte)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
