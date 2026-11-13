import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { BookOpen, Cloud, Hammer, Layers, Rocket } from 'lucide-react'
import { journeySteps } from '../data/journey'
import Reveal from './Reveal'

const iconMap = {
  book: BookOpen,
  layers: Layers,
  hammer: Hammer,
  cloud: Cloud,
  rocket: Rocket,
}

export default function Journey() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 72%', 'end 72%'],
  })

  return (
    <section id="journey" className="relative overflow-hidden py-24 sm:py-32">
      <div className="section-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="section-container">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label">The journey</p>
            <h2 className="section-title">A practice of learning, making, and looking ahead.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="section-copy mt-0 max-w-xl">
              An evolving record of the stages and focus areas shared so far. The sequence is shown without dates because no milestone years have been provided.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
              Undated stages <span className="px-1 text-white/20">/</span> Ordered as shared
            </p>
          </div>
        </Reveal>

        <div ref={timelineRef} className="relative mt-14 max-w-5xl">
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-white/[0.09] sm:left-[27px]" aria-hidden="true" />
          <motion.div
            className="absolute left-[19px] top-8 w-px origin-top bg-gradient-to-b from-accent-light via-accent to-[#54d9ff] sm:left-[27px]"
            style={{ height: 'calc(100% - 4rem)', scaleY: scrollYProgress }}
            aria-hidden="true"
          />
          <div className="space-y-4 sm:space-y-5">
            {journeySteps.map((step, index) => {
              const Icon = iconMap[step.icon] || BookOpen
              return (
                <Reveal key={step.id} delay={index * 0.045}>
                  <details className="journey-entry group relative pl-12 sm:pl-[68px]">
                    <summary className="journey-summary relative cursor-pointer list-none rounded-2xl border border-white/[0.075] bg-white/[0.025] p-5 transition duration-300 hover:border-accent/25 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light sm:p-6">
                      <span className="absolute -left-[39px] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[#0c0b12] text-accent-light/80 transition-colors group-open:border-accent/45 group-open:bg-accent/[0.12] sm:-left-[53px] sm:top-7 sm:h-14 sm:w-14">
                        <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <span className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <span className="min-w-0">
                          <span className="mb-2 flex flex-wrap items-center gap-2.5">
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-light/75">
                              Stage {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="h-px w-5 bg-white/15" aria-hidden="true" />
                            <span className="text-[11px] text-white/40">{step.category}</span>
                          </span>
                          <span className="block text-lg font-medium tracking-tight text-white/90 sm:text-xl">
                            {step.title}
                          </span>
                          <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/50">
                            {step.description}
                          </span>
                        </span>
                        <span className="flex shrink-0 items-center gap-2 self-start pt-1 text-[11px] text-white/35 transition-colors group-hover:text-white/65">
                          <span className="group-open:hidden">Read more</span>
                          <span className="hidden group-open:inline">Close</span>
                          <span className="transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                        </span>
                      </span>
                    </summary>
                    <div className="ml-1 mt-2 rounded-xl border border-white/[0.06] bg-[#0e0d14] px-5 py-4 sm:ml-0 sm:px-6 sm:py-5">
                      <p className="max-w-2xl text-sm leading-6 text-white/55">{step.details}</p>
                    </div>
                  </details>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
