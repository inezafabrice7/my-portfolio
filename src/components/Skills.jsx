import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2, Database, Monitor, Server, Wrench } from 'lucide-react'
import { skillCategories, statusLabels } from '../data/skills'
import Reveal from './Reveal'

const constellationGroups = [
  { title: 'Frontend', source: 'Frontend development', icon: Monitor },
  { title: 'Backend', source: 'Backend development', icon: Server },
  { title: 'Databases', source: 'Databases', icon: Database },
  { title: 'Developer tools', source: 'Developer tools', icon: Wrench },
]

const statusColor = {
  building: 'bg-emerald-300',
  learning: 'bg-amber-200',
  exploring: 'bg-accent-light',
}

export default function Skills() {
  const [selectedNode, setSelectedNode] = useState(null)

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="section-container">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label">Technical expertise <span className="ml-2 text-white/25">/ 接続</span></p>
            <h2 className="section-title">A constellation of tools I&apos;m learning and building with.</h2>
          </div>
          <p className="section-copy mt-0 max-w-xl lg:justify-self-end">
            Select a node to see its current place in my toolkit. These labels describe what I&apos;m building with, learning, or exploring—not skill ratings.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {constellationGroups.map((group, index) => {
            const category = skillCategories.find((item) => item.title === group.source)
            const Icon = group.icon || Code2

            if (!category) return null

            return (
              <Reveal
                key={category.title}
                delay={index * 0.05}
                className="constellation-card relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors hover:border-accent/25 sm:p-6"
              >
                <div className="constellation-lines pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent-light">
                        <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-white/85">{group.title}</h3>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
                          Signal group / {String(index + 1).padStart(2, '0')}
                        </p>
                      </div>
                    </div>
                    <span className="h-px w-8 bg-gradient-to-r from-accent/50 to-transparent" aria-hidden="true" />
                  </div>

                  <div className="relative mt-5 flex min-h-14 flex-wrap items-center gap-2">
                    {category.skills.map((skill, nodeIndex) => {
                      const nodeId = `${group.title}:${skill.name}`
                      const isSelected = selectedNode?.id === nodeId

                      return (
                        <motion.button
                          key={skill.name}
                          type="button"
                          onClick={() => setSelectedNode({ id: nodeId, skill, group: group.title })}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          aria-pressed={isSelected}
                          className={`skill-node inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light ${
                            isSelected
                              ? 'border-accent/45 bg-accent/[0.14] text-white'
                              : 'border-white/[0.09] bg-[#0b0a10]/75 text-white/65 hover:border-accent/35 hover:text-white'
                          }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${statusColor[skill.status] || 'bg-accent-light'}`} aria-hidden="true" />
                          {skill.name}
                          <span className="sr-only"> — {statusLabels[skill.status]}</span>
                          {nodeIndex === category.skills.length - 1 && (
                            <span className="ml-0.5 font-mono text-[8px] text-white/25" aria-hidden="true">↗</span>
                          )}
                        </motion.button>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-accent/20 bg-accent/[0.055] px-4 py-3"
              aria-live="polite"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${statusColor[selectedNode.skill.status]}`} aria-hidden="true" />
              <span className="text-xs font-medium text-white/85">{selectedNode.skill.name}</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />
              <span className="text-xs text-white/50">
                {statusLabels[selectedNode.skill.status]} · {selectedNode.group}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-white/40">
          {[
            ['building', 'Building with'],
            ['learning', 'Learning'],
            ['exploring', 'Exploring'],
          ].map(([status, label]) => (
            <span key={status} className="inline-flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${statusColor[status]}`} aria-hidden="true" />
              {label}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
