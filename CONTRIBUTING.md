# Working on this site

A solo project, developed as though it weren't. `main` is protected and deploys
straight to production, so every change goes through a pull request that has
passed CI and been looked at on a real preview URL first.

---

## The workflow

### 1. Branch

```bash
git switch main
git pull
git switch -c feat/add-case-study
```

Branch names are `<type>/<short-description>` — `feat/`, `fix/`, `content/`,
`refactor/`, `chore/`.

### 2. Commit

[Conventional Commits](https://www.conventionalcommits.org):
`<type>(<optional scope>): <imperative summary>`.

**One short sentence, and nothing more.** No body, no trailers, no co-authors.
The reasoning belongs in the PR description. Since merges are squashed, the PR
title becomes the commit message on `main` — so write the title to that standard
too.

### 3. Open a draft PR early

```bash
git push -u origin feat/add-case-study
gh pr create --draft --fill
```

### 4. Let CI run

| Check                  | What it does                                                           | Blocks merge |
| ---------------------- | ---------------------------------------------------------------------- | ------------ |
| **Build & checks**     | `astro check`, `prettier --check`, `astro build`                       | Yes          |
| **Preview deployment** | Publishes the PR to its own Cloudflare Pages URL and comments the link | No           |

The preview URL is the point of the whole setup: **open it before merging.** A
portfolio is a visual artefact, and a diff cannot tell you whether the spacing
looks right on a phone.

Preview deploys are advisory — a Cloudflare hiccup should not block a correct
change.

### 5. Self-review, then merge

Read the whole diff in "Files changed", work through the checklist in the PR
template, then **Squash and merge** (the only option enabled). The branch
deletes itself, and merging to `main` deploys to production automatically.

---

## Running things locally

```bash
npm ci             # install exactly what the lockfile says
npm run dev        # local dev server with hot reload
npm run check      # type-check .astro and .ts
npm run format     # fix formatting
npm run format:check   # verify formatting, the way CI does
npm run build      # production build into dist/
npm run preview    # serve the built output locally
```

Everything CI checks, in one go:

```bash
npm run check && npm run format:check && npm run build
```

Node version is pinned in `.nvmrc` (currently 24) and CI reads that same file,
so local and CI cannot drift. With nvm installed, `nvm use` picks it up.

## Deployment

`main` → Cloudflare Pages project `jerichomagallanes` → https://jerichomagallanes.com

Deploys run from `.github/workflows/deploy.yml` on every push to `main`, and can
be re-run manually from the Actions tab via **Run workflow** — useful after
rotating a token, with no empty commit needed.

It re-runs the type check, format check and build before shipping, because
`main` can also move via an admin bypass, and a broken build must never reach
the live site.

Two repository secrets power this: `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`.

## Content

Page content lives in `src/data/` (`experience.ts`, `photos.ts`, `about.ts`,
`socials.ts`) and UI strings in `src/i18n/ui.ts`. Prefer editing those over
hardcoding copy into components — and remember the site ships English and
Japanese, so both need updating.

## Breaking glass

Branch protection allows an admin bypass for the case where CI itself is broken.
Using it should feel like a small failure, and the next PR should say why.
