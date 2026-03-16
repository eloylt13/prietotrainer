export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Cuéntame tu objetivo y tu punto de partida y tu punto de partida",
            description:
                "Primero revisamos qué quieres conseguir, tu punto de partida y qué opción encaja mejor contigo.",
        },
        {
            number: "02",
            title: "Hacemos una valoración gratuita",
            description:
                "Hablamos contigo, resolvemos dudas y definimos un enfoque realista según tu caso.",
        },
        {
            number: "03",
            title: "Empiezas con una estrategia adaptada a ti",
            description:
                "Recibes entrenamiento, nutrición y seguimiento para avanzar con estructura y resultados visibles.",
        },
    ];

    return (
        <section
            className="px-6 py-12 md:py-16"
            style={{ backgroundColor: "#09111F" }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
                        Cómo funciona
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Así de simple es empezar
                    </h2>

                    <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mt-4">
                        La idea es que sepas desde el principio qué va a pasar y cómo vas a
                        empezar a trabajar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7"
                        >
                            <p className="text-[#CCFF00] text-sm font-extrabold tracking-[0.18em] uppercase mb-4">
                                {step.number}
                            </p>

                            <h3 className="text-white text-xl font-bold leading-snug mb-3">
                                {step.title}
                            </h3>

                            <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}