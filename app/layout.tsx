import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "m&h Baby - Moda infantil española",
  description: "Prendas hechas con mimo y algodón. Moda infantil de producción nacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
