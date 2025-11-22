import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn(
    "⚠️ GEMINI_API_KEY is not set. Gemini calls will fail until you configure it."
  );
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Simple helper for text-only prompts
export async function generateText(prompt: string): Promise<string> {
  if (!genAI) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}
