# CLAUDE.md: Amal Vaishnav Portfolio

Project brief for Claude Code. Read this fully before writing any code.

## Goal

A single-page personal portfolio for Amal Vaishnav, a frontend engineer. It should feel professional, but also warm, playful and artistic, and show real UX craft (modern, 2026-era). A recruiter should trust it in five seconds; a friend should smile at it.

- Live URL (target): `amalvaishnav.pages.dev`
- Repo: `amalvaishnav/portfolio` (public)
- Hosting: Cloudflare Pages, auto-deploys on push to `main`

## Stack (keep it simple)

- Vite + React (JavaScript, kept consistent). Vite is pinned to v4 because the dev machine runs Node 16; upgrade Node before moving to a newer Vite.
- Sass (`.scss`) for styling, with design tokens as CSS custom properties
- Static build only: no backend, no CMS, no database, no forms service
- Build: `npm run build`, output directory: `dist`
- Minimal dependencies. No UI kits. A small animation library is OK only if it is clearly worth it; prefer CSS animations and the Web Animations API.
- Fonts: load from Google Fonts with `display=swap`, max 2 families.

## Content rules (important)

Use ONLY the facts below. Do not invent projects, metrics, job responsibilities, testimonials, awards, or skills. If something is missing, leave a clearly marked placeholder (`TODO:`) rather than making something up. Amal will add more content later.

### Identity
- Name: Amal Vaishnav
- Role: Frontend Developer (Software Engineer) at United Wholesale Mortgage
- Location (public): Metro Detroit, Michigan. Do NOT show a street address.
- Links:
  - Email: amal.vaishnav96@gmail.com (use a `mailto:` link, no form)
  - GitHub: https://github.com/amalvaishnav
  - LinkedIn: https://www.linkedin.com/in/amalvaishnav

Write a short, warm hero line and a 2-3 sentence bio using only the facts on this page. Tone: friendly, confident, human. No corporate buzzwords.

### Experience (newest first)

1. **Frontend Developer**, United Wholesale Mortgage (full-time), Oct 2023 to present. Detroit metro area, on-site.
   - No public description available. Show title, company and dates only. Do not invent bullets.
2. **Software Engineer**, Marlabs LLC (full-time), Mar 2023 to Sep 2023. Raleigh-Durham area, hybrid.
   - No description available. Show title, company and dates only.
3. **Credible** (full-time), Feb 2020 to Jan 2023, Raleigh-Durham area.
   - Software Engineer II: Jul 2022 to Jan 2023
   - Software Engineer: Feb 2020 to Jul 2022
   - No description available. Show titles and dates only.
4. **Software Engineer Intern**, NextGen Healthcare, Jun 2019 to Nov 2019. Cary, NC.
   - Front-end development of the Medfusion Administration tool using React, Redux and Sass, helping client-relations and sales teams keep records of the organization's associated hospitals and clients.
   - Built core features: creating and fetching Appointment Settings, plus a Customer Interaction API integration.
   - Worked to coding standards and design principles; used JIRA and Bitbucket; Agile with pair programming and code reviews (Crucible); used SwaggerUI to explore API resources.
5. **Undergraduate Teaching Assistant, Department of Mathematics**, University of North Carolina at Charlotte, Jan 2019 to May 2019.
   - Oversaw assignments and class tests, graded them, and assisted the professor with coursework.
6. **Software Development Intern**, Lintel Technologies Pvt Ltd, Dec 2017 to May 2018. Greater Ahmedabad area.
   - Built a Contact Center Dialer web application for customer relationship management using Django, Twisted and PostgreSQL.
   - Integrated telephony agent and admin databases for synchronization.
   - Researched Linux server deployment and maintenance.
7. **Data Mining Intern**, MobileFirst Applications, May 2017 to Aug 2017. Greater Ahmedabad area.
   - Built a text-mining tool to extract information from job portals.
   - Built a data-mining tool to predict Tokyo Stock Exchange daily prices using machine learning and NLP.

Rewrite these bullets in clean, concise, human language, but keep the meaning exactly.

### Education
- University of North Carolina at Charlotte: Master of Science, Computer Science, 2018 to 2019
- LDRP Institute of Technology & Research, Gujarat Technological University: Bachelor of Engineering, Computer Engineering, 2014 to 2018

### Skills (only those evidenced above)
React, Redux, Sass, Django, Python, PostgreSQL, Web Scraping, Machine Learning, Natural Language Processing, Agile, JIRA, Bitbucket, SwaggerUI. Group them sensibly (e.g. Frontend / Backend & Data / Ways of working).

### Testimonial (optional, behind a TODO)
Cass Baltz, Software Engineer (colleague at Credible), wrote on LinkedIn that Amal was great to work with, had an excellent attitude, and was always willing to take on extra work and help teammates. Use a short paraphrase with attribution, and add a `TODO:` comment to confirm Cass is OK with it being shown before launch.

### Off the clock (playful section)
- Sports Amal plays: volleyball, pickleball, cricket, soccer
- Loves board games
- Make this section the most playful part of the site (see design ideas). Do not add any other hobbies or facts.

### Projects
- Amal will add real projects later. Build the Projects section as a clean, designed slot with a friendly "Case studies coming soon" state and a `TODO:` comment. Do NOT fabricate projects. Structure the code so adding a project means adding one object to a data file.

