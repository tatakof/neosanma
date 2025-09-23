export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 font-sans">
      <h1 className="text-3xl tracking-tight mb-4 lowercase">about</h1>
      <p className="text-balance leading-7 text-muted-foreground lowercase">
        i’m neosanma — i write about ai, systems, and latin america’s leap into the next technological wave. i care about practical insights, clean engineering, and how new tools can shift regional opportunity.
      </p>
      <p className="mt-6 leading-7 text-muted-foreground lowercase">
        this site is intentionally minimal. no noise. just thoughts, notes, and experiments.
      </p>
    </main>
  );
}