"use client";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("formulario");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden" style={{ backgroundColor: "#0A0E1A" }}>
      <div className="max-w-2xl text-center relative z-10 flex flex-col items-center gap-6">

        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(204,255,0,0.1)", border: "1px solid rgba(204,255,0,0.3)", color: "#CCFF00" }}>
          Entrenamiento personal en Tavernes de la Valldigna
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Gana musculo y pierde grasa entrenando solo <span className="text-[#CCFF00]">2 dias a la semana</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl text-[#B0B0B0] leading-relaxed">
          Entrenamiento + nutricion personalizados con seguimiento real. Presencial en Tavernes de la Valldigna u online desde cualquier lugar.
        </p>

        <div className="flex flex-col gap-3 items-center w-full max-w-sm mt-2">
          <button onClick={scrollToForm} className="w-full py-4 px-8 rounded-lg font-bold text-lg cursor-pointer border-none bg-[#CCFF00] text-[#0A0E1A]">
            Reserva tu valoracion gratuita
          </button>
          <a href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-8 rounded-lg font-semibold text-center no-underline text-[#B0B0B0] border border-white/15">
            Escribeme por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}