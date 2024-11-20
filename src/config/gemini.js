import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("API key not found! Make sure REACT_APP_GEMINI_API_KEY is set in your environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(input) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: "hi\n" }],
      },
      {
        role: "model",
        parts: [{ text: "Hi there! How can I help you today?\n" }],
      },
    ],
  });

  const result = await chatSession.sendMessage(input);
  console.log(result.response.text());
  return result.response.text();
}

export default run;
