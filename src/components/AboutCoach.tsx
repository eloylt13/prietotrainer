export default function AboutCoach() {
  return (
    <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#0A0E1A" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 flex items-center justify-center min-h-[340px]">
          <div className="w-40 h-40 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center">
            <span className="text-[#CCFF00] text-4xl font-extrabold">PT</span>
          </div>
        </div>

        <div>
          <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Sobre PrietoTrainer</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">Entrenamiento personalizado, seguimiento real y un plan adaptado a ti</h2>
          <div className="space-y-4 text-[#D1D5DB] text-sm md:text-base leading-relaxed">
            <p>PrietoTrainer está enfocado en ayudar a personas que quieren perder grasa, ganar músculo o transformar su físico con una estrategia clara y sostenible.</p>
            <p>El enfoque combina tres pilares: entrenamiento, nutrición y seguimiento. La idea no es darte una rutina genérica, sino un plan personalizado que se adapte a tu punto de partida, tu objetivo y tu ritmo de vida.</p>
            <p>La cercanía, el acompañamiento real y la personalización forman parte del valor diferencial del servicio, tanto en presencial como en online.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <p className="text-white font-bold mb-3">Ubicación</p>
              <p className="text-[#B0B0B0] text-sm mb-3">Tavernes de la Valldigna, Valencia</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12456.5!2d-0.2847!3d39.0747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61b8a8b8b8b8b8%3A0x1234567890!2sTavernes+de+la+Valldigna!5e0!3m2!1ses!2ses!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación PrietoTrainer en Tavernes de la Valldigna"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-white font-bold mb-2">Modalidades</p>
              <p className="text-[#B0B0B0] text-sm">Presencial y online con seguimiento</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-white font-bold mb-2">Método</p>
              <p className="text-[#B0B0B0] text-sm">Entrenamiento, nutrición y control del progreso</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <p className="text-white font-bold mb-2">Enfoque</p>
              <p className="text-[#B0B0B0] text-sm">Cercano, adaptado y orientado a resultados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}