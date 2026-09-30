# Task Plan — Polish JavaScript files

## Objective
Polish all `.js` files in the repo. Scope confirmed by user: **JavaScript files only, safe cleanup**.
Preserve all commented-out lesson notes and all existing identifiers. No behavioural change.

## Scope

### In scope
- 10 JS files: `Javascript/Class1..Class8/script.js`, `Javascript/Class5/functions.js`, `Javascript/DOM/script.js`
- Mechanical hygiene: trailing whitespace, file endings, blank-line runs, indentation of live code, spacing, redundant `getElementById` lookups, missing radix
- Real code-quality fixes with no behaviour change: `==` -> `===` on numeric comparisons, inconsistent object key casing

### Out of scope (explicitly NOT doing)
- Deleting / rewriting commented-out lesson notes (this is a teaching repo; the comments ARE the content)
- HTML / CSS files (user narrowed scope to JS)
- Renaming misspelled identifiers (`Deposite`, `drowdown`, `Ananymous`) — see findings.md, these are load-bearing or teaching text
- Adding a linter / formatter config or installing dependencies

## Phases

| # | Phase | State |
|---|-------|-------|
| 1 | Inventory all JS files, read every one | Completed |
| 2 | Capture behavioural baseline (node --check + stdout) | Completed |
| 3 | Polish JS files | In Progress |
| 4 | Validate: re-check parse + diff stdout vs baseline | Not Started |
| 5 | Final consistency check across plan/findings/progress | Not Started |

## Completion criteria
- [ ] All 10 JS files: `node --check` passes
- [ ] Byte-identical stdout vs baseline for every file
- [ ] No trailing whitespace in any JS file
- [ ] Every file ends with exactly one newline
- [ ] No run of 3+ consecutive blank lines
- [ ] All commented-out lesson notes byte-identical in wording (only leading indentation of comment blocks left as-is)
- [ ] HTML still works: `Deposite`, `withdraw`, `inputChanges` still global with original names

## Risks
- **Reformatting a live-code line that a lesson comment references** — mitigate: no changes to values, strings, or control flow.
- **Renaming anything in Class8** would silently break inline HTML handlers — mitigate: Class8 globals stay exactly as-is.
