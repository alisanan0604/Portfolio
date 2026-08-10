import { motion } from 'framer-motion'
import { Reveal, StaggerGroup, staggerItem } from '@/components/animations/reveal'
import { skillCategories, skills } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-wrap" aria-labelledby="skills-title">
      <Reveal>
        <p className="section-kicker">Record 02 · Equipment Manifest</p>
        <h2 id="skills-title" className="section-title">Tools of the Trade</h2>
      </Reveal>

      <div className="skills-ledger">
        {skillCategories.map((category) => (
          <Reveal key={category}>
            <article className="skill-sheet parchment">
              <p className="micro-label">Technical record</p>
              <h3>{category}</h3>
              <StaggerGroup className="skill-list">
                {skills.filter((skill) => skill.category === category).map((skill) => (
                  <motion.div className="skill-item" variants={staggerItem} key={skill.name}>
                    {skill.name}
                  </motion.div>
                ))}
              </StaggerGroup>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
