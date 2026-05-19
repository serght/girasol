import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8 md:px-12 py-6 relative"
      style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.85), transparent)' }}
    >
      <Link
        to="/"
        className="font-cormorant text-xs tracking-[0.35em] uppercase transition-colors duration-300"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={e => e.target.style.color = 'var(--gold)'}
        onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
      >
        ✦ &nbsp; Para Ti &nbsp; ✦
      </Link>

    </motion.nav>
  )
}