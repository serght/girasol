import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLACEHOLDER_ITEMS = [
  { id: 1, label: "Primer beso", color: "rgba(244,194,194,0.08)", tall: true },
  { id: 2, label: "Te esperé", color: "rgba(197,184,232,0.08)" },
  {
    id: 3,
    label: "Nuestros planes",
    color: "rgba(184,212,232,0.08)",
  },
  { id: 4, label: "Tu risa", color: "rgba(184,224,210,0.08)", wide: true },
  { id: 5, label: "Juntos", color: "rgba(201,169,110,0.08)", tall: true },
  { id: 6, label: "El viaje", color: "rgba(244,212,184,0.08)" },
  { id: 7, label: "Las noches", color: "rgba(244,194,194,0.08)", tall: true },
  {
    id: 8,
    label: "Regresa pronto",
    color: "rgba(197,184,232,0.08)",
  },
  { id: 9, label: "Te amo", color: "rgba(201,169,110,0.08)" },
  {
    id: 10,
    label: "Regresa pronto amor",
    color: "rgba(201,169,110,0.08)",
  },
];

export default function CollageGrid({ images }) {
  const [selected, setSelected] = useState(null);
  const [activeMobile, setActiveMobile] = useState(null);

  const items = images?.length ? images : PLACEHOLDER_ITEMS;

  const isMobile = window.innerWidth < 768;

  const handleMobileLabel = (id) => {
    setActiveMobile(activeMobile === id ? null : id);
  };

  return (
    <>
      {/* GRID */}
      <div
        className="
          grid
          gap-3
          px-4
          md:px-6
          mx-auto
          w-full
          grid-cols-2
          md:grid-cols-3
        "
        style={{
          maxWidth: "960px",
          gridAutoRows: isMobile ? "120px" : "200px",
        }}
      >
        {items.map((item, i) => {
          const isMobileActive = activeMobile === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              whileHover={{
                scale: 1.03,
                rotate: !isMobile ? 0.4 : 0,
                zIndex: 2,
              }}
              onClick={() => {
                if (isMobile) {
                  handleMobileLabel(item.id);
                } else {
                  setSelected(item);
                }
              }}
              onDoubleClick={() => {
                if (isMobile) {
                  setSelected(item);
                }
              }}
              className="relative overflow-hidden rounded-2xl group"
              style={{
                gridRow: item.tall ? "span 2" : "span 1",

                gridColumn:
                  !isMobile && item.wide
                    ? "span 2"
                    : "span 1",

                border: "1px solid rgba(201,169,110,0.08)",
                background: item.color,
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    filter: "brightness(0.96) saturate(1.1)",
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <span
                    style={{
                      fontSize: "1.5rem",
                      opacity: 0.4,
                      color: "var(--gold)",
                    }}
                  >
                    ✦
                  </span>

                  <span
                    className="font-cormorant text-sm font-light italic"
                    style={{
                      color: "rgba(201,169,110,0.5)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              )}

              {/* DARK OVERLAY */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.25) 100%)",
                }}
              />

              {/* DESKTOP HOVER */}
              <div
                className="
                  absolute 
                  inset-0 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-500 
                  hidden 
                  md:flex 
                  items-end 
                  p-4
                "
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,5,0.82) 0%, transparent 100%)",
                }}
              >
                <span
                  className="font-cormorant text-lg font-light italic"
                  style={{
                    color: "var(--text-cream)",
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* MOBILE TAP LABEL */}
              <AnimatePresence>
                {isMobileActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-end p-3 md:hidden"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.2) 100%)",
                    }}
                  >
                    <span
                      className="font-cormorant italic leading-snug"
                      style={{
                        color: "var(--text-cream)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE HINT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="md:hidden text-center mt-6 px-6 font-cormorant italic"
        style={{
          color: "var(--text-muted)",
          fontSize: "0.95rem",
        }}
      >
      
      </motion.p>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{
              background: "rgba(5,5,5,0.92)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              {selected.src ? (
                <img
                  src={selected.src}
                  alt={selected.label}
                  className="w-full max-h-[85vh] object-cover"
                />
              ) : (
                <div
                  className="w-full h-80 flex flex-col items-center justify-center gap-3"
                  style={{
                    background: selected.color,
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      color: "var(--gold)",
                      opacity: 0.5,
                    }}
                  >
                    ✦
                  </span>

                  <p
                    className="font-cormorant text-xl font-light italic"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {selected.label}
                  </p>

                  <p
                    className="font-cormorant text-sm"
                    style={{
                      color: "var(--text-dim)",
                    }}
                  >
                    Añade tu foto aquí
                  </p>
                </div>
              )}

              {/* LABEL */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.88), transparent)",
                }}
              >
                <p
                  className="font-cormorant italic"
                  style={{
                    color: "var(--text-cream)",
                    fontSize: "1.25rem",
                  }}
                >
                  {selected.label}
                </p>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center font-light text-lg"
                style={{
                  background: "rgba(5,5,5,0.7)",
                  color: "var(--text-muted)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}