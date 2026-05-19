import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function pad(n) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target) - new Date())
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  }
}

function Unit({ value, label }) {
  return (
    <div className="text-center min-w-[72px]">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-cormorant block"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
          fontWeight: 300,
          color: 'var(--text-cream)',
          lineHeight: 1,
          textShadow: '0 0 40px rgba(201,169,110,0.18)',
        }}
      >
        {value}
      </motion.span>
      <span
        className="font-inter block mt-2 tracking-[0.35em] uppercase"
        style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const sep = (
    <span
      className="font-cormorant self-start pt-2"
      style={{ fontSize: '2.5rem', color: 'var(--text-dim)' }}
    >
      ·
    </span>
  )

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <Unit value={pad(time.d)} label="Días" />
      {sep}
      <Unit value={pad(time.h)} label="Horas" />
      {sep}
      <Unit value={pad(time.m)} label="Minutos" />
      {sep}
      <Unit value={pad(time.s)} label="Segundos" />
    </div>
  )
}
