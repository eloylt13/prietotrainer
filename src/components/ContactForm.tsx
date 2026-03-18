"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const colors = {
  bg: "#0A0E1A",
  card: "rgba(255,255,255,0.04)",
  input: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.10)",
  text: "#FFFFFF",
  textMuted: "#B0B0B0",
  placeholder: "#8F97A6",
  accent: "#CCFF00",
};

const objectiveMap: Record<string, string> = {
  "Perder grasa": "Perder grasa",
  "Ganar músculo": "Ganar músculo",
  "Perder grasa y ganar músculo": "Perder grasa y ganar músculo",
  "Mejorar salud y forma física": "Mejorar salud y forma física",
};

const modalityMap: Record<string, string> = {
  Presencial: "Presencial",
  "Online con seguimiento": "Online",
  "Quiero que me recomienden la mejor opción": "No lo tengo claro todavía",
};

export default function ContactForm({
  quizAnswers,
}: {
  quizAnswers?: Record<string, string>;
}) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [objective, setObjective] = useState("Perder grasa");
  const [modality, setModality] = useState("Presencial");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (quizAnswers?.objetivo) {
      const mapped = objectiveMap[quizAnswers.objetivo];
      if (mapped) setObjective(mapped);
    }

    if (quizAnswers?.modalidad) {
      const mapped = modalityMap[quizAnswers.modalidad];
      if (mapped) setModality(mapped);
    }
  }, [quizAnswers]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Por favor, escribe tu nombre.");
      return;
    }

    router.push("/gracias");
  };

  const hasQuizData = quizAnswers?.objetivo || quizAnswers?.modalidad;

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="w-full rounded-2xl p-6 md:p-7"
      style={{
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.card,
      }}
    >
      <div className="grid grid-cols-1 gap-4">
        {hasQuizData && (
          <div
            className="rounded-xl px-4 py-3 mb-1"
            style={{
              border: "1px solid rgba(204, 255, 0, 0.25)",
              backgroundColor: "rgba(204, 255, 0, 0.08)",
            }}
          >
            <p
              className="text-xs font-semibold"
              style={{ color: colors.accent }}
            >
              Datos del quiz ya completados
            </p>
          </div>
        )}

        <p
          className="text-sm text-center"
          style={{ color: colors.textMuted }}
        >
          Solo te llevará 1 minuto.
        </p>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: colors.text }}
          >
            Nombre
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl px-4 py-3 outline-none"
            style={{
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.input,
              color: colors.text,
            }}
          />
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: colors.text }}
          >
            Email o WhatsApp
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Tu mejor contacto"
            className="w-full rounded-xl px-4 py-3 outline-none"
            style={{
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.input,
              color: colors.text,
            }}
          />
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: colors.text }}
          >
            Objetivo principal
          </label>
          <select
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            className="w-full rounded-xl px-4 py-3 outline-none"
            style={{
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.input,
              color: colors.text,
            }}
          >
            <option>Perder grasa</option>
            <option>Ganar músculo</option>
            <option>Perder grasa y ganar músculo</option>
            <option>Mejorar salud y forma física</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: colors.text }}
          >
            Modalidad
          </label>
          <select
            value={modality}
            onChange={(e) => setModality(e.target.value)}
            className="w-full rounded-xl px-4 py-3 outline-none"
            style={{
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.input,
              color: colors.text,
            }}
          >
            <option>Presencial</option>
            <option>Online</option>
            <option>No lo tengo claro todavía</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: colors.text }}
          >
            Cuéntame brevemente tu caso
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Por ejemplo: quiero perder grasa, me cuesta ser constante y tengo poco tiempo"
            rows={4}
            className="w-full rounded-xl px-4 py-3 outline-none resize-none"
            style={{
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.input,
              color: colors.text,
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-base border-none cursor-pointer"
          style={{
            backgroundColor: colors.accent,
            color: colors.bg,
            boxShadow: "0 0 20px rgba(204,255,0,0.15)",
          }}
        >
          Reservar mi valoración gratuita
        </button>

        <p
          className="text-xs leading-relaxed text-center"
          style={{ color: colors.textMuted }}
        >
          Te responderé personalmente para orientarte según tu objetivo y tu situación.
        </p>
      </div>
    </form>
  );
}