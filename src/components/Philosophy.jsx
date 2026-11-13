import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 bg-surface-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
              <span className="text-3xl">💡</span>
            </div>
          </div>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            "Don't just learn technology.{' '}
            <span className="text-accent">Build something with it.</span>"
          </blockquote>

          <p className="mt-6 text-gray-400 text-lg">
            This is the principle that drives everything I do as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
