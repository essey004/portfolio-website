import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fraunces, Inter } from "next/font/google";


const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-heading" });


const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                if (isDark) document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg text-text">{children}</body>
    </html>
  );
}