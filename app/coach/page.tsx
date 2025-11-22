"use client";

import { useState } from "react";
import Link from "next/link";

type Evaluation = {
  score: number;
  strengths: string[];
  improvements: string[];
};

export default function CoachPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSimulateSession() {
    try {
      setIsLoading(true);
      setError(null);

      // In future: send real transcript.
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transcript:
            "Demo conversation transcript between advisor and prospect.",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to get evaluation");
      }

      const data = (await res.json()) as Evaluation;
      setEvaluation(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating feedback.");
    } finally {
      setIsLoading(false);
    }
  }

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

            {/* Start / simulate button */}
            <div className="pt-2">
              <button
                onClick={handleSimulateSession}
                className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-medium text-slate-950 hover:bg-sky-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Generating feedback..." : "Simulate session & get feedback"}
              </button>
              <p className="mt-2 text-[11px] text-slate-500">
                For now this uses a demo evaluation. Next, we&apos;ll plug this
                into the actual call transcript and Gemini.
              </p>
            </div>

            {error && (
              <p className="mt-2 text-[11px] text-red-400">{error}</p>
            )}
          </div>

          {/* Right: Evaluation + guidance */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 flex flex-col gap-3 text-xs text-slate-300">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
              Post-call evaluation
            </p>

            {evaluation ? (
              <>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <p className="text-[11px] text-slate-400">Overall score</p>
                    <p className="text-2xl font-semibold text-sky-300">
                      {evaluation.score}
                      <span className="text-xs text-slate-400 ml-1">/ 100</span>
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    This is a simulated score. Later it will be based on real
                    conversation signals.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-900/60 bg-emerald-950/40 p-3 space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                    Strengths
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {evaluation.strengths.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-900/60 bg-amber-950/30 p-3 space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-amber-300">
                    Improvements
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {evaluation.improvements.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 space-y-2">
                  <p className="text-[11px] text-slate-400">
                    Click{" "}
                    <span className="text-sky-300">
                      “Simulate session &amp; get feedback”
                    </span>{" "}
                    to see how the coach will summarise a role-play.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    In the real version, this panel will use your actual
                    conversation transcript to generate personalised insights.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
