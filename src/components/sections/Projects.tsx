import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/animations/reveal'
import { featuredProjects, upcomingProjects, type Project } from '@/data/projects'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="case-actions">
      {project.liveUrl ? (
        <a className="brass-button" href={project.liveUrl} target="_blank" rel="noreferrer">
          <ExternalLink size={13} /> Live Demo
        </a>
      ) : (
        <span className="brass-button disabled-link" aria-disabled="true"><ExternalLink size={13} /> Live Demo</span>
      )}
      {project.githubUrl ? (
        <a className="paper-button" href={project.githubUrl} target="_blank" rel="noreferrer">
          <Github size={13} /> GitHub
        </a>
      ) : (
        <span className="paper-button disabled-link" aria-disabled="true"><Github size={13} /> GitHub</span>
      )}
    </div>
  )
}

function CaseFile({ project }: { project: Project }) {
  return (
    <motion.article className="case-file parchment" variants={staggerItem} data-cursor-view>
      <div className="case-file-top">
        <span className="case-index">CASE FILE / {project.index}</span>
        <span className="status-stamp">{project.status}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="case-description">{project.description}</p>
      {project.features && (
        <ul className="feature-list">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      )}
      <div className="tech-row" aria-label="Technologies used">
        {project.tech.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
      </div>
      <ProjectLinks project={project} />
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-wrap" aria-labelledby="projects-title">
      <Reveal>
        <p className="section-kicker">Record 03 · Technical Archive</p>
        <h2 id="projects-title" className="section-title">Case Files</h2>
      </Reveal>

      <StaggerGroup className="case-grid">
        {featuredProjects.map((project) => <CaseFile key={project.id} project={project} />)}
      </StaggerGroup>

      {upcomingProjects.length > 0 && (
        <div className="mt-24">
          <Reveal>
            <p className="section-kicker">Concept Pipeline</p>
            <h3 className="font-display mt-3 text-3xl font-black uppercase text-[var(--cream)]">What's on the Roadmap</h3>
          </Reveal>
          <StaggerGroup className="roadmap-grid">
            {upcomingProjects.map((project) => (
              <motion.article key={project.id} className="roadmap-card" variants={staggerItem}>
                <div className="flex items-center justify-between gap-2">
                  <span className="micro-label">{project.index}</span>
                  <span className="micro-label">{project.status}</span>
                </div>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="tech-row">
                  {project.tech.map((technology) => <span className="tech-tag !text-[#b9aa91] !border-[var(--line)]" key={technology}>{technology}</span>)}
                </div>
              </motion.article>
            ))}
          </StaggerGroup>
        </div>
      )}
    </section>
  )
}
