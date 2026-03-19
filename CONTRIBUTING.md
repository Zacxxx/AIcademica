# Contributing

## Scope

- This repository is maintained by `zacxxx`.
- Keep changes aligned with the AIcademica spec and learning model.
- Prefer small, reviewable changes that do not blur the roles of the agents.

## Workflow

1. Read `SPEC.md` first.
2. Update the landing page or docs to match the product direction.
3. Keep the stack focused on Next.js, Bun, Rust, and Supabase.
4. Run lint and build before opening a change.
5. Add notes for any follow-up work that needs Rust or Supabase wiring.

## Code Style

- Use TypeScript for the frontend.
- Keep components explicit and easy to scan.
- Favor simple, durable abstractions over clever ones.
- Match the scholarly but operational tone of the product.

## Review Expectations

- Document any change in behavior.
- Mention UI, data, or policy implications.
- Call out anything that should later become a Rust service or Supabase flow.

## Prohibited Changes

- Do not dilute the university model into a generic chatbot wrapper.
- Do not remove the repo ownership policy.
- Do not add unrelated tooling without a clear reason.
