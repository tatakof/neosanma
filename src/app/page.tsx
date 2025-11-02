"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 font-sans">
      {/* centered, compact svg wordmark */}
      <div className="mx-auto mb-6 w-100 text-foreground">
        <svg
          viewBox="0 0 330 50"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="neosanma"
          className="h-auto w-full"
          fill="currentColor"
        >
          {/* n */}
          <rect x="0" y="10" width="10" height="30"></rect>
          <rect x="0" y="10" width="30" height="10"></rect>
          <rect x="20" y="20" width="10" height="20"></rect>
          {/* e */}
          <rect x="40" y="10" width="10" height="30"></rect>
          <rect x="40" y="10" width="30" height="10"></rect>
          <rect x="40" y="23" width="25" height="10"></rect>
          <rect x="40" y="30" width="30" height="10"></rect>
          {/* o */}
          <rect x="80" y="10" width="30" height="10"></rect>
          <rect x="80" y="10" width="10" height="30"></rect>
          <rect x="100" y="10" width="10" height="30"></rect>
          <rect x="80" y="30" width="30" height="10"></rect>
          {/* s */}
          <rect x="120" y="10" width="30" height="10"></rect>
          <rect x="120" y="10" width="10" height="15"></rect>
          <rect x="120" y="20" width="30" height="10"></rect>
          <rect x="140" y="25" width="10" height="15"></rect>
          <rect x="120" y="30" width="30" height="10"></rect>
          {/* a */}
          <rect x="160" y="10" width="30" height="10"></rect>
          <rect x="160" y="10" width="10" height="30"></rect>
          <rect x="180" y="10" width="10" height="30"></rect>
          <rect x="160" y="23" width="30" height="10"></rect>
          {/* n */}
          <rect x="200" y="10" width="10" height="30"></rect>
          <rect x="200" y="10" width="30" height="10"></rect>
          <rect x="220" y="20" width="10" height="20"></rect>
          {/* m */}
          <rect x="240" y="10" width="10" height="30"></rect>
          <rect x="240" y="10" width="20" height="10"></rect>
          <rect x="260" y="20" width="10" height="20"></rect>
          <rect x="270" y="10" width="20" height="10"></rect>
          <rect x="280" y="20" width="10" height="20"></rect>
          {/* a */}
          <rect x="300" y="10" width="30" height="10"></rect>
          <rect x="300" y="10" width="10" height="30"></rect>
          <rect x="320" y="10" width="10" height="30"></rect>
          <rect x="300" y="23" width="30" height="10"></rect>
        </svg>
      </div>
      <p className="text-muted-foreground leading-7 lowercase">
        writing on ai, systems, and latin america's jump into the new technological revolution.
      </p>
      <div className="mt-10 flex items-center gap-6 text-sm lowercase">
        <Link href="/blog" className="underline underline-offset-4 hover:no-underline">read the writing</Link>
        <Link href="/about" className="text-muted-foreground hover:underline underline-offset-4">about</Link>
      </div>
    </main>
  );
}