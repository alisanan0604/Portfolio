import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/data/site'

export function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sessionStorage.getItem('sanan-frontier-opened') || reduced) {
      setVisible(false)
      return
    }
    const timeout = window.setTimeout(() => {
      sessionStorage.setItem('sanan-frontier-opened', '1')
      setVisible(false)
    }, 1450)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} role="status" aria-live="polite">
          <div className="loader-card">
            <div className="loader-seal">{site.monogram}</div>
            <p className="micro-label mt-6">Opening developer record</p>
            <p className="mt-3 text-lg text-[var(--cream)]">{site.name}</p>
            <div className="loader-line" aria-hidden="true" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
