import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/data/site'

export function Nav() {
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: '-38% 0px -52% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="frontier-nav">
      <nav className="frontier-nav-inner" aria-label="Primary navigation">
        <a
          href="#home"
          className="nav-brand"
          onClick={(event) => {
            event.preventDefault()
            scrollTo('#home')
          }}
        >
          <span className="brand-seal">{site.monogram}</span>
          <span className="brand-handle">{site.handle}</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${active === link.href ? 'active' : ''}`}
                aria-current={active === link.href ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  scrollTo(link.href)
                }}
              >
                {String(index + 1).padStart(2, '0')} {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-journal"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link block ${active === link.href ? 'active' : ''}`}
                onClick={(event) => {
                  event.preventDefault()
                  scrollTo(link.href)
                }}
              >
                {String(index + 1).padStart(2, '0')} — {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
