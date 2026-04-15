# 🧬 DevPersona — Developer Personality Quiz

> *Find your engineering alter ego. 8 questions. 8 archetypes. One honest result.*

A fun, polished personality quiz for developers — built with React, a Node.js serverless backend, and deployed on Vercel. Answer a handful of playful system-design questions and discover which engineering archetype you actually are.

**[Live Demo →](https://devpersona.vercel.app)**  &nbsp;|&nbsp; **[Portfolio →](https://impact-doc.vercel.app)**

---

## The Archetypes

| Archetype | Description |
|---|---|
| 🏰 Monolith Defender | Ships fast, values clarity, sleeps soundly |
| 🧩 Modular Thinker | Loves structure without over-engineering it |
| 🕸️ Microservices Architect | Thinks in services, boundaries, and independent deploys |
| 🚀 Startup Pragmatist | Ships first, refactors never (for now) |
| 🔍 Debugging Detective | Follows the logs until the truth reveals itself |
| 📊 Data-Driven Engineer | Measures everything before deciding anything |
| ⚙️ Overengineering Enthusiast | Adds Kafka to a side project and finds it reasonable |
| 🧘 Zen Coder | Deletes 200 lines of code and improves the system |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Modular CSS (no UI library) |
| Backend | Node.js serverless function (Vercel) |
| Deployment | Vercel |

---

## Project Structure

```
DevPersona/
├── api/
│   ├── quizEngine.js        # Scoring logic — pure, framework-agnostic
│   └── result.js            # POST /api/result — Vercel serverless handler
│
├── scripts/
│   └── dev-server.cjs       # Local Express server for API development
│
├── src/
│   ├── components/
│   │   ├── QuizLanding.jsx  # Hero / start screen
│   │   ├── QuizHeader.jsx   # Minimal logo bar shown during quiz
│   │   ├── QuestionCard.jsx # Animated question + option cards
│   │   ├── ProgressBar.jsx  # Gradient progress indicator
│   │   ├── ResultCard.jsx   # Result reveal with traits + share
│   │   └── RestartButton.jsx
│   │
│   ├── data/
│   │   └── questions.js     # 8 questions with weighted scoring maps
│   │
│   └── utils/
│       └── scoreCalculator.js  # Frontend fallback (mirrors quizEngine)
│
├── index.html
├── vite.config.js
└── vercel.json
```

---

## How the Scoring Works

Each answer option carries a **weighted score map** — not a simple `1/2/3/4` value. Selecting an option adds its points to the relevant personality categories:

```js
// Example option
{
  id: '4c',
  text: "Bold. Let's also add a schema registry and a dead-letter queue.",
  scores: { overengineering: 3, microservices: 1 }
}
```

After all 8 questions, the category with the highest total wins. Ties are resolved by a deterministic tie-breaker order defined once in `quizEngine.js`.

The scoring engine is a plain function with no framework dependencies — making it straightforward to port to a Python/FastAPI backend with the same logic.

---

## Running Locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install
```

### Option A — Two terminals (no Vercel CLI needed)

```bash
# Terminal 1: API server on port 3001
npm run dev:api

# Terminal 2: Frontend on port 3000 (proxies /api → 3001)
npm run dev:frontend
```

Open `http://localhost:3000`

### Option B — Single command (requires Vercel CLI)

```bash
npm install -g vercel
npm run dev
```

---

## Deploying to Vercel

```bash
# First time
vercel

# Subsequent deploys
vercel --prod
```

Vercel automatically detects the `/api` directory as serverless functions and builds the Vite frontend. No extra configuration needed.

---

## Architecture Notes

**Why a backend for a quiz?**  
The scoring logic lives server-side to keep the weights and personality definitions out of the client bundle — and to make the separation of concerns explicit. The same `calculateResult` function could sit behind a FastAPI route tomorrow with minimal changes.

**Why not a database?**  
There's nothing to persist. The quiz is stateless by design — answers live in React state, the API computes a result and discards everything. Simple is correct here.

**Why Vercel?**  
Zero-config deploys for both static frontend and serverless functions from the same repo. The right tool for a project this size.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev:frontend` | Vite dev server on port 3000 |
| `npm run dev:api` | Express API server on port 3001 |
| `npm run dev` | Both together via `vercel dev` |
| `npm run build` | Production build to `/dist` |
| `npm run preview` | Preview the production build locally |

---

*Built for fun, but maybe a little too real. — [Mahek Sota](https://www.linkedin.com/in/mahek-sota/) · [Portfolio](https://impact-doc.vercel.app/)*
