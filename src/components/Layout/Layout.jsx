import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from 'lenis'
import StarBackground from '../StarBackground/StarBackground'
import CustomCursor from '../CustomCursor/CustomCursor'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  const location = useLocation()

  // Smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative min-h-screen" style={{ background: '#050505' }}>
      <StarBackground />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  )
}
