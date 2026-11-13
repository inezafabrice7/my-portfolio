import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/profile'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
]

export default function Navbar({ theme, onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMobileOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMobileOpen])

  const closeMenu = () => setIsMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-7 sm:pt-5"
      >
        <nav
          aria-label="Primary navigation"
          className={`site-nav mx-auto flex h-[62px] max-w-[1320px] items-center justify-between rounded-2xl border px-4 sm:px-6 transition-all duration-300 ${
            isScrolled
              ? 'is-scrolled border-white/[0.09] bg-[#0b0a10]/85 shadow-[0_12px_40px_rgba(0,0,0,.28)] backdrop-blur-2xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
            aria-label={`${profile.name}, home`}
          >
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-accent/30 bg-accent/10 transition-colors group-hover:border-accent/55 group-hover:bg-accent/20">
              <img src="/icon.svg" alt="" aria-hidden="true" className="h-full w-full object-cover" />
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-white/90 sm:inline">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13px] text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition duration-200 hover:border-accent/35 hover:bg-accent/10 hover:text-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'light'}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <a
              href="/ineza-fabrice-cv.txt"
              download
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[13px] text-white/65 transition-colors hover:text-white sm:inline-flex"
            >
              CV <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-primary !px-4 !py-2.5 text-[13px]">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav-panel fixed inset-0 z-40 bg-[#08080d]/95 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <p className="section-label">Navigate</p>
            <div className="mt-5 flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="border-b border-white/[0.08] py-4 text-3xl font-medium tracking-tight text-white/80 transition-colors hover:text-accent-light"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/ineza-fabrice-cv.txt" download className="btn-secondary" onClick={closeMenu}>
                Download CV
              </a>
              <a href="#contact" className="btn-primary" onClick={closeMenu}>
                Get in touch <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="absolute bottom-8 left-6 font-mono text-xs tracking-wide text-white/35">
              {profile.location} · {profile.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
