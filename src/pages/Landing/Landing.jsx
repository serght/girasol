import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChapterCard from "../../components/ChapterCard/ChapterCard";
import { CHAPTERS_LANDING, FINAL_REUNION_DATE } from "../../context/monthsData";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="relative min-h-[170vh] flex flex-col items-center text-center px-6 pt-36 pb-28">
        {/* Top label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-cormorant text-[0.65rem] tracking-[0.5em] uppercase mb-8 block mt-10"
          style={{ color: "var(--text-muted)" }}
        >
          &nbsp; Una historia escrita en las estrellas &nbsp;
        </motion.span>

        {/* Hero title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-cormorant font-light italic leading-[1.15] mb-14"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
            color: "var(--text-cream)",
            letterSpacing: "-0.01em",
            maxWidth: "900px",
            textShadow: "0 0 80px rgba(201,169,110,0.12)",
          }}
        >
          Te esperé{" "}
          <span style={{ color: "var(--gold)", fontStyle: "normal" }}>
            4 años
          </span>
          ,<br />4 meses no será nada
        </motion.h1>

        {/* MAIN COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 mb-12 w-full flex flex-col items-center"
        >
          <span
            className="font-cormorant uppercase tracking-[0.45em] mb-6"
            style={{
              color: "var(--text-muted)",
              fontSize: "0.7rem",
            }}
          >
            Cuenta regresiva para volver a verte
          </span>

          <div
            className="px-8 py-7 rounded-[2rem]"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(201,169,110,0.08)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 60px rgba(201,169,110,0.06)",
            }}
          >
            <CountdownTimer targetDate={FINAL_REUNION_DATE} />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="font-cormorant font-light italic mb-16"
          style={{ fontSize: "1.15rem", color: "var(--text-muted)" }}
        >
          "Cada mes será una página más de nuestra historia."
        </motion.p>

        {/* Chapters label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="font-cormorant text-[0.65rem] tracking-[0.5em] uppercase mb-8 block"
          style={{ color: "var(--text-muted)" }}
        >
          — Nuestros capítulos —
        </motion.span>

        {/* Chapter cards */}
        <div
          className="flex gap-5 overflow-x-auto pb-4 w-full justify-center flex-wrap"
          style={{ scrollbarWidth: "none" }}
        >
          {CHAPTERS_LANDING.map((card) => (
            <ChapterCard key={card.path} {...card} />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--text-dim)" }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ fontSize: "0.8rem" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
