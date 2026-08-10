import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { site } from '@/data/site'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

export function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('The message could not be sent. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-wrap" aria-labelledby="contact-title">
      <Reveal>
        <p className="section-kicker">Record 05 · Communication Channel</p>
        <h2 id="contact-title" className="section-title">The Telegraph</h2>
        <p className="section-intro">Have a project, opportunity, or idea worth discussing? Let's connect.</p>
      </Reveal>

      <div className="telegraph-layout">
        <Reveal delay={0.08}>
          <aside className="contact-docket leather-panel">
            <p className="micro-label">Available channels</p>
            <p className="mt-5">Let's Build Something.</p>
            <div className="social-links">
              <a href={site.social.github} target="https://github.com/alisanan0604" rel="noreferrer">
                <span className="flex items-center gap-2"><Github size={16} /> GitHub</span><span>↗</span>
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span><span>↗</span>
              </a>
              {site.social.email && (
                <a href={`mailto:${site.social.email}`}>
                  <span className="flex items-center gap-2"><Mail size={16} /> Email</span><span>↗</span>
                </a>
              )}
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.14}>
          {submitted ? (
            <motion.div className="success-note parchment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="status">
              <div>
                <Mail size={30} />
                <h3>Message Transmitted.</h3>
                <p className="mt-3 text-[#4b3829]">Thanks for reaching out — a response is on its way.</p>
              </div>
            </motion.div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="telegraph-form parchment"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don't fill this out: <input name="bot-field" onChange={() => {}} /></label></p>
              <div className="form-grid">
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required value={fields.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={fields.email} onChange={handleChange} placeholder="you@email.com" />
                </div>
                <div className="field-group full">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" required value={fields.subject} onChange={handleChange} placeholder="What's this about?" />
                </div>
                <div className="field-group full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required value={fields.message} onChange={handleChange} placeholder="Tell me about the opportunity or project..." />
                </div>
              </div>
              {error && <p className="mt-4 text-sm font-semibold text-[var(--red-dark)]" role="alert">{error}</p>}
              <button type="submit" className="brass-button mt-6" disabled={submitting}>
                <Send size={14} /> {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
