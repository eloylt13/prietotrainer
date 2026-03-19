import Image from "next/image";

export default function SocialProof() {
    const testimonials = [
        {
            name: "Karina",
            result: "Cambio físico visible",
            text:
                "En 4 meses he conseguido contigo resultados que no había logrado en 3 años de gimnasio. Me has enseñado a comer y a entrenar bien, y eso se nota muchísimo.",
        },
        {
            name: "Cliente presencial",
            result: "Trato cercano y atención personalizada",
            text:
                "La experiencia ha sido muy positiva. El trato es muy cercano, el entrenamiento está muy personalizado y la atención ha sido muy profesional.",
        },
        {
            name: "Cliente online",
            result: "Más fuerza, cardio y bienestar",
            text:
                "Gracias a tus entrenamientos he mejorado mi fuerza, mi resistencia y el cardio. Además, a nivel personal me siento mucho mejor.",
        },
    ];

    const highlights = [
        {
            title: "Seguimiento real",
            description: "Ajustes según evolución y acompañamiento durante el proceso.",
        },
        {
            title: "Entrenamiento + nutrición",
            description: "Un enfoque completo para avanzar con más sentido y constancia.",
        },
        {
            title: "Proceso adaptado",
            description: "Cada caso se trabaja según objetivo, nivel y ritmo de vida.",
        },
    ];

    return (
        <section
            className="px-6 py-16 md:py-20"
            style={{ backgroundColor: "#09111F" }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
                    <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
                        Prueba social
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Lo que más valoran quienes ya han trabajado conmigo
                    </h2>

                    <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mt-4">
                        Testimonios reales de personas que han mejorado su físico, su constancia
                        y su forma de entrenar con un proceso más personalizado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className={`rounded-2xl border p-6 md:p-7 ${index === 0
                                ? "border-[#CCFF00]/25 bg-[#CCFF00]/[0.04]"
                                : "border-white/10 bg-white/[0.04]"
                                }`}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <div className="rounded-2xl border border-[#CCFF00]/20 bg-[#CCFF00]/[0.04] overflow-hidden">
                        <div className="p-6 pb-4">
                            <p className="text-[#CCFF00] text-xs font-bold tracking-[0.16em] uppercase mb-2">
                                Antes y después real
                            </p>
                            <h3 className="text-white text-xl font-bold mb-2">
                                Cambio físico espectacular de María con 65 años
                            </h3>
                            <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed">
                                Un ejemplo visual de progreso cuando hay constancia, seguimiento y
                                un plan adaptado a la persona.
                            </p>
                        </div>

                        <div className="px-6 pb-6">
                            <div className="rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/images/prietotrainer/antes-despues-karina.jpg"
                                    alt="Cambio físico antes y después de una clienta de PrietoTrainer"
                                    width={1400}
                                    height={900}
                                    className="w-full h-[300px] md:h-[340px] object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
                        <div className="p-6 pb-4">
                            <p className="text-[#CCFF00] text-xs font-bold tracking-[0.16em] uppercase mb-2">
                                Entrenamiento real
                            </p>
                            <h3 className="text-white text-xl font-bold mb-2">
                                Trabajo adaptado a cada persona
                            </h3>
                            <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed">
                                No se trata solo de mandar una rutina. Se trata de corregir,
                                adaptar y acompañar el proceso según el objetivo y la evolución.
                            </p>
                        </div>

                        <div className="px-6 pb-6">
                            <div className="rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/images/prietotrainer/testimonio-cliente-entrenando.jpg"
                                    alt="Cliente entrenando en el gimnasio con seguimiento de PrietoTrainer"
                                    width={1200}
                                    height={1600}
                                    className="w-full h-[360px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
                        >
                            <p className="text-[#CCFF00] text-xl md:text-2xl font-extrabold">
                                {item.title}
                            </p>
                            <p className="text-[#B0B0B0] text-sm mt-3 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}