## Site structure (single page, anchored sections)

1. **Hero**: name, role, warm one-liner, links (GitHub, LinkedIn, email). One clear call to action.
2. **About**: short bio plus education.
3. **Experience**: the career path (see design ideas), newest first.
4. **Skills**: grouped, visually distinct, not a boring list.
5. **Projects**: designed placeholder slot (see above).
6. **Off the clock**: sports and board games.
7. **Contact**: email link plus GitHub and LinkedIn. No form.

Keep content in a single data file (e.g. `src/data/content.js`) so Amal can edit text without touching components.

## Design direction

**Feeling:** fresh, friendly, playful, artistic, and clearly professional. Think a well-designed indie studio site, not a template. Crafted, human, a little surprising.

**Color (define as CSS custom properties, both light and dark themes):**
- Light mode: white base, deep teal-black ink, teal (`#0f766e`) for buttons and links, turquoise (`#2dd4bf`) and aqua (`#99f6e4`) for decorative fills.
- Dark mode: near-black base (`#050b0b`), mint-white ink, bright turquoise for buttons and links, teal shades for decoration.
- Teal, turquoise and aqua only; no warm accent colors. Define everything as tokens in `src/styles/_tokens.scss`.
- Every text/background pair must meet WCAG AA contrast.

**Typography:**
- A characterful display face for headings (a soft or variable serif such as Fraunces works well) paired with a clean, friendly sans for body (e.g. DM Sans or Inter).
- Fluid type scale using `clamp()`. Generous line-height and whitespace.

**Shape and texture:** rounded corners, soft shadows, subtle paper or grain texture, hand-drawn-feeling shapes or stickers used sparingly. Avoid harsh borders and generic gradients.

**Playful UX ideas (pick the best, execute them well, don't overdo it):**
- Experience shown as a winding "board game path" or trail with milestone tokens, one stop per role.
- A small interactive dice roll or "meeple" element that reacts to hover or click (e.g. rolling the dice shows a random fun fact from the allowed content only).
- Off-the-clock section as a "game shelf" or scoreboard: volleyball, pickleball, cricket, soccer, board games each as a tactile card with a tiny animation.
- Subtle scroll-based reveals, magnetic or bouncy hover states, a friendly custom cursor or hover effect on links.
- Light/dark toggle with a delightful transition (e.g. sun and moon that morph).
- Everything animated must respect `prefers-reduced-motion`.

## Quality rules

- **Mobile-first.** Must look great from 360px wide up. No horizontal scroll.
- **Accessibility:** semantic HTML landmarks, one `h1`, logical heading order, visible focus states, keyboard-usable everything, alt text, `aria-label`s on icon links, skip-to-content link.
- **Performance:** target Lighthouse 95+ in all categories. Optimize images (WebP/AVIF, sized properly), lazy-load below the fold, no layout shift.
- **SEO and sharing:** proper `<title>`, meta description, Open Graph tags, favicon, `robots.txt`, and the 1200x630 share card (`public/og-image.jpg`). No Twitter-specific tags, by Amal's choice.
- **Themes:** respect `prefers-color-scheme` by default, plus a manual toggle that persists (localStorage is fine for a static site).
- **No secrets** in the repo (it is public). No analytics or tracking scripts for now.

## Working agreement

- Build in small steps, one section at a time. After each section: run `npm run build` to check it passes, then commit with a clear message (e.g. `feat: add hero section`).
- Run the dev server (`npm run dev`) and check the result at mobile and desktop widths before moving on.
- Keep components small and readable. Style with Sass modules or well-named partials plus design tokens; no inline style sprawl.
- Ask before adding any new dependency.
- If a design decision is ambiguous, pick the friendlier, more playful option and note it in the commit message.
- Do not rewrite Amal's facts. If unsure about a fact, leave a `TODO:` comment.

## Deployment notes

- Cloudflare Pages, connected to the GitHub repo. Build command: `npm run build`. Output directory: `dist`.
- If Pages is unavailable in the dashboard, fall back to Workers with static assets: add a `wrangler.jsonc` pointing assets at `./dist`.
- Since this is a single-page site with anchor links, no client-side router is needed. Avoid one unless necessary.

## Status

**Done**
- Vite + React + Sass scaffold, design tokens, light and dark themes with a persistent toggle, fonts.
- All seven sections: Hero, About, Experience (winding trail), Skills, Projects (placeholder), Off the clock (game shelf and dice), Contact, plus a footer.
- SEO basics: title, description, Open Graph tags, favicon, `robots.txt`, 1200x630 share card.
- Content lives in `src/data/content.js`.

**Waiting on Amal**
- Add real projects to `projects` in `src/data/content.js`.
- Ask Cass Baltz if the testimonial can be shown, then set `testimonial.approved` to `true`.
- Add a location for the UNC teaching assistant role, or leave it off.
- Decide whether the gym gets its own card in Off the clock.
- Connect the GitHub repo to Cloudflare Pages (build `npm run build`, output `dist`).

**Still to do**
- Measure Lighthouse and fix anything under 95.
- Convert photos to WebP/AVIF; `public/profile_pic-2.jpg` (734 KB) is only used for the share card and can be removed from `public/` once that is not needed.
- Verify every text/background pair meets WCAG AA with a contrast checker.
- Optional: small nav bar, custom cursor.
