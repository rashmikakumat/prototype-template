import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // In future, we'll read the real transcript from the request body.
  // For now, we just simulate an evaluation response.
  const body = await req.json().catch(() => ({} as any));
  const transcript = body?.transcript ?? "(demo transcript)";

  // You can later use `transcript` in a Gemini call.
  console.log("Received transcript for evaluation:", transcript);

  const mockEvaluation = {
    score: 78,
    strengths: [
      "You opened the conversation with a clear introduction and set context early.",
      "You asked at least one open-ended question to understand the customer's needs.",
      "Your overall tone was polite and reassuring, especially while explaining risk cover.",
    ],
    improvements: [
      "Clarify the difference between premium and coverage with one simple example.",
      "Handle price objections by linking the premium back to long-term family security.",
      "Summarize key points and explicitly ask for the next step at the end.",
    ],
  };

  return NextResponse.json(mockEvaluation);
}
