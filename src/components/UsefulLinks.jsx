import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { usefulLinks } from '../data/usefulLinks'

export default function UsefulLinks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="links" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Connect with me</h2>
        </motion.div>

        <div className="mt-12 max-w-md mx-auto">
          {usefulLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card card-hover p-5 group flex items-center justify-between gap-4"
              aria-label={`${link.title} (opens in new tab)`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium">{link.title}</h3>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-600 group-hover:text-accent transition-colors flex-shrink-0"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 truncate">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
