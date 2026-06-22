# ASRC Create Lab Website

This is a website built with SvelteKit and TailwindCSS.

## Objective
I want to create a few new website templates for the GMU Create Lab. Right now in the old folder is html of the old website.
This is my Professor's old website. I want to update the old design keeping the same styles but tweaking it a bit to look more modern.
I also want to create some new designs for the CREATE lab website. Use the same content but make it look different from the old design.

The normal updated design should be on "/" and the other designs should be on "/design2", "/design3", etc.

## Developement and Code Rules
You must follows these rule at all times

1. Do not add code comments
2. Do not run commands, I will test everything myself
3. Do not use emojies in documentation or the code
4. Keep code understandable and easy to read (name variables with easy to read names)
5. Do not give paragraph explanations unless asked. 

## Features 
1. This should build to static code. 
2. Use Iconify for icons. 
3. Use Bunjs for development.
4. Use Svelte 5 syntax.

## Tech Stack
- SvelteKit with Svelte 5 runes syntax
- TailwindCSS v4 (theme tokens defined in `src/lib/css/app.css`)
- `@sveltejs/adapter-static` with full prerendering (every route is static HTML)
- `@iconify/svelte` for all icons
- Bun for installing and running

## Getting Started
- `bun install` to install dependencies
- `bun run dev` to start the dev server
- `bun run build` to produce the static site in `build/`
- `bun run preview` to preview the production build

## CMS Integration
The CMS lives in the sibling `../cms` folder. Only design2 reads from it; design1 always uses
the bundled data in `src/lib/ts`.
- Set `PUBLIC_CMS_URL` (see `.env.example`) to the deployed CMS URL
- `src/lib/ts/cms.ts` is the client. design2 has no bundled fallback content: it is client
  rendered (`design2/+layout.ts` sets `ssr = false` and `prerender = false`) and fetches
  everything from the CMS on mount, showing a loading then an empty state when data is missing
- Because design2 is not prerendered, the static adapter is configured with an SPA fallback
  (`fallback: '200.html'`). design1 and the `/` design picker are still fully prerendered
- Uploaded images are referenced as `/api/files/<id>` and resolved against `PUBLIC_CMS_URL`
- The `src/lib/ts` data files remain the source of truth for design1 only

## Project Structure
- `src/routes/` page routes (see Pages below)
- `src/lib/components/` reusable Svelte components
- `src/lib/ts/` all TypeScript data and logic, imported into components
- `src/lib/css/app.css` Tailwind import and theme tokens
- `static/images/` image assets
- `old/` the original professor website, kept for reference

Page and component files stay small: data and logic live in `src/lib/ts`,
styling lives in `src/lib/css`, and markup composes components from `src/lib/components`.

## Pages
- `/` design picker that lists the available website designs
- `/design1` home of the first design, with featured project, about, sponsors, news, travel, and contact
- `/design1/research` grid of research themes
- `/design1/research/[slug]` dynamic research detail page with related publications
- `/design1/teaching` courses by institution
- `/design1/publications` journal articles, book chapters, and conference proceedings
- `/design1/group` principal investigator, students, and alumni
- `/design1/news` full news archive

- `/design2` a lab-focused robotics site (GMU green and gold, with dotted-grid accents),
  with `projects`, `research`, `research/[slug]`, `team`, `publications`, and `news`
  sub-pages. Projects lists the full portfolio; Research shows the in-depth write-ups
  (projects that have a detail article).

Additional designs go under their own base path (`/design2`, `/design3`, etc.).
The root layout (`src/routes/+layout.svelte`) only holds global styles and head tags,
while each design has its own layout that adds its navbar and footer. Design 1 reuses the
shared components in `src/lib/components`; Design 2 has its own components under
`src/lib/components/design2` and config in `src/lib/ts/design2.ts`. Both designs read the
same content from `src/lib/ts`.

## Theme Tokens
Defined in `src/lib/css/app.css` and usable as Tailwind classes:
- `gmu-green` (#006633), `gmu-green-dark`, `gmu-green-light`
- `gmu-gold` (#ffcc33)
- `ink` body text, `muted` secondary text

## Editing Content
All content is data driven. Update the matching file in `src/lib/ts`:
- `home.ts` home page sections
- `research.ts` research theme cards
- `researchArticles.ts` research detail pages and their related publication tags
- `teaching.ts` courses
- `publications.ts` all publications
- `group.ts` people
- `news.ts` news archive
- `navigation.ts` nav links (relative paths) and footer
- `designs.ts` the list of designs shown on the `/` design picker

### Adding a Research Detail Page
1. Add a `slug` to the project in `research.ts`. Cards with a `slug` link to the
   internal detail page, otherwise they link to the external `href`.
2. Add a matching entry to `researchArticles.ts` with the write-up `blocks` and the
   `relatedTags` of publications to show. Related papers are pulled from
   `publications.ts` by tag, so each citation is only stored once.
