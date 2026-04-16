export const questions = [
  {
    id: 1,
    text: "You’re building an internal tool for a team of five. What sounds best?",
    options: [
      { id: '1a', text: "One clean codebase. Easy to deploy, easy to debug, easy to explain.", scores: { monolith: 2, zen: 1 } },
      { id: '1b', text: "A few clearly separated modules with room to grow later.", scores: { modular: 2, zen: 1 } },
      { id: '1c', text: "Separate services from the start. Future us will be grateful.", scores: { microservices: 2, overengineering: 1 } },
      { id: '1d', text: "Whatever gets a usable version out this week.", scores: { startup: 2, monolith: 1 } }
    ]
  },

  {
    id: 2,
    text: "You get a Slack message: “Hey, can we just quickly add this small feature?” What’s your real first thought?",
    options: [
      { id: '2a', text: "Yeah, probably. Let me just find the right file and add it.", scores: { startup: 2, monolith: 1 } },
      { id: '2b', text: "Define “small.” What part of the system is this touching?", scores: { modular: 2, detective: 1 } },
      { id: '2c', text: "This is absolutely not small. I can already see three services involved.", scores: { microservices: 2, overengineering: 1 } },
      { id: '2d', text: "What outcome are we optimizing for? I need the metric first.", scores: { data: 2, detective: 1 } }
    ]
  },

  {
    id: 3,
    text: "A bug hits production. What does your ideal debugging session look like?",
    options: [
      { id: '3a', text: "Logs, patterns, timeline, root cause. No drama, just evidence.", scores: { detective: 2, data: 1 } },
      { id: '3b', text: "A few strategic console.logs and vibes.", scores: { startup: 1, monolith: 1, zen: 1 } },
      { id: '3c', text: "Tracing requests across multiple services until the truth reveals itself.", scores: { microservices: 1, overengineering: 2 } },
      { id: '3d', text: "Minimal reproduction, quiet focus, and reading the stack trace like literature.", scores: { zen: 2, detective: 1 } }
    ]
  },

  {
    id: 4,
    text: "Someone says: “We should add Kafka” — for a side project with 50 users.",
    options: [
      { id: '4a', text: "For what? A cron job and an email service will survive just fine.", scores: { monolith: 2, zen: 1, startup: 1 } },
      { id: '4b', text: "Only if we’ve clearly outgrown something simpler.", scores: { modular: 1, data: 2 } },
      { id: '4c', text: "Agreed. Let’s also add a dead-letter queue while we’re at it.", scores: { overengineering: 3, microservices: 1 } },
      { id: '4d', text: "We’d spend more time wiring Kafka than building the actual feature.", scores: { startup: 2, zen: 1 } }
    ]
  },

  {
    id: 5,
    text: "You find code that “works for now.” What do you do?",
    options: [
      { id: '5a', text: "Ship it, note it down, and keep moving. Perfect can wait.", scores: { startup: 2, monolith: 1 } },
      { id: '5b', text: "Leave context, open a ticket, and make sure it’s tracked properly.", scores: { modular: 1, detective: 1, data: 1 } },
      { id: '5c', text: "Refactor it while I’m already in there. I won’t sleep otherwise.", scores: { zen: 2, modular: 1 } },
      { id: '5d', text: "Add a test first so future chaos at least becomes observable chaos.", scores: { detective: 2, data: 1 } }
    ]
  },

  {
    id: 6,
    text: "It’s 2am. Production is down. What’s your move?",
    options: [
      { id: '6a', text: "Patch it fast, stabilize things, and deal with elegance tomorrow.", scores: { startup: 2, monolith: 1 } },
      { id: '6b', text: "Check logs, metrics, and timeline. No guessing under pressure.", scores: { detective: 2, data: 1 } },
      { id: '6c', text: "Identify which service failed first. Or maybe it’s the gateway. Or the queue.", scores: { microservices: 2, overengineering: 1 } },
      { id: '6d', text: "Roll back first. Regret can be processed later.", scores: { zen: 2, modular: 1 } }
    ]
  },

  {
    id: 7,
    text: "How many tabs do you usually have open while coding?",
    options: [
      { id: '7a', text: "2–3. I close things aggressively.", scores: { zen: 2, monolith: 1 } },
      { id: '7b', text: "6–8. Enough to be useful, not enough to be embarrassing.", scores: { modular: 2, data: 1 } },
      { id: '7c', text: "12+. Docs, logs, Stack Overflow, and one mystery tab.", scores: { detective: 2, startup: 1 } },
      { id: '7d', text: "I stopped counting. Chrome is now part of the architecture.", scores: { overengineering: 3, microservices: 1 } }
    ]
  },

  {
    id: 8,
    text: "You’re naming a variable. How does it usually go?",
    options: [
      { id: '8a', text: "Short, clear, done in seconds.", scores: { zen: 2, monolith: 1 } },
      { id: '8b', text: "Meaningful and descriptive. Might take a minute, but worth it.", scores: { modular: 2, zen: 1 } },
      { id: '8c', text: "Rename it four times before committing.", scores: { detective: 2, data: 1 } },
      { id: '8d', text: "temp, finalTemp, actualFinalTemp. We move.", scores: { startup: 2, overengineering: 1 } }
    ]
  },

  {
    id: 9,
    text: "Be honest — how often do you say “this is a quick fix”?",
    options: [
      { id: '9a', text: "Rarely. If I say it, I mean it.", scores: { zen: 2, monolith: 1 } },
      { id: '9b', text: "Sometimes. It usually is... eventually.", scores: { modular: 1, startup: 1 } },
      { id: '9c', text: "Often. It almost never is.", scores: { startup: 2, detective: 1 } },
      { id: '9d', text: "Every time. I no longer trust myself.", scores: { overengineering: 2, startup: 1 } }
    ]
  },

  {
    id: 10,
    text: "What sentence sounds the most like you while building something?",
    options: [
      { id: '10a', text: "Let’s keep this simple.", scores: { monolith: 2, zen: 1 } },
      { id: '10b', text: "Let’s structure this properly.", scores: { modular: 2, detective: 1 } },
      { id: '10c', text: "This should scale.", scores: { microservices: 2, data: 1 } },
      { id: '10d', text: "We can optimize that later, just ship it.", scores: { startup: 2, monolith: 1 } }
    ]
  }
]