export default function Programs() {
    const programs = [
        {
            title: "Presencial en Tavernes de la Valldigna",
            subtitle: "La opción principal",
            description:
                "Entrenamiento personalizado con acompañamiento directo, planificación de dieta y seguimiento adaptado a tu caso.",
            bullets: [
                "Entrenamiento personalizado",
                "Nutrición adaptada a tu objetivo",
                "Seguimiento real del progreso",
                "Ideal si buscas cercanía y control directo",
            ],
        },
        {
            title: "Online con seguimiento",
            subtitle: "Flexible y eficaz",
            description:
                "Una opción pensada para personas que quieren resultados sin depender de entrenar presencialmente.",
            bullets: [
                "Plan de entrenamiento personalizado",
                "Nutrición y pautas adaptadas",
                "Seguimiento y ajustes",
                "Ideal si necesitas flexibilidad",
            ],
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
                        Servicios
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Elige la modalidad que mejor encaje contigo
                    </h2>

                    <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mt-4">
                        La base siempre es la misma: entrenamiento, nutrición y seguimiento
                        real. Lo que cambia es cómo trabajamos contigo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`rounded-2xl border p-6 md:p-7 ${index === 0
                                    ? "border-[#CCFF00]/35 bg-[#CCFF00]/[0.05]"
                                    : "border-white/10 bg-white/[0.04]"
                                }`}
                        >
                            <div className="mb-4">
                                <p className="text-[#CCFF00] text-xs font-bold tracking-[0.16em] uppercase mb-2">
                                    {program.subtitle}
                                </p>

                                <h3 className="text-white text-2xl font-bold leading-tight">
                                    {program.title}
                                </h3>
                            </div>

                            <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed mb-5">
                                {program.description}
                            </p>

                            <ul className="space-y-3">
                                {program.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex items-start gap-3 text-sm md:text-base text-[#E5E7EB]"
                                    >
                                        <span className="mt-2 w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto text-center mt-10">
                    <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed">
                        No hace falta decidirlo todo ahora. En la valoración inicial se puede
                        ver qué opción tiene más sentido para ti.
                    </p>
                </div>
            </div>
        </section>
    );
}