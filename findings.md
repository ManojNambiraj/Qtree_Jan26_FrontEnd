# Findings

## Repository nature (fact)
Front-end course repo. Directory layout is `Class<N>/` per lesson, ordered by git history:
HTML intro -> CSS -> JS basics -> JS functions -> JS methods -> event listeners -> DOM -> Bootstrap.

The **commented-out code is the lesson material**, not dead code. Most of it is instructor notes
covering syntax that was demonstrated live in class. Treat comments as content, never delete.

## Load-bearing identifiers (critical constraint)
`Javascript/Class8/script.js` exposes globals consumed by **inline event handlers** in
`Javascript/Class8/index.html`:

```html
<input type="number" onchange="inputChanges(event)" />
<button onclick="Deposite()">Deposite</button>
<button onclick="withdraw()">Withdraw</button>
```

Therefore in Class8/script.js:
- `Deposite` (misspelled) **must not** be renamed -> would throw `Deposite is not defined`
- `inputChanges`, `withdraw` must stay global -> **no IIFE / no `"use strict"` module wrapping**
- `bank_balance` and `amt` must stay module-scope globals

Same reasoning protects the misspelling `.drowdown` in `CSS/Class7/index.html`
(styled as `.drowdown` and `.drowdown:hover .dropdown_content`). Out of JS scope anyway.

## Formatting conventions in the repo (observed)
- The **comment blocks use deliberate 4/8-space outline nesting** to show topic hierarchy
  (topic -> subtopic -> example). This is intentional structure, not bad indentation.
  Live code inside those files is inconsistently indented (2-space in Class3, 4-space in Class5/Class8).
- Prettier is **not** installed and `npx prettier` would require a network install.
  A formatter is also the wrong tool here: it would flatten the comment-block outline structure
  that carries the teaching value. Formatting done by hand instead.
- No ESLint/Prettier/package.json in the repo at all — plain static files.

## Concrete issues found (fact)
- Trailing whitespace: `Class1, Class2, Class5/script.js, Class5/functions.js, Class6/script.js` (+ others in HTML, out of scope)
- `Javascript/Class1/script.js` has **no trailing newline**
- `Javascript/Class4/script.js` ends with **~15 consecutive blank lines**
- `Javascript/Class5/script.js` ends with blank-line runs
- Loose `==` on numeric comparisons: `Class3` (`i == 4`), `Class5/functions.js` (`i == 6`)
- `Class4/script.js` object literal: no inner spaces `{name: ...}` and inconsistent key casing (`Mobile` vs `name`/`age`/`dept`)
- `Class8/script.js`: `parseInt()` called without radix; `document.getElementById("result")` re-queried on every click

## Assumptions (explicit, not verified facts)
- "Polish" = safe cleanup preserving behaviour and lesson content, per the option the user selected.
- Comment prose/wording (e.g. the `Ananymous Function` heading typo) left untouched — wording edits are
  content edits. Listed as optional follow-up rather than done unilaterally.
