export const questions = [
  {
    id: 1,
    text: "You’re building an internal tool for a team of five. How do you want it set up?",
    options: [
      { id: '1a', text: "One codebase. I want to open a single repo and see the whole thing at once.", scores: { monolith: 2, zen: 1 } },
      { id: '1b', text: "A handful of modules with clear lines between them.", scores: { modular: 2, zen: 1 } },
      { id: '1c', text: "Separate services from day one. I’d rather set the pattern early than retrofit it.", scores: { microservices: 2, overengineering: 1 } },
      { id: '1d', text: "Whatever ships this week. We’ll reshape it once people actually use it.", scores: { startup: 2, monolith: 1 } }
    ]
  },

  {
    id: 2,
    text: "Slack message: “Hey, can we just quickly add this small feature?” What’s your real first thought?",
    options: [
      { id: '2a', text: "Sure. I probably already know which file this lives in.", scores: { startup: 2, monolith: 1 } },
      { id: '2b', text: "Depends what it touches. I want to see which parts of the system it crosses.", scores: { modular: 2, detective: 1 } },
      { id: '2c', text: "Nothing’s ever small. I can already see this rippling across a few services.", scores: { microservices: 2, overengineering: 1 } },
      { id: '2d', text: "What are we trying to move with it? Give me the metric before the feature.", scores: { data: 2, detective: 1 } }
    ]
  },

  {
    id: 3,
    text: "A bug hits production. What does your debugging session actually look like?",
    options: [
      { id: '3a', text: "Logs, patterns, timeline, root cause. I follow the evidence wherever it goes.", scores: { detective: 2, data: 1 } },
      { id: '3b', text: "A few well-placed console.logs and a hunch that’s usually right.", scores: { startup: 1, monolith: 1, zen: 1 } },
      { id: '3c', text: "Trace the request across every service until one of them confesses.", scores: { microservices: 1, overengineering: 2 } },
      { id: '3d', text: "Smallest possible repro, quiet room, and I just sit and read the stack trace.", scores: { zen: 2, detective: 1 } }
    ]
  },

  {
    id: 4,
    text: "Someone says: “We should add Kafka” — for a side project with 50 users.",
    options: [
      { id: '4a', text: "For what? A cron job and an email queue cover this completely.", scores: { monolith: 2, zen: 1, startup: 1 } },
      { id: '4b', text: "Maybe — once we can actually show we’ve outgrown something simpler.", scores: { modular: 1, data: 2 } },
      { id: '4c', text: "I’m in. And a dead-letter queue while we’re already in there.", scores: { overengineering: 3, microservices: 1 } },
      { id: '4d', text: "We’d spend the whole weekend wiring Kafka instead of building the actual thing.", scores: { startup: 2, zen: 1 } }
    ]
  },

  {
    id: 5,
    text: "You find code that “works for now.” What do you do?",
    options: [
      { id: '5a', text: "Leave it, jot a note, keep moving. It’s working.", scores: { startup: 2, monolith: 1 } },
      { id: '5b', text: "Drop context in a comment and open a ticket so it’s tracked.", scores: { modular: 1, detective: 1, data: 1 } },
      { id: '5c', text: "Clean it up while I’m already in here. It’ll nag at me otherwise.", scores: { zen: 2, modular: 1 } },
      { id: '5d', text: "Wrap a test around it so the next time it breaks, at least I’ll see it.", scores: { detective: 2, data: 1 } }
    ]
  },

  {
    id: 6,
    text: "It’s 2am. Production is down. What’s your move?",
    options: [
      { id: '6a', text: "Patch it fast, get things stable, deal with the elegance tomorrow.", scores: { startup: 2, monolith: 1 } },
      { id: '6b', text: "Logs, metrics, timeline. I’m not guessing under pressure.", scores: { detective: 2, data: 1 } },
      { id: '6c', text: "Work out which service tipped first — gateway, queue, or the one downstream.", scores: { microservices: 2, overengineering: 1 } },
      { id: '6d', text: "Roll back now, think about why later.", scores: { zen: 2, modular: 1 } }
    ]
  },

  {
    id: 7,
    text: "How many tabs do you usually have open while coding?",
    options: [
      { id: '7a', text: "2–3. More than that and I lose the thread.", scores: { zen: 2, monolith: 1 } },
      { id: '7b', text: "6–8, sorted into windows by what I’m working on.", scores: { modular: 2, data: 1 } },
      { id: '7c', text: "12+. Docs, logs, three Stack Overflow answers, and one mystery tab.", scores: { detective: 2, startup: 1 } },
      { id: '7d', text: "Enough that Chrome is basically part of the stack now.", scores: { overengineering: 3, microservices: 1 } }
    ]
  },

  {
    id: 8,
    text: "You’re naming a variable. How does it usually go?",
    options: [
      { id: '8a', text: "Short and obvious. Done in seconds.", scores: { zen: 2, monolith: 1 } },
      { id: '8b', text: "Descriptive and exact. Takes a minute, but I’ll know what it is in six months.", scores: { modular: 2, zen: 1 } },
      { id: '8c', text: "Renamed about four times before I’m willing to commit.", scores: { detective: 2, data: 1 } },
      { id: '8d', text: "temp, finalTemp, actualFinalTemp. It works.", scores: { startup: 2, overengineering: 1 } }
    ]
  },

  {
    id: 9,
    text: "Be honest — how often do you say “this is a quick fix”?",
    options: [
      { id: '9a', text: "Rarely. When I say it, I mean it.", scores: { zen: 2, monolith: 1 } },
      { id: '9b', text: "Sometimes. And it usually is… eventually.", scores: { modular: 1, startup: 1 } },
      { id: '9c', text: "Often. It almost never is.", scores: { startup: 2, detective: 1 } },
      { id: '9d', text: "Constantly. I’ve stopped trusting myself on this.", scores: { overengineering: 2, startup: 1 } }
    ]
  },

  {
    id: 10,
    text: "Which sentence sounds the most like you while building something?",
    options: [
      { id: '10a', text: "“Let’s keep this simple.”", scores: { monolith: 2, zen: 1 } },
      { id: '10b', text: "“Let’s structure this properly.”", scores: { modular: 2, detective: 1 } },
      { id: '10c', text: "“This needs to scale.”", scores: { microservices: 2, data: 1 } },
      { id: '10d', text: "“Ship it now, optimize later.”", scores: { startup: 2, monolith: 1 } }
    ]
  }
]
