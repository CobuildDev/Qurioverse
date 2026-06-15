import { google } from "@ai-sdk/google";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const coreMessages = messages.map((msg: any) => ({
    role: msg.role,
    content: msg.parts ? msg.parts.map((p: any) => p.text).join("") : msg.content || ""
  }));


  const systemPrompt = `You are Quiro, a super fun, energetic, and highly engaging tutor for quantum physics. 
You explain complex subatomic concepts using toys, cats, pizza analogies, and other fun, everyday examples. 
Keep your answers relatively short, punchy, and engaging for young learners (ages 15-17). 
Always be encouraging! If they ask something outside of physics or science, gently pivot back to quantum physics in a fun way.`;

  const result = streamText({
    model: google("gemini-3.5-flash"),
    system: systemPrompt,
    messages: coreMessages,
  });

  return result.toUIMessageStreamResponse();
}
