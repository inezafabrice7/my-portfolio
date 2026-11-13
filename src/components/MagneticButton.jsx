import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function MagneticButton({ children, as = 'button', className = '', wrapperClassName = '', ...props }) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  const handleMove = (e) => {
    if (shouldReduceMotion) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.2)
    y.set(relY * 0.2)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const Element = as === 'a' ? motion.a : motion.button

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-flex ${wrapperClassName}`}
    >
      <Element
        {...props}
        type={as === 'button' ? 'button' : undefined}
        className={className}
      >
        {children}
      </Element>
    </motion.div>
  )
}
