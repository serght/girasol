import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ChapterCard({
  num,
  label,
  path,
  quote,
  accentColor,
  delay = 0,
  image,
}) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      onClick={() => navigate(path)}
      className="relative flex-shrink-0 w-52 h-80 md:w-56 md:h-[26rem] rounded-2xl overflow-hidden cursor-none group"
      style={{
        border: '1px solid rgba(201,169,110,0.08)',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={label.month}
          className="w-full h-full object-cover opacity-25 scale-110 group-hover:scale-125 transition-transform duration-[4000ms] ease-out"
        />
      </div>

      {/* COLOR GLOW */}
      <div
        className="absolute inset-0 opacity-40 group-hover:opacity-70 transition duration-700"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${accentColor}55 0%, transparent 70%)`,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.95) 5%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* BORDER GLOW */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: `inset 0 0 40px ${accentColor}20, 0 0 30px ${accentColor}15`,
        }}
      />

      {/* ROMAN NUMBER */}
      <div className="absolute top-6 left-0 right-0 flex justify-center">
        <span
          className="font-cormorant text-6xl font-light opacity-[0.12] group-hover:opacity-25 transition duration-700"
          style={{ color: accentColor }}
        >
          {num}
        </span>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 text-center">
        <span
          className="font-cormorant uppercase tracking-[0.45em] block mb-3"
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.72rem',
          }}
        >
          {label.chapter}
        </span>

        <h3
          className="font-cormorant font-light mb-3"
          style={{
            fontSize: '2rem',
            color: 'var(--text-cream)',
            lineHeight: 1,
          }}
        >
          {label.month}
        </h3>

        <p
          className="font-cormorant italic leading-relaxed"
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.92rem',
          }}
        >
          {quote}
        </p>
      </div>
    </motion.div>
  )
}