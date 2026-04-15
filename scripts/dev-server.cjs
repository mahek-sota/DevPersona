// Local dev server for the /api routes.
// Mirrors the Vercel serverless function environment closely enough for testing.
// Run with: node scripts/dev-server.cjs
// Then run: npm run dev:frontend  (vite proxies /api → this server)

const express = require('express');
const cors = require('cors');
const resultHandler = require('../api/result');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/result', (req, res) => resultHandler(req, res));

app.listen(PORT, () => {
  console.log(`\n  API dev server running at http://localhost:${PORT}`);
  console.log(`  POST http://localhost:${PORT}/api/result\n`);
});
