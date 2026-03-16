import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juanma Prieto | Entrenador Personal en Tavernes de la Valldigna",
  description:
    "Entrenamiento personalizado + nutrición + seguimiento. Gana músculo y pierde grasa entrenando solo 2 días a la semana. Presencial en Tavernes u online.",
  keywords: [
    "entrenador personal Tavernes de la Valldigna",
    "entrenador personal online",
    "nutricionista deportivo Tavernes",
    "entrenador personal Gandía",
    "entrenador personal la Safor",
    "ganar músculo perder grasa",
    "entrenamiento personalizado",
  ],
  openGraph: {
    title: "Juanma Prieto | Entrenador Personal en Tavernes de la Valldigna",
    description:
      "Gana músculo y pierde grasa entrenando solo 2 días a la semana. Entrenamiento + nutrición + seguimiento personalizado.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}