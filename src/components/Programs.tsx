export default function Programs() {
    const programs = [
        {
            title: "Entrenamiento presencial",
            subtitle: "Acompañamiento directo",
            description:
                "Ideal si buscas corrección técnica, cercanía y más control durante el proceso.",
            bullets: [
                "Sesiones personalizadas",
                "Seguimiento del progreso",
                "Ajustes según evolución",
                "Ideal si valoras supervisión directa",
            ],
            highlight: true,
        },
        {
            title: "Seguimiento online",
            subtitle: "Flexible y eficaz",
            description:
                "Una opción pensada para personas que quieren resultados con una estructura clara y sin depender de un lugar físico.",
            bullets: [
                "Plan de entrenamiento personalizado",
                "Pautas de nutrición adaptadas",
                "Seguimiento y revisiones",
                "Ideal si necesitas flexibilidad",
            ],
            highlight: false,
        },
        {
            title: "Plan híbrido",
            subtitle: "Lo mejor de ambos formatos",
            description:
                "Combina la flexibilidad del seguimiento online con sesiones presenciales puntuales para revisar técnica, progreso y estrategia.",
            bullets: [
                "Base de trabajo online",
                "Sesiones presenciales de control",
                "Ajustes periódicos",
                "Ideal si quieres equilibrio y seguimiento",
            ],
            highlight: false,
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
                        La base siempre es la misma: entrenamiento, nutrición y seguimiento.
                        Lo que cambia es el formato que mejor encaja contigo y con tu rutina.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {programs.map((program) => (
                        <div
                            key={program.title}
                            className={`rounded-2xl p-6 md:p-7 border ${program.highlight
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