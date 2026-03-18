import Image from "next/image";

export default function AboutCoach() {
  return (
    <section
      className="px-6 py-14 md:py-16"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 md:gap-10 items-start">
          <div
            className="rounded-3xl p-5 md:p-6"
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/prietotrainer/juanma-principal.jpg"
                  alt="Juanma Prieto entrenador personal"
                  width={1200}
                  height={1400}
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/prietotrainer/juanma-entrenando.jpg"
                    alt="Juanma Prieto durante un entrenamiento"
                    width={900}
                    height={900}
                    className="w-full h-[180px] md:h-[210px] object-cover"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/prietotrainer/juanma-resultados.jpg"
                    alt="Juanma Prieto mostrando resultados físicos"
                    width={900}
                    height={900}
                    className="w-full h-[180px] md:h-[210px] object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  1:1 personalizado
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  Presencial y online
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  Seguimiento real
                </span>
              </div>
            </div>
          </div>

          <div>
            <p
              className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
              style={{ color: "#CCFF00" }}
            >
              Sobre PrietoTrainer
            </p>

            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: "#FFFFFF" }}
            >
              Entrenamiento personalizado, seguimiento real y un plan adaptado a ti
            </h2>

            <div
              className="space-y-4 text-sm md:text-base leading-relaxed"
              style={{ color: "#B0B0B0" }}
            >
              <p>
                PrietoTrainer está pensado para personas que quieren perder grasa,
                ganar músculo o mejorar su forma física con una estrategia clara y
                sostenible.
              </p>

              <p>
                La base del servicio combina entrenamiento, nutrición y seguimiento,
                tanto en presencial como en online. La idea no es darte una rutina
                genérica, sino ayudarte a avanzar con un plan realista según tu
                objetivo, tu nivel y tu ritmo de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-white font-bold mb-2">Zona de trabajo</p>
                <p className="text-[#B0B0B0] text-sm">
                  Tavernes de la Valldigna y alrededores
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-white font-bold mb-2">Modalidades</p>
                <p className="text-[#B0B0B0] text-sm">
                  Presencial y online con seguimiento
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-white font-bold mb-2">Método</p>
                <p className="text-[#B0B0B0] text-sm">
                  Entrenamiento, nutrición y control del progreso
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-white font-bold mb-2">Enfoque</p>
                <p className="text-[#B0B0B0] text-sm">
                  Cercano, adaptado y orientado a resultados
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 mt-4">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <p className="font-bold text-white">Ubicación</p>
                  <p className="text-sm mt-1 text-[#B0B0B0]">
                    Tavernes de la Valldigna, Valencia
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Tavernes+de+la+Valldigna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-2 rounded-lg"
                  style={{
                    color: "#CCFF00",
                    border: "1px solid rgba(204, 255, 0, 0.30)",
                    backgroundColor: "rgba(204, 255, 0, 0.08)",
                  }}
                >
                  Abrir en Maps
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Tavernes+de+la+Valldigna&z=13&output=embed"
                  width="100%"
                  height="240"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)",
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación PrietoTrainer en Tavernes de la Valldigna"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}