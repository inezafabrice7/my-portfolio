import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { learningTopics } from '../data/learning'

export default function Learning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="learning" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Currently Learning</p>
          <h2 className="section-title">What I'm Learning Now</h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Technology never stops evolving, and neither do I. Here's what I'm
            currently exploring and learning.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningTopics.map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover p-6 group"
            >
              <div className="text-4xl mb-4">{topic.emoji}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{topic.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {topic.description}
              </p>
              <div className="mt-4">
                <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {topic.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
