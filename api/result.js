// Vercel serverless function — POST /api/result
// Receives submitted quiz answers, returns the computed personality result.
// The actual scoring logic lives in quizEngine.js so it can be ported
// to FastAPI / any other backend with minimal changes.

const { calculateResult } = require('./quizEngine');

module.exports = function handler(req, res) {
  // CORS headers — useful during local development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { answers } = req.body ?? {};

  if (!Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({
      error: 'Invalid payload. Expected { answers: [...] } with at least one entry.'
    });
  }

  try {
    const result = calculateResult(answers);
    return res.status(200).json(result);
  } catch (err) {
    console.error('[quiz-engine] Unexpected error:', err);
    return res.status(500).json({ error: 'Failed to calculate result. Please try again.' });
  }
};
