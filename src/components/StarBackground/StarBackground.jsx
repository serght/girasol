import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []
    let shootX = 0, shootY = 0, shootAlpha = 0
    let nextShoot = Date.now() + Math.random() * 8000 + 4000

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    function initStars() {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random(),
          speed: Math.random() * 0.003 + 0.001,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Stars
      stars.forEach((s) => {
        s.alpha = 0.2 + 0.8 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,248,230,${s.alpha})`
        ctx.fill()
      })

      // Constellation lines
      for (let i = 0; i < stars.length - 1; i += 10) {
        const a = stars[i], b = stars[i + 1]
        if (
          Math.abs(a.x - b.x) < 140 &&
          Math.abs(a.y - b.y) < 140
        ) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = 'rgba(201,169,110,0.06)'
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Shooting star
      if (Date.now() > nextShoot) {
        if (shootAlpha <= 0) {
          shootX = Math.random() * canvas.width * 0.7 + canvas.width * 0.1
          shootY = Math.random() * canvas.height * 0.4
          shootAlpha = 1
        }
        if (shootAlpha > 0) {
          const len = 130
          ctx.beginPath()
          ctx.moveTo(shootX, shootY)
          ctx.lineTo(shootX + len * 0.7, shootY - len * 0.45)
          const grad = ctx.createLinearGradient(
            shootX, shootY,
            shootX + len * 0.7, shootY - len * 0.45
          )
          grad.addColorStop(0, `rgba(255,248,220,${shootAlpha})`)
          grad.addColorStop(1, 'transparent')
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.stroke()
          shootX -= 2.5
          shootY += 1.8
          shootAlpha -= 0.018
          if (shootAlpha <= 0) {
            nextShoot = Date.now() + Math.random() * 9000 + 5000
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
