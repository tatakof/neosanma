import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "neosanma — writing on ai and latin america",
  description: "minimal notes on ai, systems, and latin america's technological leap",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="mx-auto max-w-3xl px-6 py-8">
          <nav className="flex items-center justify-between text-base lowercase">
            <a href="/" className="hover:underline">main</a>
            <a href="/blog" className="hover:underline">writing</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}