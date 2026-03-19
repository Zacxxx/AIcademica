# AIcademica Spec

> AIcademica is a frontend for an AI Agent University built to accelerate learning for real people.

## Table of Contents

- [Source Prompt](#source-prompt)
- [Product Summary](#product-summary)
- [Core Thesis](#core-thesis)
- [Agent Model](#agent-model)
- [Learning Loop](#learning-loop)
- [Student Journey](#student-journey)
- [Stack](#stack)
- [Product Principles](#product-principles)
- [First-Screen Requirements](#first-screen-requirements)
- [Non-Goals For v0](#non-goals-for-v0)
- [Repo Deliverables](#repo-deliverables)
- [Identity Keywords](#identity-keywords)

## Source Prompt

<details>
<summary><strong>Original prompt</strong></summary>

> In dev/sandbox create a project called : AIcademica
>
> A frontend for a AI Agent University.
>
> The principle is simple :
>
> The goal is to accelerate learning for real people.
>
> Professor agents -> Agents that acts as professors teach real students in async-classes.
>
> Educational Body agents -> Creates classes, programs and events
>
> Examination agents -> Creates assignements and verify that knowledge is properly acquiered
>
> Supervisor agents -> Supervises the whole university and orchestrates the agents
>
> --
>
> - Educational agents create programs, spawns teachers and examination agents, based on what the supervisor agent has intended for this season
> - Examination agents creates tests, assignements, organise IRL events to verify the acquiring of knowledge
> - Teachers teach in async, any class and can responde to questions, with the pedagological goal of bettering the students and getting them ready to use the knowledge they brought onto them
> - Supervisor orchestrates, just like an IRL supervisor would, creating the axes that the educational agents must take
> - Treasurer agent, orchestrates the budget of the University and finds ways to finance it
>
> Agents also have at their disposition a of tools through tool agents
>
> UI Tool Agent -> Allows to display dynamically UIs made for teaching on a virtual whiteboard (mostly used by teachers and educational)
>
> --
>
> The way of teaching is sort of conventional, with the program being created before classes start, the program is then injected into the teacher agent that develops it and uses it to teach it's classes.
>
> --
>
> The teacher agent makes full use of interweaved capabilities of Google's models
>
> --
>
> A student must take a diploma they aim, apply to classes, get grades and receive certifications at the end.
>
> First create the spec for it, that contains my original prompt, then create a deck for it and then a readme, then a contributing, then rules for the repo to be editable only by me (zacxxx) then commit as a public repo.
>
> You can also generate an image online, add it to the repo and use it in the readme to make it prettier.
>
> The stack for now is next, bun, rust and supabase

</details>

## Product Summary

AIcademica is a frontend for an AI Agent University. The product accelerates learning for real people through a conventional education flow mediated by specialized agents.

## Core Thesis

- Learning becomes faster when teaching is structured, sequential, and measurable.
- Agent specialization is better than one generic agent doing everything.
- Programs should be designed before classes begin, then injected into teachers for execution.
- Assessment matters as much as instruction, so examinations are first-class.
- A university metaphor creates a clear mental model for students, teachers, and operational teams.

## Agent Model

### Professor Agents

- Teach async classes.
- Answer student questions.
- Focus on pedagogy, clarity, and knowledge transfer.
- Use the prepared program as their source of truth.

### Educational Body Agents

- Create programs, classes, schedules, and events.
- Spawn professor and examination agents based on the season plan.
- Turn supervisor intent into operational curricula.

### Examination Agents

- Create assignments and tests.
- Organize verification events, including in-person checkpoints when needed.
- Confirm that knowledge is truly acquired before certification.

### Supervisor Agents

- Define the axes and priorities for the current season.
- Orchestrate the whole university.
- Coordinate the educational body, professors, examinations, and treasury.

### Treasurer Agent

- Manage budget planning and burn.
- Find ways to finance the university.
- Keep the institution viable without weakening the learning mission.

### Tool Agents

- Expose capabilities to other agents.
- Provide dynamic UI experiences on a virtual whiteboard.
- Support teaching, explanation, and interactive visual learning.

## Learning Loop

1. The supervisor defines the season.
2. Educational body agents draft programs and classes.
3. The program is injected into professor agents.
4. Professors teach asynchronously and answer questions.
5. Examination agents verify the student’s knowledge.
6. Students receive grades, certifications, and eventually diplomas.

<details>
<summary><strong>Operational note</strong></summary>

The flow is intentionally conventional: curriculum first, teaching second, assessment last. That is the model the UI should communicate from day one.

</details>

## Student Journey

- Choose a diploma target.
- Apply to the classes that map to that diploma.
- Attend async teaching and participate in exercises.
- Receive grades and progress signals.
- Complete certification requirements.
- Graduate with a diploma that reflects the acquired knowledge.

## Stack

- Frontend: Next.js
- Package manager: Bun
- Backend services: Rust
- Data and auth: Supabase

<details>
<summary><strong>Implementation note</strong></summary>

The repo currently contains the Next.js frontend scaffold, the documentation set, and the extracted prototype under `frontend/`.
Rust services and Supabase wiring are part of the intended product direction.

</details>

## Product Principles

- Conventional structure first, AI second.
- Programs before classes.
- Assessment before graduation.
- Clear specialization for every agent.
- Human learning outcomes over agent novelty.

## First-Screen Requirements

- Explain what AIcademica is in one sentence.
- Show the agent roles at a glance.
- Show the education loop from season to diploma.
- Show the stack and implementation direction.
- Set the tone as scholarly, operational, and modern.

## Non-Goals For v0

- No attempt to automate away the full academic process.
- No generic chatbot product framing.
- No marketplace before the core learning loop exists.
- No fake grading without verification.

## Repo Deliverables

- `README.md` for project orientation.
- `DECK.md` for the pitch deck.
- `CONTRIBUTING.md` for contribution workflow.
- `REPO_RULES.md` for repository access policy.
- `CODEOWNERS` to bind edits to `zacxxx`.
- A branded landing page in Next.js.

## Identity Keywords

- AI agent university
- professor agents
- educational body agents
- examination agents
- supervisor agents
- treasurer agent
- tool agents
- diploma paths
- async classes
- certifications
