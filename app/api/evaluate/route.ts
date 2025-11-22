import { NextResponse } from "next/server";
import { generateText } from "@/lib/ai/gemini";

type Evaluation = {
  score: number;
  strengths: string[];
  improvements: string[];
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const transcript: string =
      body?.transcript ?? "Demo conversation between advisor and customer.";

    const prompt = `
You are an AI Sales Coach evaluating an insurance advisor's call with a prospect.

Conversation transcript:
"""
${transcript}
"""

Your task:
1. Evaluate the overall effectiveness of the advisor's conversation on a scale of 0 to 100.
2. Identify 2–3 specific strengths.
3. Identify 2–3 specific, actionable improvements.

Important:
- Respond in **valid JSON only**, no explanation, no markdown.
- Use this JSON structure exactly:

{
  "score": 78,
  "strengths": [
    "First strength sentence.",
    "Second strength sentence."
  ],
  "improvements": [
    "First improvement sentence.",
    "Second improvement sentence."
  ]
}
    `.trim();

    const raw = await generateText(prompt);

    // Try to parse the JSON that Gemini returns
    let parsed: Evaluation;

    try {
      // Some models may wrap JSON in backticks or extra text—clean a bit:
      const cleaned = raw
        .trim()
        .replace(/```json/g, "")
        .replace(/```/g, "");
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error("Failed to parse Gemini JSON:", raw);
      throw new Error("Could not parse evaluation JSON from model.");
    }

    // Basic validation
    if (
      typeof parsed.score !== "number" ||
      !Array.isArray(parsed.strengths) ||
      !Array.isArray(parsed.improvements)
    ) {
      throw new Error("Evaluation JSON missing required fields.");
    }

    return NextResponse.json(parsed);
  } catch (err: any) {
    console.error("Evaluation API error:", err);
    return NextResponse.json(
      {
        error:
          err?.message ??
          "Something went wrong while generating evaluation with Gemini.",
      },
      { status: 500 }
    );
  }
}
