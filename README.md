# AIcademica

AIcademica is a frontend for an AI Agent University built to accelerate learning for real people.

It is organized around specialized agents:

- Professor agents teach async classes.
- Educational body agents create programs, classes, and events.
- Examination agents create assignments and verify that knowledge was acquired.
- Supervisor agents orchestrate the university across each season.
- Treasurer agents manage the budget and financing.
- Tool agents expose shared capabilities such as UI Tool Agent surfaces for virtual whiteboards.

## Stack

- Next.js
- Bun
- Rust
- Supabase

## Visual

![AIcademica hero banner](./public/aiacademica-hero.svg)

## Key Ideas

- Programs are created before classes start.
- The program is injected into the teacher agent.
- Teachers teach in async and answer questions with a pedagogical goal.
- Assessment is first-class and leads to grades, certifications, and diplomas.
- The teacher agent uses interweaved Google model capabilities.

## Repository Map

- `SPEC.md` contains the source prompt and the product spec.
- `DECK.md` is the pitch deck.
- `CONTRIBUTING.md` describes how to work in the repo.
- `REPO_RULES.md` documents the owner-only editing rule.
- `src/app` contains the Next.js landing page.

## Getting Started

```bash
bun install
bun dev
```

Then open `http://localhost:3000`.

## Next Steps

1. Add the first Rust service for orchestration.
2. Add Supabase auth and data models.
3. Turn the landing page into a product shell.
4. Wire the class, assessment, and certification flows.
