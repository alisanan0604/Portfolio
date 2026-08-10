import { Code2, Sparkles, Target } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/animations/reveal'
import { motion } from 'framer-motion'
import { site } from '@/data/site'

const records = [
  { icon: Code2, label: 'Focus', value: 'Full-Stack Development' },
  { icon: Sparkles, label: 'Interest', value: 'AI-Powered Applications' },
  { icon: Target, label: 'Approach', value: 'Build. Test. Improve.' },
]

export function About() {
  return (
    <section id="about" className="section-wrap" aria-labelledby="about-title">
      <Reveal>
        <p className="section-kicker">Record 01 · Field Notes</p>
        <h2 id="about-title" className="section-title">Personal Record</h2>
      </Reveal>

      <div className="about-layout">
        <Reveal delay={0.08}>
          <article className="field-notes parchment">
            <p className="micro-label document-number">Document SA / Profile / 001</p>
            <p>{site.about}</p>
          </article>
        </Reveal>

        <StaggerGroup className="profile-ledger leather-panel">
          {records.map(({ icon: Icon, label, value }) => (
            <motion.div key={label} className="ledger-item" variants={staggerItem}>
              <Icon size={20} aria-hidden="true" />
              <span className="micro-label block mt-3">{label}</span>
              <strong>{value}</strong>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
