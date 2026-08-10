import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { site } from '@/data/site'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-sky" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="hero-haze"
        animate={reducedMotion ? undefined : { x: ['-2%', '3%', '-2%'], opacity: [0.42, 0.65, 0.42] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p className="hero-eyebrow">{site.tagline} · {site.role}</p>
          <h1 id="hero-title" className="hero-title">
            Sanan <span>Ali</span>
          </h1>
          <p className="hero-role">{site.subheadline}</p>
          <p className="hero-supporting">{site.supporting}</p>
          <div className="hero-actions">
            <a className="brass-button" href="#projects">
              View projects <ArrowDown size={15} />
            </a>
            <a className="paper-button" href={site.social.github} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </a>
            <a className="paper-button" href={site.social.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-stage"
          initial={{ opacity: 0, scale: 0.94, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 1.4 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait-paper">
            <div className="portrait-frame">
              <img
                src="/assets/profile-portrait.webp"
                alt="Portrait of Sanan Ali"
                width="896"
                height="1156"
                fetchPriority="high"
              />
            </div>
          </div>
          <span className="portrait-stamp">Full-Stack<br />&amp; AI<br />Developer</span>
        </motion.div>
      </div>
    </section>
  )
}
