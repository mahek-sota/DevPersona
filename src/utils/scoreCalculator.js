// Frontend fallback scoring — mirrors api/quizEngine.js logic exactly.
// Used only when the /api/result endpoint is unavailable (e.g. pure static deploy).
// Keep this in sync with the backend engine.

const PERSONALITIES = {
  monolith: {
    id: 'monolith', title: 'Monolith Defender', emoji: '🏰', color: '#f59e0b',
    description: 'You value clarity, speed, and pragmatism above all. You ship while others are still debating service boundaries — and your systems actually work because anyone on the team can reason about them end-to-end.',
    oneliner: "Your deploy script is one command and you sleep soundly at night.",
    traits: ['Pragmatic', 'Fast Shipper', 'Clarity-First', 'Battle-Tested']
  },
  modular: {
    id: 'modular', title: 'Modular Thinker', emoji: '🧩', color: '#06b6d4',
    description: 'You love clean structure and well-defined boundaries, but you\'re not rushing into distributed complexity. Your code is organized enough to split later — if it ever truly needs to be.',
    oneliner: "Your PRs are a pleasure to review, your modules are decoupled, and your teammates understand what you built.",
    traits: ['Structured', 'Boundary-Conscious', 'Future-Ready', 'Team-Friendly']
  },
  microservices: {
    id: 'microservices', title: 'Microservices Architect', emoji: '🕸️', color: '#3b82f6',
    description: 'You think in services, scalability, and independent deployments. You have strong opinions about ownership boundaries, API contracts, and whether gRPC actually beats REST for internal communication.',
    oneliner: "You've never met a system you couldn't split into exactly one more service.",
    traits: ['Systems Thinker', 'Scale-Focused', 'Opinionated', 'Independent Deployer']
  },
  startup: {
    id: 'startup', title: 'Startup Pragmatist', emoji: '🚀', color: '#ef4444',
    description: 'Ship it. Iterate. Worry about elegance when you have real users. You move fast, break things responsibly, and you know the difference between real tech debt and premature optimization.',
    oneliner: "Your MVP had three bugs and shipped on time. That's called a win.",
    traits: ['Fast Mover', 'User-Focused', 'Pragmatic', 'Iteration Machine']
  },
  detective: {
    id: 'detective', title: 'Debugging Detective', emoji: '🔍', color: '#10b981',
    description: 'You trust logs, traces, and methodical investigation over gut feelings. When something breaks, you don\'t guess — you gather evidence, form a hypothesis, and follow the trail.',
    oneliner: "You've found a bug nobody believed existed, and you have the exact log line to prove it.",
    traits: ['Analytical', 'Patient', 'Log-Lover', 'Root Cause Finder']
  },
  data: {
    id: 'data', title: 'Data-Driven Engineer', emoji: '📊', color: '#8b5cf6',
    description: 'Metrics before opinions. You want evidence, dashboards, and real usage patterns before making any architectural call. You measure twice, ship once, and measure again after.',
    oneliner: "Your Grafana dashboard is genuinely beautiful, and you have p99 latency memorized.",
    traits: ['Evidence-Based', 'Metric-Obsessed', 'Thoughtful', 'Dashboard Curator']
  },
  overengineering: {
    id: 'overengineering', title: 'Overengineering Enthusiast', emoji: '⚙️', color: '#f97316',
    description: 'You find a compelling reason to add event buses, saga patterns, and distributed caches to almost every system. Your architecture diagrams have many arrows. Beautiful, terrifying, deeply nested arrows.',
    oneliner: "It's not overengineered. It's just... future-proof. For a future that may never arrive.",
    traits: ['Ambitious', 'Pattern-Happy', 'Forward-Thinking', 'Event-Sourcing Evangelist']
  },
  zen: {
    id: 'zen', title: 'Zen Coder', emoji: '🧘', color: '#6366f1',
    description: 'You write code that is calm, minimal, and readable. You believe simplicity is a feature, not a compromise. Your functions are small, your names are clear, and your diffs are a pleasure to review.',
    oneliner: "You deleted 200 lines of code and made the system better. Enlightenment achieved.",
    traits: ['Minimalist', 'Readable-Code Advocate', 'Calm Under Pressure', 'Less-is-More']
  }
};

const TIE_BREAK_ORDER = [
  'zen', 'modular', 'data', 'detective',
  'startup', 'monolith', 'microservices', 'overengineering'
];

export function calculateResultLocally(answers) {
  const scores = Object.keys(PERSONALITIES).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  for (const answer of answers) {
    if (answer?.scores) {
      for (const [cat, pts] of Object.entries(answer.scores)) {
        if (cat in scores) scores[cat] += Number(pts) || 0;
      }
    }
  }

  const topScore = Math.max(...Object.values(scores));
  const topCategories = Object.keys(scores).filter(k => scores[k] === topScore);
  const isTie = topCategories.length > 1;
  const winner = isTie
    ? TIE_BREAK_ORDER.find(c => topCategories.includes(c)) ?? topCategories[0]
    : topCategories[0];

  return { personality: PERSONALITIES[winner], scores, isTie };
}
