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
    "Entrenamiento personalizado + nutrición + seguimiento. Resultados entrenando solo 2 días/semana. Presencial en Tavernes de la Valldigna u Online con seguimiento.",
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
      "Resultados entrenando solo 2 días/semana. Entrenamiento + nutrición + seguimiento personalizado.",
    type: "website",
    locale: "es_ES",
  },
  other: {
    "google-site-verification": "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4",
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