export const questions = [
  {
    id: 1,
    text: "You’re building an internal tool for a team of five. What sounds best?",
    options: [
      {
        id: '1a',
        text: "One clean codebase. Easy to deploy, easy to debug, easy to explain.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '1b',
        text: "A few clearly separated modules with room to grow later.",
        scores: { modular: 2, zen: 1 }
      },
      {
        id: '1c',
        text: "Separate services from the start. Future us will be grateful.",
        scores: { microservices: 2, overengineering: 1 }
      },
      {
        id: '1d',
        text: "Whatever gets a usable version out this week.",
        scores: { startup: 2, monolith: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "You get a Slack message: “Hey, can we just quickly add this small feature?” What’s your real first thought?",
    options: [
      {
        id: '2a',
        text: "Yeah, probably. Let me just find the right file and add it.",
        scores: { startup: 2, monolith: 1 }
      },
      {
        id: '2b',
        text: "Define “small.” What part of the system is this touching?",
        scores: { modular: 2, detective: 1 }
      },
      {
        id: '2c',
        text: "This is absolutely not small. I can already see three services involved.",
        scores: { microservices: 2, overengineering: 1 }
      },
      {
        id: '2d',
        text: "What outcome are we optimizing for? I need the metric first.",
        scores: { data: 2, detective: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "A bug hits production. What does your ideal debugging session look like?",
    options: [
      {
        id: '3a',
        text: "Logs, patterns, timeline, root cause. No drama, just evidence.",
        scores: { detective: 2, data: 1 }
      },
      {
        id: '3b',
        text: "A few strategic console.logs and vibes.",
        scores: { startup: 1, monolith: 1, zen: 1 }
      },
      {
        id: '3c',
        text: "Tracing requests across multiple services until the truth reveals itself.",
        scores: { microservices: 1, overengineering: 2 }
      },
      {
        id: '3d',
        text: "Minimal reproduction, quiet focus, and reading the stack trace like literature.",
        scores: { zen: 2, detective: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "Someone says: “We should add Kafka” — for a side project with 50 users.",
    options: [
      {
        id: '4a',
        text: "For what? A cron job and an email service will survive just fine.",
        scores: { monolith: 2, zen: 1, startup: 1 }
      },
      {
        id: '4b',
        text: "Only if we’ve clearly outgrown something simpler.",
        scores: { modular: 1, data: 2 }
      },
      {
        id: '4c',
        text: "Agreed. Let’s also add a dead-letter queue while we’re at it.",
        scores: { overengineering: 3, microservices: 1 }
      },
      {
        id: '4d',
        text: "We’d spend more time wiring Kafka than building the actual feature.",
        scores: { startup: 2, zen: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "How early do you start thinking about scale?",
    options: [
      {
        id: '5a',
        text: "When the current system starts showing signs of pain.",
        scores: { monolith: 2, startup: 1, zen: 1 }
      },
      {
        id: '5b',
        text: "After launch, once I have actual traffic and usage data.",
        scores: { data: 2, startup: 1 }
      },
      {
        id: '5c',
        text: "Pretty early. Untangling scaling problems later can get expensive.",
        scores: { microservices: 2, modular: 1 }
      },
      {
        id: '5d',
        text: "Immediately. I would like to discuss sharding before lunch.",
        scores: { overengineering: 3, microservices: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Which diagram makes you stop and say, “nice”?",
    options: [
      {
        id: '6a',
        text: "One neat box with clean internal layers and clear labels.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '6b',
        text: "A few well-bounded services with sensible arrows and ownership.",
        scores: { modular: 2, microservices: 1 }
      },
      {
        id: '6c',
        text: "A handful of services, maybe a queue or two, and clear interactions. Just enough complexity.",
        scores: { microservices: 2, modular: 1 }
      },
      {
        id: '6d',
        text: "A metrics dashboard with p95, p99, throughput, and error rate trends.",
        scores: { data: 3, detective: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "You find code that “works for now.” What do you do?",
    options: [
      {
        id: '7a',
        text: "Ship it, note it down, and keep moving. Perfect can wait.",
        scores: { startup: 2, monolith: 1 }
      },
      {
        id: '7b',
        text: "Leave context, open a ticket, and make sure it’s tracked properly.",
        scores: { modular: 1, detective: 1, data: 1 }
      },
      {
        id: '7c',
        text: "Refactor it while I’m already in there. I won’t sleep otherwise.",
        scores: { zen: 2, modular: 1 }
      },
      {
        id: '7d',
        text: "Add a test first so future chaos at least becomes observable chaos.",
        scores: { detective: 2, data: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "It’s 2am. Production is down. What’s your move?",
    options: [
      {
        id: '8a',
        text: "Patch it fast, stabilize things, and deal with elegance tomorrow.",
        scores: { startup: 2, monolith: 1 }
      },
      {
        id: '8b',
        text: "Check logs, metrics, and timeline. No guessing under pressure.",
        scores: { detective: 2, data: 1 }
      },
      {
        id: '8c',
        text: "Identify which service failed first. Or maybe it’s the gateway. Or the queue.",
        scores: { microservices: 2, overengineering: 1 }
      },
      {
        id: '8d',
        text: "Roll back first. Regret can be processed later.",
        scores: { zen: 2, modular: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "You’re reviewing a PR. What matters most to you?",
    options: [
      {
        id: '9a',
        text: "It works, it’s readable, and it doesn’t create extra mess.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '9b',
        text: "The structure. I want clear boundaries and clean responsibilities.",
        scores: { modular: 2, detective: 1 }
      },
      {
        id: '9c',
        text: "Whether this introduces future scaling or ownership issues.",
        scores: { microservices: 2, data: 1 }
      },
      {
        id: '9d',
        text: "Whether it should really be split into another service.",
        scores: { overengineering: 2, microservices: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "Be honest — when do you reach for a new framework or tool?",
    options: [
      {
        id: '10a',
        text: "When the current setup clearly can’t do the job anymore.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '10b',
        text: "After comparing options and making sure the trade-offs are worth it.",
        scores: { data: 2, modular: 1 }
      },
      {
        id: '10c',
        text: "After reading one suspiciously convincing blog post.",
        scores: { startup: 1, overengineering: 2 }
      },
      {
        id: '10d',
        text: "Immediately. I have already opened six tabs.",
        scores: { overengineering: 3 }
      }
    ]
  },
  {
    id: 11,
    text: "What kind of sentence do you say most often while building something?",
    options: [
      {
        id: '11a',
        text: "Let’s keep this simple.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '11b',
        text: "Let’s structure this properly.",
        scores: { modular: 2, detective: 1 }
      },
      {
        id: '11c',
        text: "This should scale.",
        scores: { microservices: 2, data: 1 }
      },
      {
        id: '11d',
        text: "We can optimize that later, just ship it.",
        scores: { startup: 2, monolith: 1 }
      }
    ]
  },
  {
    id: 12,
    text: "Ultimately, what matters most to you in a well-built system?",
    options: [
      {
        id: '12a',
        text: "Clarity. I want to understand it fully, especially when something breaks.",
        scores: { monolith: 2, zen: 1 }
      },
      {
        id: '12b',
        text: "Flexibility. It should adapt cleanly as requirements change.",
        scores: { modular: 2, startup: 1 }
      },
      {
        id: '12c',
        text: "Scalability. It should handle growth without turning into a fire drill.",
        scores: { microservices: 2, data: 1 }
      },
      {
        id: '12d',
        text: "Observability. I want to know exactly what it’s doing and why.",
        scores: { data: 2, detective: 2 }
      }
    ]
  }
]