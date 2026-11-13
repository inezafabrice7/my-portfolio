import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import InterestsPhilosophy from './components/InterestsPhilosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('ineza-portfolio-theme') === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('ineza-portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#f5f4f8' : '#08080D',
    )
  }, [theme])

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg text-white overflow-x-clip">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-bg px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <CustomCursor />
        <ScrollProgress />
        <Navbar theme={theme} onThemeChange={setTheme} />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <InterestsPhilosophy />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
