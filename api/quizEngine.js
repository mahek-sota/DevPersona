'use strict';

// ---------------------------------------------------------------------------
// Personality definitions
// Each entry maps a category key to display data shown on the result screen.
// Color is the per-type accent used in the UI result card.
// ---------------------------------------------------------------------------
const PERSONALITIES = {
  monolith: {
    id: 'monolith',
    title: 'Monolith Defender',
    emoji: '\uD83C\uDFF0',
    color: '#f59e0b',
    description:
      "You value clarity, speed, and pragmatism above all. You ship while others are still debating service boundaries \u2014 and your systems actually work because anyone on the team can reason about them end-to-end.",
    oneliner: "Your deploy script is one command and you sleep soundly at night.",
    traits: ['Pragmatic', 'Fast Shipper', 'Clarity-First', 'Battle-Tested']
  },
  modular: {
    id: 'modular',
    title: 'Modular Thinker',
    emoji: '\uD83E\uDDE9',
    color: '#06b6d4',
    description:
      "You love clean structure and well-defined boundaries, but you\u2019re not rushing into distributed complexity. Your code is organized enough to split later \u2014 if it ever truly needs to be.",
    oneliner: "Your PRs are a pleasure to review, your modules are decoupled, and your teammates understand what you built.",
    traits: ['Structured', 'Boundary-Conscious', 'Future-Ready', 'Team-Friendly']
  },
  microservices: {
    id: 'microservices',
    title: 'Microservices Architect',
    emoji: '\uD83D\uDD78\uFE0F',
    color: '#3b82f6',
    description:
      "You think in services, scalability, and independent deployments. You have strong opinions about ownership boundaries, API contracts, and whether gRPC actually beats REST for internal communication.",
    oneliner: "You\u2019ve never met a system you couldn\u2019t split into exactly one more service.",
    traits: ['Systems Thinker', 'Scale-Focused', 'Opinionated', 'Independent Deployer']
  },
  startup: {
    id: 'startup',
    title: 'Startup Pragmatist',
    emoji: '\uD83D\uDE80',
    color: '#ef4444',
    description:
      "Ship it. Iterate. Worry about elegance when you have real users. You move fast, break things responsibly, and you know the difference between real tech debt and premature optimization.",
    oneliner: "Your MVP had three bugs and shipped on time. That\u2019s called a win.",
    traits: ['Fast Mover', 'User-Focused', 'Pragmatic', 'Iteration Machine']
  },
  detective: {
    id: 'detective',
    title: 'Debugging Detective',
    emoji: '\uD83D\uDD0D',
    color: '#10b981',
    description:
      "You trust logs, traces, and methodical investigation over gut feelings. When something breaks, you don\u2019t guess \u2014 you gather evidence, form a hypothesis, and follow the trail until you find the culprit.",
    oneliner: "You\u2019ve found a bug nobody believed existed, and you have the exact log line to prove it.",
    traits: ['Analytical', 'Patient', 'Log-Lover', 'Root Cause Finder']
  },
  data: {
    id: 'data',
    title: 'Data-Driven Engineer',
    emoji: '\uD83D\uDCCA',
    color: '#8b5cf6',
    description:
      "Metrics before opinions. You want evidence, dashboards, and real usage patterns before making any architectural call. You measure twice, ship once, and measure again after.",
    oneliner: "Your Grafana dashboard is genuinely beautiful, and you have p99 latency memorized.",
    traits: ['Evidence-Based', 'Metric-Obsessed', 'Thoughtful', 'Dashboard Curator']
  },
  overengineering: {
    id: 'overengineering',
    title: 'Overengineering Enthusiast',
    emoji: '\u2699\uFE0F',
    color: '#f97316',
    description:
      "You find a compelling reason to add event buses, saga patterns, and distributed caches to almost every system. Your architecture diagrams have many arrows. Beautiful, terrifying, deeply nested arrows.",
    oneliner: "It\u2019s not overengineered. It\u2019s just\u2026 future-proof. For a future that may never arrive.",
    traits: ['Ambitious', 'Pattern-Happy', 'Forward-Thinking', 'Event-Sourcing Evangelist']
  },
  zen: {
    id: 'zen',
    title: 'Zen Coder',
    emoji: '\uD83E\uDDD8',
    color: '#6366f1',
    description:
      "You write code that is calm, minimal, and readable. You believe simplicity is a feature, not a compromise. Your functions are small, your names are clear, and your diffs are a pleasure to review.",
    oneliner: "You deleted 200 lines of code and made the system better. Enlightenment achieved.",
    traits: ['Minimalist', 'Readable-Code Advocate', 'Calm Under Pressure', 'Less-is-More']
  }
};

// ---------------------------------------------------------------------------
// Tie-breaker order: when two or more categories are tied, pick the one
// that appears earliest in this array. Order reflects "most likely intended
// result" when answers are mixed — calmer types win ties over extreme ones.
// ---------------------------------------------------------------------------
var TIE_BREAK_ORDER = [
  'zen', 'modular', 'data', 'detective',
  'startup', 'monolith', 'microservices', 'overengineering'
];

// ---------------------------------------------------------------------------
// Core scoring engine
// answers: array of option objects, each with a `scores` map like:
//   { monolith: 2, zen: 1 }
// Returns: { personality, scores, isTie }
// ---------------------------------------------------------------------------
function calculateResult(answers) {
  var scores = Object.keys(PERSONALITIES).reduce(function(acc, key) {
    acc[key] = 0;
    return acc;
  }, {});

  for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    if (answer && answer.scores && typeof answer.scores === 'object') {
      var entries = Object.entries(answer.scores);
      for (var j = 0; j < entries.length; j++) {
        var category = entries[j][0];
        var points   = entries[j][1];
        if (Object.prototype.hasOwnProperty.call(scores, category)) {
          scores[category] += Number(points) || 0;
        }
      }
    }
  }

  var topScore = Math.max.apply(null, Object.values(scores));
  var topCategories = Object.keys(scores).filter(function(k) {
    return scores[k] === topScore;
  });
  var isTie = topCategories.length > 1;

  var winner = isTie
    ? (TIE_BREAK_ORDER.find(function(cat) { return topCategories.includes(cat); }) || topCategories[0])
    : topCategories[0];

  return {
    personality: PERSONALITIES[winner],
    scores: scores,
    isTie: isTie
  };
}

module.exports = { calculateResult: calculateResult, PERSONALITIES: PERSONALITIES };
