export default function Benefits() {
    const benefits = [
        {
            title: "Plan adaptado a tu rutina",
            description:
                "Entrena con una estructura que encaja en tu rutina, incluso si tienes poco tiempo.",
        },
        {
            title: "Estrategia completa e integrada",
            description:
                "No solo tienes una rutina: cuentas con una estrategia completa y acompañamiento real.",
        },
        {
            title: "Resultados reales con proceso claro",
            description:
                "Deja de probar cosas al azar y empieza a avanzar con un plan pensado para ti.",
        },
        {
            title: "Acompañamiento real y cercano",
            description:
                "Acompañamiento directo para resolver dudas, ajustar el proceso y mantener la constancia.",
        },
    ];

    return (
        <section
            className="px-6 py-16 md:py-20"
            style={{ backgroundColor: "#0A0E1A" }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
                        Beneficios
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Deja de improvisar y empieza a avanzar con una estrategia clara
                    </h2>

                    <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mt-4">
                        La idea no es entrenar más por entrenar. La idea es tener un sistema
                        claro para avanzar con constancia y resultados reales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center mb-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
                            </div>

                            <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                {benefit.title}
                            </h3>

                            <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}