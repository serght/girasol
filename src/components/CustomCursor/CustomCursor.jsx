import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.8)'
    }
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,[role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    animId = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'var(--gold)', mixBlendMode: 'difference' }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full border -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
        style={{ borderColor: 'rgba(201,169,110,0.4)' }}
      />
    </>
  )
}
