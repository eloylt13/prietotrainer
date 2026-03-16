import ContactForm from "@/components/ContactForm";

export default function FinalCTA({ quizAnswers }: { quizAnswers?: Record<string, string> }) {
  return (
    <section id="cta-final" className="px-6 py-16 md:py-20" style={{ backgroundColor: "#0A0E1A" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-10 items-start">
        <div>
          <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Empieza ahora</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">Reserva tu valoración gratuita y te orientaré según tu objetivo</h2>
          <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mb-6">Cuéntame qué quieres conseguir y veremos qué enfoque tiene más sentido para ti, ya sea presencial en Tavernes de la Valldigna o con seguimiento online.</p>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-white font-bold mb-2">¿Qué pasa después?</p>
              <div className="space-y-2 text-[#B0B0B0] text-sm leading-relaxed">
                <p>1. Me envías tu caso</p>
                <p>2. Lo reviso personalmente</p>
                <p>3. Te respondo con la mejor opción para ti</p>
              </div>
            </div>
            <a href="https://wa.me/34665385628" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline text-white border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.305 0-4.461-.636-6.312-1.742l-.44-.262-3.093 1.037 1.037-3.093-.262-.44A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Prefiero hablar por WhatsApp
            </a>
          </div>
        </div>
        <ContactForm quizAnswers={quizAnswers} />
      </div>
    </section>
  );
}