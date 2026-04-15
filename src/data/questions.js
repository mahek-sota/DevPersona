// Quiz questions — each option carries a `scores` map that gets summed
// by the backend scoring engine. Points are weighted, not linear 1/2/3/4.
// This file is consumed by the frontend for rendering; the scoring
// happens server-side in api/quizEngine.js.

export const questions = [
  {
    id: 1,
    text: "You're building a product for an internal team of five. What sounds most appealing?",
    options: [
      {
        id: '1a',
        text: "One clean, well-structured codebase. Deploy the whole thing in an afternoon.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '1b',
        text: "A few clear services with defined APIs and clean ownership from the start.",
        scores: { modular: 2, microservices: 1 }
      },
      {
        id: '1c',
        text: "Each major feature as its own independently deployable service.",
        scores: { microservices: 2, overengineering: 1 }
      },
      {
        id: '1d',
        text: "Whatever ships fastest. Architecture can evolve once we have real users.",
        scores: { startup: 2, monolith: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "A new feature request just landed in your inbox. What's your first instinct?",
    options: [
      {
        id: '2a',
        text: "Find the right file, add the code cleanly, open a PR. Shipped.",
        scores: { monolith: 1, startup: 1, zen: 1 }
      },
      {
        id: '2b',
        text: "Design the module interface first. Code follows the contract.",
        scores: { modular: 2, zen: 1 }
      },
      {
        id: '2c',
        text: "Should this be a new service? Let me sketch the boundary first.",
        scores: { microservices: 2, overengineering: 1 }
      },
      {
        id: '2d',
        text: "What's the success metric? I need a measurable outcome to optimize against.",
        scores: { data: 2, detective: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "A bug lands in production. What does your ideal debug session look like?",
    options: [
      {
        id: '3a',
        text: "Structured log search, pattern recognition, root cause identified. Classic.",
        scores: { detective: 2, data: 1 }
      },
      {
        id: '3b',
        text: "Strategic console.logs sprinkled in at the right spots. Follow the trail.",
        scores: { startup: 1, monolith: 1, zen: 1 }
      },
      {
        id: '3c',
        text: "Correlating distributed traces across seven services using my tracing dashboard.",
        scores: { microservices: 1, overengineering: 2 }
      },
      {
        id: '3d',
        text: "Write a minimal reproduction case, read the stack trace slowly and carefully.",
        scores: { zen: 2, detective: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "Someone proposes adding Kafka to your side project's notification system. You say...",
    options: [
      {
        id: '4a',
        text: "Kafka?! A cron job and an email service will handle this for years.",
        scores: { monolith: 2, zen: 1, startup: 1 }
      },
      {
        id: '4b',
        text: "Only if we've genuinely outgrown something simpler and have data to prove it.",
        scores: { modular: 1, data: 2 }
      },
      {
        id: '4c',
        text: "Bold. Let's also add a schema registry and a dead-letter queue while we're at it.",
        scores: { overengineering: 3, microservices: 1 }
      },
      {
        id: '4d',
        text: "We'd spend more time wiring up Kafka than actually building the feature.",
        scores: { startup: 2, zen: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "How early do you start designing for scale?",
    options: [
      {
        id: '5a',
        text: "When the system is actually struggling. Premature optimization and all that.",
        scores: { monolith: 2, startup: 1, zen: 1 }
      },
      {
        id: '5b',
        text: "After v1 ships and I have real traffic data to reason about.",
        scores: { data: 2, startup: 1 }
      },
      {
        id: '5c',
        text: "I design for 10x from day one. Surprises at scale are extremely expensive.",
        scores: { microservices: 2, modular: 1 }
      },
      {
        id: '5d',
        text: "I design for 1000x, add a CDN, configure auto-scaling, and set up sharding...",
        scores: { overengineering: 3, microservices: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Which architecture diagram genuinely makes you excited?",
    options: [
      {
        id: '6a',
        text: "A single well-labeled box with clean, documented internal layers.",
        scores: { monolith: 2, zen: 2 }
      },
      {
        id: '6b',
        text: "Four to six services with crisp ownership and clean arrows between them.",
        scores: { modular: 2, microservices: 1 }
      },
      {
        id: '6c',
        text: "Twenty services, event streams, a service mesh, and a gateway. Chef's kiss.",
        scores: { overengineering: 3, microservices: 1 }
      },
      {
        id: '6d',
        text: "A Grafana dashboard with p99 latencies, error rates, and throughput. That IS the diagram.",
        scores: { data: 3, detective: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "You encounter code that 'works for now.' What do you actually do?",
    options: [
      {
        id: '7a',
        text: "Ship it. Log a ticket. Move on. Done is better than perfect.",
        scores: { startup: 2, monolith: 1 }
      },
      {
        id: '7b',
        text: "Leave a clear TODO comment with context and add it to the backlog properly.",
        scores: { modular: 1, detective: 1, data: 1 }
      },
      {
        id: '7c',
        text: "Quietly refactor it to something cleaner while I'm already in the file.",
        scores: { zen: 2, modular: 1 }
      },
      {
        id: '7d',
        text: "Add a test so at least it breaks loudly if anyone changes the behavior later.",
        scores: { detective: 2, data: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "Ultimately, what matters most to you in a well-built system?",
    options: [
      {
        id: '8a',
        text: "Clarity — I can reason about it and debug it at 2am without caffeine.",
        scores: { monolith: 2, zen: 2 }
      },
      {
        id: '8b',
        text: "Flexibility — it adapts cleanly as requirements change without major rewrites.",
        scores: { modular: 2, startup: 1 }
      },
      {
        id: '8c',
        text: "Scalability — it handles 100x load without paging anyone at 3am.",
        scores: { microservices: 2, data: 1 }
      },
      {
        id: '8d',
        text: "Observability — I can see exactly what it's doing at any given moment.",
        scores: { data: 2, detective: 2 }
      }
    ]
  }
];
