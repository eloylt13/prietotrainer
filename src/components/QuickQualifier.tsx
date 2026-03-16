"use client";
import { useState } from "react";

const steps = [
  {
    key: "objetivo",
    title: "¿Cuál es tu objetivo principal?",
    options: [
      { id: "perder-grasa", label: "Perder grasa", desc: "Quiero bajar de peso y verme mejor." },
      { id: "ganar-musculo", label: "Ganar músculo", desc: "Quiero un físico más fuerte y trabajado." },
      { id: "recomposicion", label: "Perder grasa y ganar músculo", desc: "Quiero cambiar mi físico de forma completa." },
      { id: "salud", label: "Mejorar salud y forma física", desc: "Quiero sentirme mejor y crear hábitos sostenibles." },
    ],
  },
  {
    key: "modalidad",
    title: "¿Cómo prefieres entrenar?",
    options: [
      { id: "presencial", label: "Presencial en Tavernes de la Valldigna", desc: "Entrena conmigo en persona con acompañamiento directo." },
      { id: "online", label: "Online con seguimiento", desc: "Plan adaptado sin depender de un lugar físico." },
      { id: "flexible", label: "La mejor opción para mí", desc: "Prefiero que me recomiendes según mi caso." },
    ],
  },
  {
    key: "freno",
    title: "¿Qué te está frenando más ahora mismo?",
    options: [
      { id: "tiempo", label: "No tengo tiempo", desc: "Necesito algo que encaje en mi rutina." },
      { id: "empezar", label: "No sé por dónde empezar", desc: "Quiero una guía clara y personalizada." },
      { id: "constancia", label: "Me cuesta ser constante", desc: "Necesito seguimiento y estructura." },
      { id: "resultados", label: "No veo resultados", desc: "Quiero dejar de improvisar y avanzar de verdad." },
    ],
  },
];

const summaryLabels = ["Objetivo", "Modalidad", "Freno"];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#CCFF00"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function QuickQualifier({ onComplete }: { onComplete?: (answers: Record<string, string>) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = (id: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = id;
    setAnswers(newAnswers);
    setTransitioning(true);

    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setTransitioning(false);
      }, 450);
    } else {
      setTimeout(() => {
        setDone(true);
        setTransitioning(false);
        if (onComplete) {
          const result: Record<string, string> = {};
          steps.forEach((step, i) => {
            const label = step.options.find(o => o.id === newAnswers[i])?.label || "";
            result[step.key] = label;
          });
          onComplete(result);
        }
      }, 450);
    }
  };

  const getLabel = (stepIndex: number, id?: string) => {
    if (!id) return "";
    return steps[stepIndex].options.find((o) => o.id === id)?.label || "";
  };

  const scrollToNextSection = () => {
    const el =
      document.getElementById("cta-final") ||
      document.getElementById("contact-form") ||
      document.getElementById("hero");

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (done) {
    return (
      <section
        className="min-h-[85vh] flex flex-col items-center justify-center px-5 py-8"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div className="max-w-md w-full flex flex-col items-center gap-4 text-center">
          <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase">PrietoTrainer</p>

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

          <div className="space-y-2">
            <p className="text-xs text-[#B0B0B0] uppercase tracking-[0.16em]">Tus respuestas</p>
            <div className="w-full space-y-2 text-left">
              {answers.map((answer, index) => (
                <div
                  key={`${summaryLabels[index]}-${answer}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B0B0B0]">{summaryLabels[index]}</span>
                  <span className="text-sm font-semibold text-[#CCFF00] text-right">{getLabel(index, answer)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-white text-lg font-bold">Perfecto. Ya sé qué puede encajar contigo.</p>
            <p className="text-[#B0B0B0] text-sm">Ahora te enseño cómo puedo ayudarte a conseguirlo.</p>
          </div>

          <button
            onClick={scrollToNextSection}
            className="w-full max-w-xs py-4 rounded-xl font-bold text-base cursor-pointer border-none bg-[#CCFF00] text-[#0A0E1A] mt-2 shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-transform duration-200 hover:scale-[1.01]"
          >
            Reserva tu valoración gratuita
          </button>

          <a
            href="https://wa.me/34665385628"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xs py-3 rounded-xl font-semibold text-center no-underline text-[#B0B0B0] text-sm border border-white/15 bg-white/[0.02] hover:border-white/25 transition-colors"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </section>
    );
  }

  const step = steps[currentStep];

  return (
    <section
      className="min-h-[85vh] flex flex-col items-center justify-start px-5 pt-5 pb-4"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="max-w-md w-full flex flex-col items-center gap-2.5">
        <p className="text-[#CCFF00] text-[11px] font-bold tracking-[0.18em] uppercase">PrietoTrainer</p>

        <h1 className="text-lg md:text-xl font-extrabold text-white leading-snug text-center max-w-sm">
          Gana músculo y pierde grasa con entrenamiento, nutrición y seguimiento real
        </h1>

        <p className="text-[#B0B0B0] text-xs text-center leading-relaxed max-w-sm">
          Entrena solo 2 días por semana. Presencial en Tavernes de la Valldigna u online.
        </p>

        <div className="flex gap-2 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${i <= currentStep ? "bg-[#CCFF00] w-14" : "bg-white/10 w-10"}`}
            />
          ))}
        </div>

        <p className="text-xs text-[#B0B0B0]">Paso {currentStep + 1} de 3</p>

        <h2 className="text-base md:text-lg font-bold text-white text-center mt-1">{step.title}</h2>

        <div className={`w-full flex flex-col gap-2 transition-opacity duration-200 ${transitioning ? "opacity-60" : "opacity-100"}`}>
          {step.options.map((option) => {
            const isSelected = answers[currentStep] === option.id;

            return (
              <button
                key={option.id}
                onClick={() => !transitioning && handleSelect(option.id)}
                className={`w-full text-left px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-3 ${isSelected ? "border-[#CCFF00] bg-[#CCFF00]/10 shadow-[0_0_15px_rgba(204,255,0,0.12)]" : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"}`}
                aria-pressed={isSelected}
              >
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${isSelected ? "text-[#CCFF00]" : "text-white"}`}>{option.label}</p>
                  <p className="text-xs text-[#B0B0B0] mt-0.5">{option.desc}</p>
                </div>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}