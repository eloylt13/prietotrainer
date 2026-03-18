import ContactForm from "@/components/ContactForm";

export default function FinalCTA({
  quizAnswers,
}: {
  quizAnswers?: Record<string, string>;
}) {
  return (
    <section
      id="cta-final"
      className="px-6 py-16 md:py-20"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-10 items-start">
        <div>
          <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
            Empieza ahora
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
            Reserva tu valoración gratuita y te orientaré según tu objetivo
          </h2>

          <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mb-6">
            Cuéntame qué quieres conseguir y veremos qué enfoque tiene más
            sentido para ti, ya sea presencial, online o con un formato híbrido.
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.04]">
              <p className="font-bold mb-2 text-white">¿Qué pasa después?</p>

              <div className="space-y-2 text-sm leading-relaxed text-[#B0B0B0]">
                <p>1. Me envías tu caso</p>
                <p>2. Lo reviso personalmente</p>
                <p>3. Te respondo con la mejor opción para ti</p>
              </div>
            </div>

            <a
              href="https://wa.me/34665385628"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/10 bg-white/[0.04] text-white no-underline"
            >
              Prefiero hablar por WhatsApp
            </a>
          </div>
        </div>

        <ContactForm quizAnswers={quizAnswers} />
      </div>
    </section>
  );
}