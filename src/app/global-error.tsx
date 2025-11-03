"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-md text-center">
            <h2 className="mb-4 text-2xl lowercase">something went wrong</h2>
            <p className="mb-6 text-sm text-muted-foreground lowercase">
              {error.message || "an unexpected error occurred"}
            </p>
            <button
              onClick={reset}
              className="rounded bg-foreground px-4 py-2 text-sm lowercase text-background hover:opacity-90"
            >
              try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
