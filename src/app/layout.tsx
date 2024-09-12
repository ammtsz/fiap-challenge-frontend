import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components";
import { UserProvider } from "@/contexts/user";

const inter = localFont({
  src: "../fonts/Inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Escola CMS",
  description: "Blog para publicação de artigos e aulas dos professores com o propósito de serem consumidos pelo corpo discente e docente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} bg-[var(--background)]`}
      >
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
