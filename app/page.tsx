import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            KPOINT AI Lab
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Prototype Hub
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Quick, customer-ready conversational AI demos for sales, learning, and video.
          </p>
        </div>

        {/* Prototype cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* AI Sales Coach card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-sky-900/30">
            <h2 className="text-lg font-medium mb-1">AI Sales Coach</h2>
            <p className="text-xs text-slate-300 mb-4">
              Practice real-time role-plays with an AI prospect and get instant coaching on your pitch.
            </p>
            <Link
              href="/coach"
              className="inline-flex items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-100 hover:bg-sky-500/20 hover:border-sky-400 transition"
            >
              Open prototype
              <span className="ml-1 text-[10px]">↗</span>
            </Link>
          </div>

          {/* Info / description card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-xs text-slate-300 space-y-2">
            <p className="font-medium text-slate-100">What is this?</p>
            <p>
              This workspace is a shared home for AI prototypes. Each tile represents a live demo
              that can be handed over to customers to try out.
            </p>
            <p className="text-slate-400">
              Start with the AI Sales Coach, then add more tiles as new prototypes go live.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[11px] text-slate-500">
          Built with Next.js · Powered by Gemini · Deployed on Vercel
        </p>
      </div>
    </main>
  );
}
