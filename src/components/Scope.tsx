import { SCOPE, AUDIENCES } from '../data/static'
import { fr } from '../lib/typo'

export function Scope() {
  return (
    <section className="border-t border-border bg-card">
      <div className="shell py-[56px] wide:py-[72px]">
        <h2 className="eyebrow mt-0 mb-9">CE QU’ON PREND EN CHARGE</h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 wide:grid-cols-4">
          {SCOPE.map((item) => (
            <li key={item.titre} className="flex flex-col gap-[10px]">
              <span
                aria-hidden="true"
                className="size-[26px] rounded-lg bg-primary/15"
              />
              <h3 className="m-0 text-[16px] font-medium">{item.titre}</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-body">{fr(item.texte)}</p>
            </li>
          ))}
        </ul>

        <h2 className="eyebrow mt-[56px] mb-9">POUR QUI</h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 wide:grid-cols-3">
          {AUDIENCES.map((item) => (
            <li key={item.titre} className="flex flex-col gap-2 border-t border-border pt-[18px]">
              <h3 className="m-0 text-[16px] font-medium">{item.titre}</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-body">{fr(item.texte)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
