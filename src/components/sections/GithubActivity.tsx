import { Github } from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { site } from '@/data/site'

export function GithubActivity() {
  return (
    <section className="section-wrap !py-20" aria-labelledby="github-title">
      <Reveal>
        <p className="section-kicker">Developer Activity</p>
        <h2 id="github-title" className="font-display mt-3 text-4xl font-black uppercase text-[var(--cream)] sm:text-5xl">
          Development Activity
        </h2>
        <p className="section-intro">Live repository activity and contribution history, straight from GitHub.</p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="github-record leather-panel">
          <div className="flex items-start gap-4">
            <Github size={28} className="mt-1 shrink-0 text-[var(--brass-light)]" aria-hidden="true" />
            <p>Repository and contribution data will appear here once GitHub is connected.</p>
          </div>
          <a className="paper-button shrink-0" href={site.social.github} target="https://github.com/alisanan0604" rel="noreferrer">
            <Github size={15} /> View GitHub Profile
          </a>
        </div>
      </Reveal>
    </section>
  )
}
