import { Router } from 'express';
import Groq from 'groq-sdk';

const router = Router();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Roadmap AI, a helpful assistant specializing in programming education, learning roadmaps, and tech career guidance.
Help users with:
- Personalized learning roadmaps (frontend, backend, DevOps, data science, etc.)
- Concept explanations in simple terms
- Resource recommendations (courses, books, projects)
- Career advice (interviews, portfolio, job search)
Keep responses concise, clear, and practical. Use bullet points when listing steps or resources.`;

router.post('/', async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Sanitize: only keep role and content fields
  const history = messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .map(({ role, content }) => ({ role, content: String(content) }));

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
      max_tokens: 1024,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? 'No response generated.';
    res.json({ reply });
  } catch (err) {
    console.error('Groq API error:', err?.message, err?.status, err?.error);
    res.status(502).json({ error: err?.message || 'AI service unavailable. Please try again.' });
  }
});

export default router;
