import { useEffect, useState } from 'react'
import { TOPICS, type TopicKey } from './data/topics'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BeforeAfter } from './components/BeforeAfter'
import { Pipeline } from './components/Pipeline'
import { Proof } from './components/Proof'
import { Scope } from './components/Scope'
import { Process } from './components/Process'
import { Objections } from './components/Objections'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LegalPage } from './components/LegalPage'

const LEGAL_HASH = '#/mentions-legales'

export default function App() {
  const [topicKey, setTopicKey] = useState<TopicKey>('relances')
  const [route, setRoute] = useState(() => window.location.hash)

  // Routage minimal par hash : le site tient en une page, sauf les mentions
  // légales. Évite une dépendance router et reste compatible avec base './'.
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isLegal = route === LEGAL_HASH

  useEffect(() => {
    if (isLegal) window.scrollTo(0, 0)
  }, [isLegal])

  if (isLegal) return <LegalPage />

  const topic = TOPICS[topicKey]

  return (
    <>
      <Header />
      <main>
        <Hero topic={topicKey} onSelect={setTopicKey} />
        <BeforeAfter topic={topic} />
        <Pipeline topic={topic} topicKey={topicKey} />
        <Proof topic={topic} />
        <Scope />
        <Process />
        <Objections />
        <Contact topic={topic} />
      </main>
      <Footer />
    </>
  )
}
