import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { message } = await request.json();
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are Toppersz AI, a friendly educational assistant for Next Toppers learning platform. Respond in Hinglish (Hindi-English mix) style. Keep responses helpful, motivational, and student-friendly. IMPORTANT: Keep your response between 50-75 words only. Be concise and direct. User message: ${message}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return Response.json({ response: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return Response.json({ 
      response: "Sorry yaar, thoda technical issue hai. Try karo phir se! 😅" 
    }, { status: 500 });
  }
}