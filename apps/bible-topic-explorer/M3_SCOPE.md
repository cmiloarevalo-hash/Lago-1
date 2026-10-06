# M3 — Functional integration (40→60%)

Baseline: `main` at `4f4b1b827dcf6c75a1bfd9c5096b39b7e39e8a3f` (M2 accepted).

## Objective
Convert the M2 functional UI/contracts into a locally integrated, offline-first V1 core without expanding product scope.

## Frozen constraints
- RV1909 only at runtime.
- Existing bundled SQLite corpus/model remains authoritative.
- No backend, accounts, cloud requirement, vector DB, LLM/AI API, or exact alarms.
- Preserve four primary tabs: Hoy / Buscar / Biblia / Biblioteca.
- Work remains inside `apps/bible-topic-explorer/**` plus CI/evidence strictly needed for verification.

## M3 gates
1. Reconcile post-M2 source and define persistence/data adapters.
2. Bind Bible navigation/reader to bundled SQLite chapter/verse data.
3. Implement literal local search over corpus with deterministic result contracts.
4. Implement lexical-related/thematic local search for frozen V1 topics without AI services.
5. Bind Hoy to real local content/state rather than static fixtures where applicable.
6. Persist saved items/history/reflections locally.
7. Persist settings/onboarding/preferences locally.
8. Implement best-effort local reminder behavior only if supported by the existing product contract and dependency policy.
9. Integrate offline/error/empty/accessibility behavior against real adapters and persistence.
10. Run regression CI, Expo dependency check, Android runtime bundle smoke, and final diff/data audit.

## Completion rule
M3 is not complete until all 10 gates have durable evidence and the final verification is green on one review HEAD.

Do not start M4 or declare 60% from Implementer; return to Supervisor for acceptance.
