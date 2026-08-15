import { GUARANTEES } from '../data/static'
import { SITE } from '../config'
import { fr } from '../lib/typo'

/**
 * Remplace la section « preuve » du prototype. Tant qu'Operya n'a pas de
 * référence client publiable, la réassurance repose sur des engagements
 * vérifiables plutôt que sur des chiffres invérifiables.
 */
export function Guarantees() {
  return (
    <section id="garanties" className="border-t border-border">
      <div className="shell pt-[64px] pb-[56px] wide:pt-[80px] wide:pb-[72px]">
        <p className="eyebrow mb-3">CE QUI EST GARANTI</p>
        <h2 className="mt-0 mb-10 max-w-[620px] text-[27px] leading-[1.25] font-normal tracking-[-0.02em] text-pretty wide:text-[34px]">
          Operya démarre. Voilà ce qui vous protège.
        </h2>

        <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 wide:grid-cols-2 wide:gap-x-[56px] wide:gap-y-9">
          {GUARANTEES.map((item, i) => (
            <li key={item.titre} className="flex gap-[18px]">
              <span
                aria-hidden="true"
                className="font-mono text-[13px] leading-[1.5] text-primary"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-[17px] font-medium text-pretty">{fr(item.titre)}</h3>
                <p className="m-0 text-[15px] leading-[1.65] text-body">{fr(item.texte)}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href={SITE.calUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-token mt-10 inline-block min-h-[44px] border border-primary px-[24px] py-[13px] text-[15px] font-medium text-foreground transition-colors hover:bg-primary/10"
        >
          Réserver le diagnostic gratuit
        </a>
      </div>
    </section>
  )
}
