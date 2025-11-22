import { NextResponse } from "next/server";
import { generateText } from "@/lib/ai/gemini";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const userPrompt: string =
      body?.prompt ?? "Say hello as an AI Sales Coach demo.";

    const prompt = `
You are an AI Sales Coach for insurance advisors.
The user is just testing connectivity. Respond in 2 short sentences, friendly, professional.

User prompt: ${userPrompt}
    `.trim();

    const text = await generateText(prompt);

    return NextResponse.json({ ok: true, reply: text });
  } catch (err: any) {
    console.error("Gemini test error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
