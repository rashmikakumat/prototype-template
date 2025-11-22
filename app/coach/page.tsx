import Link from "next/link";

export default function CoachPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 hover:bg-slate-800/60 transition"
          >
            <span className="mr-1">←</span> Back to prototypes
          </Link>
        </div>
        <p className="text-[11px] text-sky-400 uppercase tracking-[0.2em]">
          AI Sales Coach
        </p>
      </header>

      {/* Main content */}
      <section className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="max-w-4xl w-full grid gap-6 md:grid-cols-[1.4fr,1fr]">
          {/* Left: Conversation setup / live area */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6 shadow-xl shadow-sky-900/25 flex flex-col gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-1">
                Practice a live role-play
              </h1>
              <p className="text-xs md:text-sm text-slate-300">
                Choose a prospect persona and scenario, then start a{" "}
                <span className="text-sky-300">5-minute</span> real-time audio
                conversation. The AI will act as your customer.
              </p>
            </div>

            {/* Persona + scenario placeholders */}
            <div className="grid gap-3 md:grid-cols-2 text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                  Persona
                </p>
                <p className="text-sm text-slate-100">
                  Price-sensitive salaried professional
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Example: 32-year-old IT employee worried about premiums.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                  Scenario
                </p>
                <p className="text-sm text-slate-100">
                  First discovery call – term insurance
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Goal: Build trust, understand needs, and set up next step.
                </p>
              </div>
            </div>

            {/* Timer + mic placeholder */}
            <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Session length
                </p>
                <p className="text-base font-medium text-slate-100">5:00 min</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-sky-500/70 bg-sky-500/10 flex items-center justify-center text-lg">
                  🎙️
                </div>
                <p className="text-[11px] text-slate-400">
                  Mic + Gemini real-time audio will plug in here.
                </p>
              </div>
            </div>

            {/* Start button (placeholder for now) */}
            <div className="pt-2">
              <button
                className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-medium text-slate-950 hover:bg-sky-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
                disabled
              >
                Start practice (coming next)
              </button>
            </div>
          </div>

          {/* Right: Evaluation + guidance placeholder */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 flex flex-col gap-3 text-xs text-slate-300">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
              Post-call evaluation (preview)
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 space-y-2">
              <p className="text-[11px] text-slate-400">
                After each role-play, the coach will generate:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Overall score for the conversation.</li>
                <li>Top 2–3 strengths in your pitch.</li>
                <li>Top 2–3 improvements with concrete tips.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 space-y-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Follow-up practice
              </p>
              <p>
                You’ll also get a short follow-up drill (2–3 min) focused only
                on your improvement areas, so you can immediately apply the
                feedback.
              </p>
            </div>

            <p className="text-[11px] text-slate-500 mt-1">
              This screen is the skeleton. Next, we’ll plug in real-time audio
              and Gemini evaluation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
