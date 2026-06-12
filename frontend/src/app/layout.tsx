import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Gupta | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building modern, scalable web applications with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "full stack developer",
    "web developer",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Aditya Gupta" }],
  openGraph: {
    title: "Aditya Gupta | Full Stack Developer",
    description: "Full Stack Developer building modern web applications",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Gupta",
  url: "https://aditya.dev",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in building modern, scalable web applications.",
  sameAs: ["https://github.com", "https://linkedin.com", "https://x.com/AdityaG8476653"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
