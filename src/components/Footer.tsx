import { Wordmark } from './Wordmark'
import { SITE } from '../config'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col items-start justify-between gap-4 py-8 text-[13px] text-muted-foreground wide:flex-row wide:items-center wide:gap-6">
        <Wordmark size={40} textSize={21} />
        <p className="m-0">
          © {new Date().getFullYear()} {SITE.name} ·{' '}
          <a href="#/mentions-legales" className="text-muted-foreground hover:text-foreground">
            Mentions légales
          </a>
        </p>
      </div>
    </footer>
  )
}
