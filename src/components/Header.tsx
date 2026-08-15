import { Wordmark } from './Wordmark'

const NAV = [
  { href: '#methode', label: 'La méthode' },
  { href: '#offres', label: 'Offres' },
  { href: '#garanties', label: 'Garanties' },
  { href: '#questions', label: 'Questions' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur-[10px]">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <a href="#top" aria-label="Operya — accueil" className="shrink-0">
          <Wordmark size={52} textSize={27} accent />
        </a>

        {/* Pastille d'état : décorative. Elle ne réapparaît qu'au-delà de
            1180px, sinon elle comprime les liens de navigation. */}
        <p className="hidden flex-1 items-center gap-[9px] pl-[18px] font-mono text-[11px] text-muted-foreground min-[1180px]:flex">
          <span className="size-[7px] shrink-0 rounded-full bg-primary" aria-hidden="true" />
          flux surveillés 24/7
        </p>

        <nav className="flex items-center gap-4 wide:gap-7">
          <ul className="hidden items-center gap-7 text-[14px] wide:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-token border border-primary px-[18px] py-[9px] text-[14px] font-medium text-foreground transition-colors hover:bg-primary/10"
          >
            Parler du projet
          </a>
        </nav>
      </div>
    </header>
  )
}
