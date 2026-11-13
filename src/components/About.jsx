import { Code2, Brain, Cloud, Globe } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import CodeCard from './CodeCard'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="section-label">About Me</p>
            <h2 className="section-title">A developer focused on craft, curiosity, and real-world impact.</h2>
            <p className="section-copy">{profile.bio}</p>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.05} className="panel panel-hover p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border border-white/10 bg-bg-soft flex-shrink-0">
                  <img
                    src={profile.profileImage}
                    alt={`${profile.name} portrait`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-mono text-accent-cyan uppercase tracking-wider">Profile</p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">{profile.name}</h3>
                  <p className="mt-1 text-muted">{profile.title} · {profile.location} {profile.flag}</p>
                </div>
              </div>
              <p className="mt-6 text-muted leading-relaxed">{profile.currentDirection}</p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code2, title: 'Build', text: 'Turning ideas into useful, practical digital products.' },
                { icon: Globe, title: 'Full-Stack', text: 'Developing across interfaces, APIs, and data.' },
                { icon: Brain, title: 'AI Curiosity', text: 'Exploring how intelligent systems can enhance software.' },
                { icon: Cloud, title: 'Modern Tech', text: 'Learning cloud, Linux, DevOps, and evolving tools.' },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.08 + i * 0.05} className="panel p-5">
                  <item.icon size={18} className="text-accent-light" />
                  <h3 className="mt-4 font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.12}>
              <CodeCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
