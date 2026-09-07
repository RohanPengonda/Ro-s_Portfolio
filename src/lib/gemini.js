import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../data/portfolioContext';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const DEFAULT_MODELS = [
  process.env.NEXT_PUBLIC_GEMINI_MODEL || 'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-3.5-flash-lite',
];
const FALLBACK_REPLY =
  "Sorry, I'm having trouble reaching the AI model right now. Please try again in a moment, or reach out to Rohan directly at rpengonda1@gmail.com.";

let ai = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const isAIConfigured = () => Boolean(API_KEY);

const history = [];

function buildContents() {
  return history.map(msg => ({
    role: msg.role === 'model' ? 'model' : 'user',
    parts: [{ text: msg.parts[0].text }],
  }));
}

async function streamFromModel(modelName, contents, onChunk) {
  const stream = await ai.models.generateContentStream({
    model: modelName,
    contents,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  });
  let full = '';
  for await (const chunk of stream) {
    const text = chunk.text ?? '';
    full += text;
    if (onChunk) onChunk(text);
  }
  return full;
}

async function completeFromModel(modelName, contents) {
  const response = await ai.models.generateContent({
    model: modelName,
    contents,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  });
  return response.text ?? '';
}

export async function askGemini(userMessage, onChunk) {
  if (!ai) {
    throw new Error(
      'Gemini API key is not configured. Add NEXT_PUBLIC_GEMINI_API_KEY to your .env file.'
    );
  }

  history.push({ role: 'user', parts: [{ text: userMessage }] });

  const contents = buildContents();
  let response = '';
  let lastError = null;
  let usedModel = null;

  for (const modelName of DEFAULT_MODELS) {
    let error = null;

    try {
      response = await streamFromModel(modelName, contents, onChunk);
      usedModel = modelName;
      break;
    } catch (e) {
      error = e;
    }

    try {
      response = await completeFromModel(modelName, contents);
      usedModel = modelName;
      break;
    } catch (e) {
      error = e;
    }

    lastError = error;
  }

  if (response.trim() === '') {
    history.pop();
    return {
      text: FALLBACK_REPLY,
      ok: false,
      detail: lastError?.message || '',
    };
  }

  history.push({ role: 'model', parts: [{ text: response }] });

  if (history.length > 30) {
    history.splice(0, history.length - 30);
  }

  return { text: response, ok: true, detail: '', model: usedModel };
}
