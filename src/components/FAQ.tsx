const items = [
    {
        question: "¿Necesito experiencia previa para empezar?",
        answer:
            "No. La idea es adaptar el plan a tu nivel actual y a tu punto de partida, no al de otra persona.",
    },
    {
        question: "¿Cuántos días a la semana necesito entrenar?",
        answer:
            "Depende de tu objetivo y de tu disponibilidad, pero el planteamiento está pensado para que sea realista y sostenible.",
    },
    {
        question: "¿También se puede hacer online?",
        answer:
            "Sí. La modalidad online incluye planificación, nutrición y seguimiento para que puedas avanzar aunque no entrenes presencialmente.",
    },
    {
        question: "¿La valoración inicial es gratuita?",
        answer:
            "Sí. Sirve para entender tu caso, resolver dudas y ver qué opción tiene más sentido para ti.",
    },
    {
        question: "¿Qué incluye el seguimiento?",
        answer:
            "El seguimiento ayuda a ajustar el plan, resolver dudas y mantener una estructura real durante el proceso.",
    },
];

export default function FAQ() {
    return (
        <section
            className="px-6 py-12 md:py-16"
            style={{ backgroundColor: "#09111F" }}
        >
            <div className="max-w-4xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
                        Preguntas frecuentes
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Resolvemos las dudas más habituales antes de empezar
                    </h2>
                </div>

                <div className="space-y-4">
                    {items.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6"
                        >
                            <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                                <span className="text-white font-bold text-base md:text-lg">
                                    {item.question}
                                </span>
                                <span className="text-[#CCFF00] text-xl transition-transform group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed mt-4 pr-6">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}