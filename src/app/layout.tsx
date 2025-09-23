import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "neosanma — writing on ai and latin america",
  description: "minimal notes on ai, systems, and latin america's technological leap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <header className="mx-auto max-w-2xl px-6 py-6">
          <nav className="flex items-center justify-between text-sm lowercase">
            <a href="/" className="hover:underline">neosanma</a>
            <div className="space-x-4">
              <a href="/blog" className="hover:underline">writing</a>
              <a href="/about" className="hover:underline">about</a>
            </div>
          </nav>
        </header>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}