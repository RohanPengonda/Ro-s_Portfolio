import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../data/portfolioContext';

const API_KEY =
  process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const MODEL_CANDIDATES = [
  process.env.GEMINI_MODEL,
  'gemini-3.8-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash-lite',
].filter(Boolean);

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const isGeminiConfigured = () => Boolean(ai);

export const openGeminiStream = async (contents) => {
  if (!ai) {
    throw new Error('Gemini API key is not configured.');
  }

  let lastError = null;

  for (const model of MODEL_CANDIDATES) {
    try {
      const stream = await ai.models.generateContentStream({
        model,
        contents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      });
      return { stream, model };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error('No Gemini model is available.');
};
