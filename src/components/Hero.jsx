import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Radio, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import { getActiveSocialLinks } from '../data/socialLinks'
import FantasyBackdrop from './FantasyBackdrop'
import MagneticButton from './MagneticButton'
import SocialIcons from './SocialIcons'

const roles = ['Software developer', 'Full-stack builder', 'AI & cloud explorer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [introActive, setIntroActive] = useState(true)
  const activeSocials = getActiveSocialLinks()

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length)
    }, 3200)
    const introTimer = window.setTimeout(() => setIntroActive(false), 4000)
    return () => {
      window.clearInterval(timer)
      window.clearTimeout(introTimer)
    }
  }, [])

  return (
    <section
      id="home"
      className="hero-section relative flex min-h-[min(900px,100svh)] items-center overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36"
    >
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
      <FantasyBackdrop />
      <div className="section-container relative z-10 w-full">
        <AnimatePresence>
          {introActive && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="intro-cue absolute right-5 top-20 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-[#0b0a10]/75 py-1.5 pl-3 pr-1.5 backdrop-blur-md sm:right-8 sm:top-16"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/50">Opening sequence <span className="text-accent-light/70">/ 序章</span></span>
              <button
                type="button"
                onClick={() => setIntroActive(false)}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-white/70 transition-colors hover:border-accent/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light"
              >
                Skip intro
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs text-white/65"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
              </span>
              <span className="font-mono uppercase tracking-[0.12em]">Open to meaningful work</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.04 }}
              className="mb-3 text-sm font-medium tracking-wide text-white/55 sm:text-base"
            >
              Hello, I&apos;m {profile.firstName}.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: introActive ? 0.8 : 0.16, delay: introActive ? 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-[clamp(3.2rem,8vw,7.2rem)] font-medium leading-[0.98] tracking-[-0.075em] text-white"
            >
              Thoughtful
              <br />
              software.
              <br />
              <span className="text-gradient">Real-world ideas.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex min-h-7 items-center gap-2.5 text-sm text-white/60 sm:text-base"
              aria-live="polite"
            >
              <span className="text-accent-light">/</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="mx-1 h-4 w-px bg-white/15" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 text-white/45">
                <MapPin size={14} aria-hidden="true" /> {profile.location} {profile.flag}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: introActive ? 0.55 : 0.16, delay: introActive ? 0.3 : 0 }}
              className="developer-hud mt-7 max-w-xl rounded-xl border border-white/[0.09] bg-[#0d0b14]/65 p-4 backdrop-blur-md sm:p-5"
              aria-label="Developer status"
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-light/80">
                  <Radio size={12} aria-hidden="true" /> Developer status
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-200/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" /> Online
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">Role</p>
                  <p className="mt-1 text-[11px] text-white/75 sm:text-xs">Software developer</p>
                </div>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">Current focus</p>
                  <p className="mt-1 text-[11px] text-white/75 sm:text-xs">Full-stack web development</p>
                </div>
                <div className="col-span-2 flex items-center gap-2 border-t border-white/[0.06] pt-2.5">
                  <Sparkles size={12} className="shrink-0 text-[#54d9ff]/80" aria-hidden="true" />
                  <p className="text-[10px] text-white/50 sm:text-[11px]">
                    Exploring <span className="text-white/75">AI</span>
                    <span className="px-1.5 text-white/25">/</span>
                    <span className="text-white/75">Cloud computing</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton as="a" href="#projects" className="btn-primary min-h-12" data-cursor="active">
                Explore my work <ArrowRight size={17} aria-hidden="true" />
              </MagneticButton>
              <a
                href="/ineza-fabrice-cv.txt"
                download
                className="btn-secondary min-h-12"
                data-cursor="active"
              >
                Download CV <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.div>

            {activeSocials.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="mt-10 flex items-center gap-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Find me</span>
                <span className="h-px w-8 bg-white/10" aria-hidden="true" />
                <div className="flex items-center gap-1">
                  <SocialIcons links={activeSocials} size={16} subtle />
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
          >
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-frame relative mx-auto aspect-[0.8] w-[min(76vw,420px)] overflow-hidden rounded-[44%_44%_24px_24px] border border-white/10 bg-[#15131d] sm:w-[min(65vw,470px)] lg:ml-auto lg:w-full">
              <img
                src={profile.profileImage}
                alt={`${profile.name} outdoors in Rwanda`}
                className="relative h-full w-full object-cover object-[50%_20%] opacity-90 mix-blend-luminosity transition duration-700 hover:mix-blend-normal"
                fetchpriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09080f] via-transparent to-[#09080f]/10" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Based in</p>
                  <p className="mt-1 text-lg font-medium text-white">Rwanda <span aria-hidden="true">↗</span></p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black/20 backdrop-blur-md" aria-hidden="true">
                  <img src="/icon.svg" alt="" className="h-full w-full object-cover" />
                </span>
              </div>
            </div>

            <div className="portrait-note absolute -left-2 top-[18%] hidden rounded-xl border border-white/10 bg-[#100f17]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-9">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">Curiosity, in progress</p>
              <p className="mt-1 text-sm text-white/75">Build · Learn · Repeat</p>
            </div>
            <div className="portrait-badge absolute -bottom-5 right-0 hidden items-center gap-2 rounded-full border border-white/10 bg-[#100f17]/85 px-4 py-2.5 font-mono text-[10px] tracking-wide text-white/55 shadow-2xl backdrop-blur-xl sm:flex lg:-right-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#54d9ff]" aria-hidden="true" />
              INEZA FABRICE <span className="text-white/25">/ 01</span>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 inline-flex items-center gap-3 text-xs text-white/40 transition-colors hover:text-white/80 sm:mt-20"
          aria-label="Scroll to about section"
        >
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <motion.span
              animate={{ y: [0, 9, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-accent-light"
            />
          </span>
          <span className="font-mono uppercase tracking-[0.18em]">Scroll to explore</span>
          <ArrowDown size={14} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}
