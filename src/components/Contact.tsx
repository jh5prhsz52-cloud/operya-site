import { useState, type FormEvent } from 'react'
import type { Topic } from '../data/topics'
import { SITE } from '../config'
import { fr } from '../lib/typo'

type Errors = Partial<Record<'nom' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function Contact({ topic }: { topic: Topic }) {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(): Errors {
    const next: Errors = {}
    if (!nom.trim()) next.nom = 'Indiquez votre nom.'
    if (!email.trim()) next.email = 'Indiquez votre email.'
    else if (!EMAIL_RE.test(email.trim())) next.email = 'Cet email ne semble pas valide.'
    if (message.trim().length < 10) next.message = 'Décrivez votre besoin en quelques mots.'
    return next
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // Pas de backend : on ouvre le client mail avec un message pré-rempli.
    const subject = `Demande via operya.cloud — ${topic.label.toLowerCase()}`
    const body = [
      `Nom : ${nom.trim()}`,
      `Email : ${email.trim()}`,
      `Sujet : ${topic.label}`,
      '',
      message.trim(),
    ].join('\n')
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="shell grid grid-cols-1 items-start gap-10 pt-[64px] pb-[72px] wide:grid-cols-2 wide:gap-16 wide:pt-[88px] wide:pb-[96px]">
        <div className="flex flex-col gap-[18px]">
          <h2 className="m-0 text-[30px] leading-[1.2] font-normal tracking-[-0.03em] text-pretty wide:text-[40px]">
            {topic.ctaTitre}
          </h2>
          <p className="m-0 max-w-[400px] text-[16px] leading-[1.65] text-body wide:text-[17px]">
            {fr(
              'Décrivez votre semaine en trois lignes. On vous répond sous 24 h avec une première lecture, sans rendez-vous imposé.',
            )}
          </p>
          <p className="m-0 text-[14px] text-muted-foreground">
            Ou écrivez directement à{' '}
            <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[14px]">
          <Field
            id="nom"
            label="Votre nom"
            value={nom}
            onChange={setNom}
            error={errors.nom}
            autoComplete="name"
          />
          <Field
            id="email"
            label="Email professionnel"
            type="email"
            value={email}
            onChange={setEmail}
            error={errors.email}
            autoComplete="email"
          />

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="message" className="sr-only">
              Ce qui vous prend le plus de temps en ce moment
            </label>
            <textarea
              id="message"
              className="field h-[130px] resize-none py-[14px]"
              placeholder="Ce qui vous prend le plus de temps en ce moment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="m-0 text-[13px] text-muted-foreground">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="gradient-bg glow rounded-token min-h-[44px] cursor-pointer self-start border-0 px-[30px] py-[15px] text-[15px] font-medium text-background transition-opacity hover:opacity-90"
          >
            {sent ? 'Message envoyé' : 'Envoyer'}
          </button>

          <p aria-live="polite" className="m-0 text-[13px] text-muted-foreground">
            {sent
              ? fr('Merci — réponse sous 24 h.')
              : fr('Réponse sous 24 h, par une vraie personne.')}
          </p>

          <p className="m-0 text-[13px] text-muted-foreground">
            Vous préférez parler de vive voix&nbsp;?{' '}
            <a
              href={SITE.calUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              15 minutes de diagnostic
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  autoComplete?: string
}

function Field({ id, label, value, onChange, error, type = 'text', autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="field h-[52px]"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="m-0 text-[13px] text-muted-foreground">
          {error}
        </p>
      )}
    </div>
  )
}
