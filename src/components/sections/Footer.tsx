import { Github, Linkedin } from 'lucide-react'
import { site } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong className="text-[var(--cream)]">{site.handle}</strong>
          <p className="mt-1">Designed &amp; Built by Sanan Ali</p>
        </div>
        <div className="footer-socials">
          <a href={site.social.github} target="https://github.com/alisanan0604" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        </div>
        <p>Field record · © {year}</p>
      </div>
    </footer>
  )
}
