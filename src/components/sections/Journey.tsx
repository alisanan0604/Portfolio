import { motion } from 'framer-motion'
import { Reveal } from '@/components/animations/reveal'
import { journey } from '@/data/journey'

export function Journey() {
  return (
    <section className="section-wrap !py-20" aria-labelledby="journey-title">
      <Reveal>
        <p className="section-kicker">Development Journey · Education</p>
        <h2 id="journey-title" className="font-display mt-3 text-4xl font-black uppercase text-[var(--cream)] sm:text-5xl">
          Education
        </h2>
      </Reveal>
      <div className="timeline">
        {journey.map((item, index) => (
          <motion.article
            key={item.title}
            className="timeline-item"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: index * 0.1 }}
          >
            <p className="micro-label">{item.year}</p>
            <h3>{item.title}</h3>
            <p className="org">{item.org}</p>
            <p className="detail">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
