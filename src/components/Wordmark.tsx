import mark from '../assets/operya-mark.png'

type Props = {
  /** Taille de la marque en px. */
  size: number
  /** Taille du texte « Operya » en px. */
  textSize: number
  /** Le « rya » passe en accent dans le header, reste blanc dans le footer. */
  accent?: boolean
}

export function Wordmark({ size, textSize, accent = false }: Props) {
  return (
    <span className="flex items-center gap-[10px]">
      <img
        src={mark}
        alt=""
        width={size}
        height={size}
        className="block shrink-0"
        style={{ width: size, height: size }}
      />
      <span
        className="font-semibold tracking-[-0.01em] whitespace-nowrap"
        style={{ fontSize: textSize }}
      >
        Ope<span className={accent ? 'text-accent' : undefined}>rya</span>
      </span>
    </span>
  )
}
