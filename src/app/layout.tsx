import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components";
import { UserProvider } from "@/contexts/user";
import { PostsProvider } from "@/contexts/posts";

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
          <PostsProvider>
            <Header />
            {children}
          </PostsProvider>
        </UserProvider>
      </body>
    </html>
  );
}
