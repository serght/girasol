import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const paraVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

function getRemainingDays(targetDate) {
  const diff = new Date(targetDate) - new Date()

  if (diff <= 0) return 0

  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function LoveLetter({
  paragraphs,
  sign,
  unlockDate,
}) {
  const isUnlocked = new Date() >= new Date(unlockDate)

  const remainingDays = getRemainingDays(unlockDate)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      className="relative w-full"
    >
      {/* LOCK OVERLAY */}
      {!isUnlocked && (
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6"
          style={{
            backdropFilter: 'blur(18px)',
            background: 'rgba(0,0,0,0.55)',
            borderRadius: '24px',
          }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: 'easeInOut',
            }}
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}
          >
            🔒
          </motion.div>

          <h3
            className="font-cormorant mb-3"
            style={{
              fontSize: '2rem',
              color: 'var(--text-cream)',
            }}
          >
            Carta bloqueada
          </h3>

          <p
            className="font-cormorant italic"
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              maxWidth: '500px',
              lineHeight: 1.8,
            }}
          >
            Esta carta se abrirá en {remainingDays} días.
          </p>
        </div>
      )}

      {/* LETTER CONTENT */}
      <div
        className={`transition-all duration-700 ${
          !isUnlocked ? 'blur-md scale-[0.98]' : ''
        }`}
      >
        {/* Ornament */}
        <div className="flex flex-col items-center mb-10">
          <span className="ornament-line" />

          <span
            className="font-cormorant text-xl my-2 select-none"
            style={{ color: 'var(--gold)' }}
          >
            ✦
          </span>

          <span className="ornament-line" />
        </div>

        <motion.span
          variants={paraVariants}
          className="font-cormorant text-[0.65rem] tracking-[0.5em] uppercase block text-center mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          — Una carta para este mes —
        </motion.span>

        {/* CARD */}
        <div
          className="relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(201,169,110,0.08)',
            borderRadius: '24px',
            padding: '3rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at top left, rgba(201,169,110,0.06), transparent 45%)',
            }}
          />

          <div className="relative z-10 space-y-7">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={paraVariants}
                className="font-cormorant leading-loose"
                style={{
                  fontSize: i === 0 ? '1.3rem' : '1.1rem',
                  fontStyle: i === 0 ? 'italic' : 'normal',
                  color:
                    i === 0
                      ? 'var(--text-cream)'
                      : '#c8c0b8',
                  fontWeight: 300,
                }}
              >
                {p}
              </motion.p>
            ))}

            {sign && (
              <motion.p
                variants={paraVariants}
                className="font-cormorant text-xl font-light italic text-right pt-4"
                style={{ color: 'var(--gold)' }}
              >
                {sign} &nbsp;✦
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}