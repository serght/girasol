import { motion } from 'framer-motion'

export default function SpotifyEmbed({ trackId, phrase }) {
  return (
    <div className="text-center">

      {/* Animación SOLO del contenido, no del iframe root */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="font-cormorant text-[0.65rem] tracking-[0.5em] uppercase block mb-3"
          style={{ color: 'var(--text-muted)' }}
        >
          ✦ &nbsp; La canción de este mes &nbsp; ✦
        </span>

        {phrase && (
          <p
            className="font-cormorant text-lg font-light italic mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            "{phrase}"
          </p>
        )}
      </motion.div>

      {/* Wrapper separado (IMPORTANTE para que no se rompa el iframe) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className="overflow-hidden mx-auto max-w-xl"
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(201,169,110,0.1)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        >
          <iframe
            title="Spotify embed"
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </motion.div>

    </div>
  )
}