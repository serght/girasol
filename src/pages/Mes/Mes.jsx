import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition/PageTransition";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import SpotifyEmbed from "../../components/SpotifyEmbed/SpotifyEmbed";
import LoveLetter from "../../components/LoveLetter/LoveLetter";
import { MONTHS } from "../../context/monthsData";

export default function Mes({ mesNum }) {
  const navigate = useNavigate();
  const data = MONTHS[mesNum - 1];

  if (!data) return null;

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col items-center">
        {/* ── Hero ── */}
        <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Month nav */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 pt-24 z-20">
            <button
              onClick={() => navigate(data.prevPath)}
              className="font-cormorant text-[0.65rem] tracking-[0.3em] uppercase flex items-center gap-2 transition-colors duration-300 cursor-none"
              style={{
                color: "var(--text-muted)",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              ← {data.prevLabel}
            </button>

            <button
              onClick={() => navigate(data.nextPath)}
              className="font-cormorant text-[0.65rem] tracking-[0.3em] uppercase flex items-center gap-2 transition-colors duration-300 cursor-none"
              style={{
                color: "var(--text-muted)",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {data.nextLabel} →
            </button>
          </div>

          {/* Hero visual */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "82%",
              maxWidth: "900px",
              height: "500px",
              borderRadius: "16px",
              border: "1px solid rgba(201,169,110,0.12)",
            }}
          >
            {/* Background image */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={data.image}
                alt={data.month}
                className="w-full h-full object-cover opacity-55 brightness-110 contrast-110 saturate-125"
              />
            </motion.div>

            {/* Gradient color overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `
      radial-gradient(
        ellipse at center,
        ${data.accentColor}55 0%,
        rgba(5,5,5,0.45) 45%,
        rgba(5,5,5,0.92) 100%
      )
    `,
              }}
            />

            {/* Dark cinematic overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.75))",
              }}
            />

          
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5,5,5,0.1), rgba(5,5,5,0.65))",
                borderRadius: "16px",
              }}
            />

            {/* Text on hero */}
            <div className="absolute bottom-8 left-0 right-0 text-center px-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-cormorant text-[0.65rem] tracking-[0.5em] uppercase block mb-3"
                style={{ color: `${data.accentColor}bb` }}
              >
                {data.chapterLabel} · {data.month}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-cormorant font-light italic"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                  color: "var(--text-cream)",
                  lineHeight: 1.25,
                  textShadow: "0 2px 40px rgba(0,0,0,0.8)",
                }}
              >
                {data.heroQuote}
              </motion.h2>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="w-full max-w-3xl mx-auto px-6 md:px-10 py-20 space-y-24 flex flex-col items-center">
          {/* Countdown */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span
              className="font-cormorant text-[0.65rem] tracking-[0.5em] uppercase block mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Tiempo que le queda al mes 
            </span>
            <CountdownTimer targetDate={data.targetDate} />
          </motion.section>

          {/* Divider */}
          <div
            className="mx-auto"
            style={{
              width: "1px",
              height: "80px",
              background:
                "linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)",
            }}
          />

          {/* Spotify */}
          <SpotifyEmbed
            trackId={data.spotifyTrackId}
            phrase={data.spotifyPhrase}
          />

          {/* Divider */}
          <div
            className="mx-auto"
            style={{
              width: "1px",
              height: "80px",
              background:
                "linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)",
            }}
          />

          {/* Letter */}
          <LoveLetter
            paragraphs={data.letter.paragraphs}
            sign={data.letter.sign}
            unlockDate={data.letter.unlockDate}
          />

          {/* Bottom nav */}
          <div
            className="flex justify-between items-center pt-8 mt-14 border-t"
            style={{ borderColor: "rgba(201,169,110,0.08)" }}
          >
            <button
              onClick={() => navigate(data.prevPath)}
              className="font-cormorant text-[0.65rem] tracking-[0.3em] uppercase cursor-none transition-colors duration-300"
              style={{
                color: "var(--text-muted)",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              ← {data.prevLabel}
            </button>
            <span
              style={{ color: "rgba(201,169,110,0.3)", fontSize: "0.9rem" }}
            >
              ✦ 
            </span>
            <button
              onClick={() => navigate(data.nextPath)}
              className="font-cormorant text-[0.65rem] tracking-[0.3em] uppercase cursor-none transition-colors duration-300"
              style={{
                color: "var(--text-muted)",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {data.nextLabel} →
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
