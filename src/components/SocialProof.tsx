export default function SocialProof() {
    const testimonials = [
        {
            name: "Cliente",
            result: "Más estructura y mejores resultados",
            text: "Lo que más valoro es el trato cercano y que no solo trabaja el entrenamiento, también la nutrición y el seguimiento.",
        },
        {
            name: "Cliente",
            result: "Cambio físico visible",
            text: "Conseguí resultados que no había conseguido por mi cuenta. Todo está mucho más adaptado y se nota el acompañamiento.",
        },
        {
            name: "Cliente",
            result: "Más constancia y confianza",
            text: "Me ayudó a dejar de improvisar. Tener una guía clara y alguien que te siga hace mucha diferencia.",
        },
    ];

    return (
        <section
            className="px-6 py-16 md:py-20"
            style={{ backgroundColor: "#09111F" }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                    <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
                        Prueba social
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Lo que más valoran quienes trabajan conmigo
                    </h2>

                    <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mt-4">
                        Aquí luego podrás sustituir estos bloques por testimonios reales,
                        mensajes aprobados y transformaciones con permiso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7"
                        >
                            <div className="mb-4">
                                <p className="text-[#CCFF00] text-xs font-bold tracking-[0.16em] uppercase mb-2">
                                    {item.result}
                                </p>

                                <p className="text-white text-lg font-bold">{item.name}</p>
                            </div>

                            <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed">
                                “{item.text}”
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                        <p className="text-[#CCFF00] text-3xl font-extrabold">1:1</p>
                        <p className="text-[#B0B0B0] text-sm mt-2">
                            Enfoque personalizado en cada proceso
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                        <p className="text-[#CCFF00] text-3xl font-extrabold">3 pilares</p>
                        <p className="text-[#B0B0B0] text-sm mt-2">
                            Entrenamiento, nutrición y seguimiento
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                        <p className="text-[#CCFF00] text-3xl font-extrabold">Real</p>
                        <p className="text-[#B0B0B0] text-sm mt-2">
                            Trato cercano y proceso adaptado a tu caso
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}