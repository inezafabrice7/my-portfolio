import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, Layers, X } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

const categories = ['All work', ...new Set(projects.map((project) => project.category))]

function ProjectArtwork({ project }) {
  return (
    <div className={`project-artwork artwork-${project.visual}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-window-bar">
          <span /><span /><span />
          <i />
        </div>
        <div className="art-window-body">
          <div className="art-sidebar"><b /><i /><i /><i /><i /></div>
          <div className="art-dashboard">
            <div className="art-heading"><i /><b /></div>
            <div className="art-metrics"><i /><i /><i /></div>
            <div className="art-content">
              <i className="art-visualization" />
              <i className="art-list" />
            </div>
          </div>
        </div>
      </div>
      <span className="art-caption">Illustrative interface concept</span>
    </div>
  )
}

function CaseStudy({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  return (
    <motion.div
      className="case-study-overlay fixed inset-0 z-[70] overflow-y-auto bg-[#08080d]/95 px-4 py-5 backdrop-blur-2xl sm:px-7 sm:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-white/40">Project notes / {project.category}</p>
          <button type="button" onClick={onClose} className="btn-secondary !px-3 !py-2 text-xs">
            Close <X size={14} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:gap-12">
          <div>
            <span className="chip">{project.status}</span>
            <h2 id="case-study-title" className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              {project.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">{project.longDescription}</p>

            <div className="mt-8 space-y-3">
              <article className="case-note">
                <h3>The problem space</h3>
                <p>{project.description}</p>
              </article>
              <article className="case-note">
                <h3>Intended solution</h3>
                <p>{project.longDescription}</p>
              </article>
              <article className="case-note">
                <h3>Architecture & implementation decisions</h3>
                <p>
                  Architecture details and implementation decisions have not been documented in the available project notes.
                </p>
              </article>
              <article className="case-note">
                <h3>Challenges & results</h3>
                <p>
                  {project.status === 'Concept'
                    ? 'This is a concept project; implementation challenges and measured results are not available.'
                    : 'This project is in development. Implementation challenges and measured results have not been provided yet.'}
                </p>
              </article>
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
              <ProjectArtwork project={project} />
              <div className="border-t border-white/[0.07] p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                  <Layers size={15} className="text-accent-light" aria-hidden="true" />
                  {project.status === 'Concept' ? 'Listed technology direction' : 'Technology stack'}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="chip !px-2.5 !py-1">{technology}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
              <h3 className="text-xs font-medium text-white/70">Project scope</h3>
              <ul className="mt-3 grid gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/50">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-light/70" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
                  <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                  <ExternalLink size={16} aria-hidden="true" /> Live demo <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
              {!project.github && !project.liveDemo && (
                <p className="w-full rounded-xl border border-white/[0.07] px-4 py-3 text-xs text-white/40">
                  Repository and live demo links have not been provided.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [selected, setSelected] = useState(null)
  const triggerRef = useRef(null)
  const previousOverflow = useRef('')

  useEffect(() => {
    if (!selected) return undefined

    previousOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow.current
      triggerRef.current?.focus()
    }
  }, [selected])

  const visibleProjects = activeCategory === 'All work'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="section-container">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Ideas shaped into useful systems.</h2>
          </div>
          <p className="section-copy mt-0 max-w-xl lg:justify-self-end">
            A closer look at project ideas, their intended scope, and the technology choices currently listed. Each visual is illustrative—not a product screenshot.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light ${
                activeCategory === category
                  ? 'border-accent/35 bg-accent/[0.12] text-accent-light'
                  : 'border-white/[0.08] bg-white/[0.025] text-white/50 hover:border-white/20 hover:text-white/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-7 grid gap-4 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, delay: index * 0.035 }}
                className="project-card group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-colors hover:border-white/[0.15] hover:bg-white/[0.04]"
              >
                <ProjectArtwork project={project} />
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-light/75">
                      Chapter {String(project.id).padStart(2, '0')} <span className="px-1 text-white/25">/</span> {project.category}
                    </span>
                    <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-white/45">{project.status}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-white">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="chip !px-2.5 !py-1">{technology}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <span className="text-xs text-white/35">
                      {project.github || project.liveDemo ? 'Explore this project' : 'Project links not published'}
                    </span>
                    <button
                      ref={index === 0 ? triggerRef : undefined}
                      type="button"
                      onClick={(event) => {
                        triggerRef.current = event.currentTarget
                        setSelected(project)
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
                    >
                      Project notes <ArrowUpRight size={14} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
