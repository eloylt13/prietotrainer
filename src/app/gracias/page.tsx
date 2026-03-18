import Link from "next/link";

export default function GraciasPage() {
    return (
        <main
            className="min-h-screen px-6 py-16 flex items-center justify-center"
            style={{ backgroundColor: "#0A0E1A" }}
        >
            <div className="max-w-xl w-full text-center flex flex-col items-center gap-5">
                <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase">
                    PrietoTrainer
                </p>

                <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-[0_0_18px_rgba(204,255,0,0.18)]">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0A0E1A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Gracias. He recibido tu solicitud
                </h1>

                <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed max-w-lg">
                    Este es el punto donde después conectaremos el flujo real del
                    formulario. De momento, la demo ya tiene completado el recorrido
                    básico.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-base no-underline bg-[#CCFF00] text-[#0A0E1A]"
                    >
                        Volver al inicio
                    </Link>

                    <a
                        href="https://wa.me/34665385628"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm no-underline text-[#B0B0B0] border border-white/15 bg-white/[0.02]"
                    >
                        Escribirme por WhatsApp
                    </a>
                </div>
            </div>
        </main>
    );
}