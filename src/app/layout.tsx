import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
      <body className="font-sans antialiased">
        {children}
        <footer style={{ borderTop: "1px solid #e5e7eb", padding: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src="/logo-iamagica.png" alt="IAMagica" style={{ height: "28px", width: "auto" }} />
              <span style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>© 2026 IAMagica</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#1B4332", letterSpacing: "0.5px" }}>DIGITALIZA TU NEGOCIO</span>
              <a href="mailto:info@iamagica.es" style={{ textDecoration: "none", color: "#6b7280", display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                <span style={{ fontSize: "20px" }}>✉</span>
                <span style={{ fontSize: "14px" }}>info@iamagica.es</span>
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}