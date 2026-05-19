import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition/PageTransition";
import CollageGrid from "../../components/CollageGrid/CollageGrid";
import photo1 from "../../assets/collage/photo1.jpeg";
import photo2 from "../../assets/collage/photo2.jpeg";
import photo3 from "../../assets/collage/photo3.jpg";
import photo4 from "../../assets/collage/photo4.jpeg";
import photo5 from "../../assets/collage/photo5.jpeg";
import photo6 from "../../assets/collage/photo6.jpeg";
import photo7 from "../../assets/collage/photo7.jpeg";
import photo8 from "../../assets/collage/photo8.jpeg";
import photo9 from "../../assets/collage/photo9.jpeg";
import photo10 from "../../assets/collage/photo10.jpeg";

// ─── ADD YOUR PHOTOS HERE ────────────────────────────────────────────────────
// 1. Put your photos inside: src/assets/collage/
// 2. Import them here:
//    import photo1 from '../../assets/collage/photo1.jpg'
// 3. Add them to the array below with a label:
//    { id: 1, src: photo1, label: 'Tu descripción', tall: true }
// Items with tall:true span 2 rows. Items with wide:true span 2 columns.
// ─────────────────────────────────────────────────────────────────────────────
const MY_PHOTOS = [
  { id: 1, src: photo1, label: "Primer dia", tall: true },
  { id: 2, src: photo2, label: "Un viaje juntos" },
  { id: 3, src: photo3, label: "Nuestros planes" },
  { id: 4, src: photo4, label: "Tu risa" },
  { id: 5, src: photo5, label: "Nuestro primer partido", tall: true },
  { id: 6, src: photo6, label: "Mi pequeña hermosa" },
  { id: 7, src: photo7, label: "Te esperare..." },
  { id: 8, src: photo8, label: "Desde el pasado hasta el presente" },
  { id: 9, src: photo9, label: "Te amo " },
  { id: 10, src: photo10, label: "Regresa pronto amor " },
];

export default function Collage() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-20">
        {/* Nav */}
        <div className="flex items-center justify-between px-8 md:px-16 mb-12">
          <button
            onClick={() => navigate("/mes-4")}
            className="font-cormorant text-[0.65rem] tracking-[0.3em] uppercase cursor-none transition-colors duration-300"
            style={{
              color: "var(--text-muted)",
              background: "none",
              border: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            ← Capítulo IV
          </button>
          <span
            className="font-cormorant text-[0.65rem] tracking-[0.4em] uppercase"
            style={{ color: "rgba(201,169,110,0.4)" }}
          ></span>
          <button
            onClick={() => navigate("/")}
            className="font-cormorant text-[0.65rem] tracking-[0.3em] uppercase cursor-none transition-colors duration-300"
            style={{
              color: "var(--text-muted)",
              background: "none",
              border: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Inicio →
          </button>
        </div>

        {/* Hero text */}
        <div className="text-center px-6 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              color: "var(--text-cream)",
              lineHeight: 1.05,
            }}
          >
            Nuestros
            <br />
            <em>recuerdos</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-cormorant font-light italic mt-4"
            style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}
          >
            Flotando en el espacio, como siempre han estado.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mx-auto mt-8"
            style={{
              width: "60px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, var(--gold), transparent)",
            }}
          />
        </div>

        {/* Grid */}
        <div className="flex justify-center px-6">
          <CollageGrid images={MY_PHOTOS.length > 0 ? MY_PHOTOS : undefined} />
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-20 px-6"
        >
          <p
            className="font-cormorant font-light italic"
            style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}
          >
            "Aquí vivirán todos los recuerdos que iremos creando juntos."
          </p>
          
        </motion.div>
      </div>
    </PageTransition>
  );
}
