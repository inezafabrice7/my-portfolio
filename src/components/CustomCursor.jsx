import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return
    setEnabled(true)

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)
    const over = (e) => {
      const el = e.target.closest('a,button,[data-cursor="active"],input,textarea')
      setActive(!!el)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    document.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseover', over)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50 transition-all duration-200 ${active ? 'h-10 w-10 bg-accent/10' : 'h-6 w-6 bg-transparent'}`}
        />
      </div>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan" />
      </div>
    </>
  )
}
