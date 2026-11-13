import { Code, Globe, Brain, Cloud, Terminal, Wrench, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import { learningTopics } from '../data/learning'
import Reveal from './Reveal'

const interestIcons = [Code, Globe, Brain, Cloud, Terminal, Wrench]

export default function InterestsPhilosophy() {
  return (
    <section id="interests" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/10 blur-[140px]" />
      </div>
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
            <p className="section-label">Interests & Personal Philosophy</p>
            <h2 className="section-title">Curious by nature, intentional in practice.</h2>
            <p className="section-copy">
              I&apos;m interested in how thoughtful engineering, modern technologies, and continuous learning come together to create meaningful software.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.interests.map((interest, i) => {
                const Icon = interestIcons[i % interestIcons.length]
                return (
                  <div key={interest} className="panel p-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon size={16} className="text-accent-cyan" />
                    </div>
                    <span className="text-sm text-white/90">{interest}</span>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.05} className="panel panel-hover p-7 sm:p-8">
              <div className="flex items-center gap-2 text-accent-light font-mono text-xs uppercase tracking-wider">
                <Sparkles size={14} /> Philosophy
              </div>
              <blockquote className="mt-5 text-2xl sm:text-3xl font-semibold leading-tight text-white">
                &ldquo;Don&apos;t just learn technology.{' '}
                <span className="bg-gradient-to-r from-accent-light to-accent-cyan bg-clip-text text-transparent">Build something with it.</span>&rdquo;
              </blockquote>
              <p className="mt-5 text-muted leading-relaxed">
                This principle guides how I approach growth — by applying what I learn to real problems and steadily improving through practice.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="panel p-7">
              <h3 className="text-white font-semibold text-lg">Currently exploring</h3>
              <p className="mt-2 text-sm text-muted">Areas I&apos;m actively learning about and deepening over time.</p>
              <div className="mt-5 grid gap-3">
                {learningTopics.map((topic) => (
                  <div key={topic.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl" aria-hidden="true">{topic.emoji}</span>
                        <span className="text-white font-medium">{topic.title}</span>
                      </div>
                      <span className="chip !text-[10px] !py-1 !px-2.5 text-accent-light border-accent/20 bg-accent/10">{topic.status}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{topic.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}