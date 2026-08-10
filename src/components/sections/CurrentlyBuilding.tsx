import { motion } from 'framer-motion'
import { Reveal, StaggerGroup, staggerItem } from '@/components/animations/reveal'
import { currentlyBuilding } from '@/data/journey'

export function CurrentlyBuilding() {
  return (
    <section className="section-wrap !py-16" aria-labelledby="building-title">
      <Reveal>
        <p className="section-kicker">Active Dispatches</p>
        <h2 id="building-title" className="font-display mt-3 text-4xl font-black uppercase text-[var(--cream)] sm:text-5xl">
          Currently Building
        </h2>
      </Reveal>
      <StaggerGroup className="record-grid">
        {currentlyBuilding.map((item, index) => (
          <motion.article key={item.name} className="record-card" variants={staggerItem}>
            <div className="flex items-center justify-between gap-4">
              <span className="micro-label">Dispatch {String(index + 1).padStart(2, '0')}</span>
              <span className="micro-label">{item.status}</span>
            </div>
            <h3>{item.name}</h3>
          </motion.article>
        ))}
      </StaggerGroup>
    </section>
  )
}
