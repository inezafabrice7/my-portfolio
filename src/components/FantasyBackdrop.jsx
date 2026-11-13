import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function FantasyBackdrop() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const driftX = useTransform(scrollYProgress, [0, 0.6], [0, 18])
  const driftY = useTransform(scrollYProgress, [0, 0.6], [0, 24])

  return (
    <motion.svg
      className="hero-fantasy-scene"
      viewBox="0 0 1100 640"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={reduceMotion ? undefined : { x: driftX, y: driftY }}
    >
      <defs>
        <linearGradient id="fantasy-island" x1="550" x2="550" y1="350" y2="552" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8065b3" stopOpacity=".3" />
          <stop offset="1" stopColor="#12101d" stopOpacity=".7" />
        </linearGradient>
        <linearGradient id="fantasy-lantern" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#ffe7ad" stopOpacity=".95" />
          <stop offset="1" stopColor="#ffad6e" stopOpacity=".18" />
        </linearGradient>
        <radialGradient id="fantasy-moon">
          <stop stopColor="#f4e3bf" stopOpacity=".35" />
          <stop offset=".62" stopColor="#d7bbff" stopOpacity=".15" />
          <stop offset="1" stopColor="#c4a1ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="spirit-glow">
          <stop stopColor="#c9f5f0" stopOpacity=".8" />
          <stop offset="1" stopColor="#69d6db" stopOpacity="0" />
        </radialGradient>
        <filter id="lantern-blur" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <g opacity=".62">
        <circle cx="730" cy="142" r="118" fill="url(#fantasy-moon)" />
        <circle cx="730" cy="142" r="42" fill="#ecddc2" fillOpacity=".42" />
        <path d="M755 107c-9 10-15 23-15 37 0 18 9 34 23 43-8 4-17 6-27 6-29 0-52-23-52-52s23-52 52-52c7 0 13 1 19 3Z" fill="#343459" fillOpacity=".42" />
        <circle cx="730" cy="142" r="57" stroke="#dacbff" strokeOpacity=".13" />
      </g>

      <g fill="#e9e2ff">
        <circle cx="640" cy="94" r="1.5" opacity=".65" />
        <circle cx="843" cy="96" r="1.2" opacity=".55" />
        <circle cx="924" cy="174" r="1.6" opacity=".55" />
        <circle cx="542" cy="166" r="1.2" opacity=".5" />
        <circle cx="1001" cy="112" r="1" opacity=".55" />
        <circle cx="815" cy="232" r="1.2" opacity=".5" />
        <circle cx="666" cy="256" r="1" opacity=".4" />
      </g>

      <g fill="#a5a9cf" fillOpacity=".16">
        <path d="M571 191c26-20 62-18 83 2 23-14 54-10 72 8 20-6 44 2 55 18H548c3-12 11-22 23-28Z" />
        <path d="M856 243c21-17 51-15 69 2 18-11 43-8 57 7 17-5 36 2 45 15H837c3-10 9-18 19-24Z" />
        <path d="M726 286c18-14 44-12 59 2 16-9 36-7 48 6 14-4 30 1 38 12H710c2-8 7-15 16-20Z" />
      </g>

      <g transform="translate(0 70)">
      <path
        d="m470 357 101-26 82 15 73-36 107 29 62-17 104 48 91 5 10 92-116 29-112 14-134-17-93 30-120-12-114 24-105-21-99 4-95-29-99 5-93-29 4-64 78-18 72-3 72-36 82 10 93-23 84 19 90-18Z"
        fill="url(#fantasy-island)"
      />
      <path
        d="m470 357 101-26 82 15 73-36 107 29 62-17 104 48 91 5"
        stroke="#bca7ed"
        strokeOpacity=".31"
        strokeWidth="1.5"
      />
      <path d="M498 390c66 13 131 15 201 9m47 2c73 13 145 12 216 4m-565 26c83 8 155 4 238-7m221 19c76 3 133-2 196-11" stroke="#dbc8ff" strokeOpacity=".09" />

      <g opacity=".72">
        <path d="M720 354v-52h25v52m22 0v-70h33v70m29 0v-42h26v42m41 2v-60h29v60m20-2v-80h39v80" stroke="#d7c6f4" strokeOpacity=".25" strokeWidth="2" />
        <path d="M729 321h8m0-10h8m30 7h8m45 18h8m43-20h7m37-15h9" stroke="#f1dfb8" strokeOpacity=".65" strokeWidth="2" />
        <path d="M738 354h144m-130-15h119" stroke="#a993dc" strokeOpacity=".32" />
      </g>

      <g opacity=".55">
        <path d="M395 365c37-20 76-20 114 0" stroke="#b8a5e8" strokeOpacity=".5" strokeWidth="1.2" />
        <path d="M420 363v17m68-17v17" stroke="#b8a5e8" strokeOpacity=".32" />
      </g>

      <motion.g
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        transform="translate(904 266)"
      >
        <ellipse cx="0" cy="0" rx="50" ry="38" fill="url(#spirit-glow)" opacity=".38" />
        <path d="M-21 2c4-17 20-27 36-23 12 3 19 14 18 26-1 14-13 25-28 25-14 0-25-10-26-23Z" fill="#273c59" fillOpacity=".88" stroke="#93d9d4" strokeOpacity=".62" />
        <path d="M-17 4c-20-20-37-23-50-13 12 1 19 8 23 19-13-3-23 0-31 10 20-4 39 1 53 13m61-29c20-20 37-23 50-13-12 1-19 8-23 19 13-3 23 0 31 10-20-4-39 1-53 13" fill="#314c69" fillOpacity=".72" stroke="#99ddd7" strokeOpacity=".58" strokeLinejoin="round" />
        <path d="M-8 4h3m18 0h3" stroke="#f6e5bb" strokeLinecap="round" strokeWidth="2" />
        <path d="M-7 13c4 3 9 3 13 0" stroke="#aeddd2" strokeLinecap="round" />
        <path d="M0 28c-7 15-2 26 6 35 6-13 7-25 1-35" fill="#9adbd2" fillOpacity=".48" />
      </motion.g>

      <motion.g
        animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
        transform="translate(612 318)"
      >
        <ellipse cx="0" cy="10" rx="36" ry="34" fill="url(#fantasy-moon)" opacity=".6" />
        <path d="M-15 3c-3-14 1-25 10-30 6 7 8 15 7 23 7-12 16-17 27-15-2 11-10 20-22 24 11 2 19 9 21 20-13 4-25-1-32-13-3 12-11 18-23 18-3-11 2-21 14-27-12 2-22-2-29-12 9-7 19-7 31 0Z" fill="#343a58" stroke="#c7b9ef" strokeOpacity=".67" strokeWidth="1.2" />
        <path d="M-3 2c2-5 8-7 13-4 5 3 6 10 2 14-3 4-9 5-13 2-4-3-5-8-2-12Z" fill="#b9ece2" fillOpacity=".72" />
        <circle cx="3" cy="5" r="1.2" fill="#17283c" />
      </motion.g>

      <g opacity=".86">
        <circle cx="810" cy="354" r="17" fill="#ffd99d" fillOpacity=".18" filter="url(#lantern-blur)" />
        <path d="M803 341h14l3 18h-20l3-18Z" fill="#302b46" stroke="#ffe0a6" strokeOpacity=".7" />
        <path d="M806 345h8l1 10h-10l1-10Z" fill="url(#fantasy-lantern)" />
        <path d="M810 337v-5m0 31v10" stroke="#f3d9aa" strokeOpacity=".66" />
      </g>

      <g opacity=".6">
        <circle cx="548" cy="277" r="12" fill="url(#spirit-glow)" />
        <path d="M543 277c2-5 8-6 11-2 2 3 1 7-2 9-4 2-9-1-9-5v-2Z" fill="#d2fff1" fillOpacity=".8" />
        <circle cx="544" cy="276" r="1" fill="#20354b" />
        <circle cx="551" cy="276" r="1" fill="#20354b" />
      </g>

      <path d="M435 461c102-21 191-17 282-3m103-11c68 8 127 4 181-8" stroke="#c7bbeb" strokeOpacity=".12" strokeWidth="2" />
      <path d="M0 490c148-24 257-18 393 8s257 34 392-1 207-37 315-12v75H0v-70Z" fill="#0c0b16" fillOpacity=".58" />
      </g>
    </motion.svg>
  )
}
