============================================================
  HILLARY UCHE ANTHONY — PORTFOLIO WEBSITE
  README & Setup Instructions
============================================================

FOLDER STRUCTURE
----------------
hillary-portfolio/
├── index.html          ← Hero / Home page
├── about.html          ← About page
├── skills.html         ← Skills page
├── projects.html       ← Projects page
├── experience.html     ← Experience page
├── contact.html        ← Contact page
├── css/
│   └── style.css       ← All styles (light + dark themes)
├── js/
│   └── main.js         ← All JavaScript
├── assets/
│   └── cv.pdf          ← ⚠ PLACE YOUR CV HERE (see below)
└── README.txt          ← This file


QUICK START
-----------
1. Open index.html in any modern browser — it works immediately.
2. No build tools, no dependencies, no server required.
3. For best results, use VS Code with the Live Server extension.


WHAT YOU MUST PERSONALISE
--------------------------
Search for these placeholders across all HTML files and replace them:

[ ] CV FILE
    → Place your CV as: assets/cv.pdf
    → The "Download CV" button already links to it.

[ ] GITHUB LINK
    → Replace: https://github.com/hillaryuche
    → With your actual GitHub profile URL.

[ ] EMAIL ADDRESS
    → In contact.html, replace: hello@hillaryuche.dev
    → With your real email address.

[ ] LINKEDIN LINK
    → In contact.html, find the LinkedIn social button.
    → Replace # with your LinkedIn profile URL.

[ ] UNIVERSITY NAME
    → In experience.html, replace: [Your University Name]
    → With your actual university.

[ ] PROJECTS
    → In projects.html, update all 6 project cards:
      - Project name
      - Project description
      - Tech stack tags
      - Live demo links
      - GitHub repo links

[ ] EXPERIENCE
    → In experience.html, update the timeline with your real roles,
      companies, dates, and bullet points.

[ ] STATS (About page)
    → Update data-target values on stat numbers:
      - Years of experience
      - Projects delivered
      - Happy clients

[ ] CERTIFICATIONS
    → In experience.html, update the certification tags.


FEATURES INCLUDED
-----------------
✓ Light / Dark theme toggle (preference saved to localStorage)
✓ Glassy UI cards with backdrop blur
✓ Animated grid background (hero page)
✓ Typewriter animation with multiple rotating phrases
✓ Animated skill progress bars (scroll-triggered)
✓ Animated stat counters (scroll-triggered)
✓ Scroll reveal animations on all sections
✓ 3D tilt effect on project cards (hover)
✓ Contact form → opens WhatsApp with pre-filled message
    (linked to: +2348076550226)
✓ Downloadable CV button
✓ Back to top button
✓ Fully responsive (mobile, tablet, desktop)
✓ Active nav link highlighting per page
✓ Mobile hamburger menu with overlay
✓ Custom gold scrollbar
✓ Smooth page transitions


CUSTOMISING THEME COLOURS
--------------------------
Open css/style.css and find the :root { } block at the top.
Change --accent: #C9A84C; to any colour you like.
The [data-theme="light"] { } block below it controls light mode.


ADDING YOUR REAL DOMAIN
------------------------
If hosting on Vercel, Netlify, or cPanel:
1. Upload the entire folder contents (not the folder itself).
2. Set index.html as the entry point.
3. No build step needed — it's pure HTML/CSS/JS.


PERFORMANCE NOTES
-----------------
- Uses no external dependencies or CDN scripts.
- All animations use CSS transforms (GPU-accelerated).
- Intersection Observer API for scroll animations (no scroll events).
- Theme applied before paint via inline <script> to prevent flash.


MADE WITH ♦ BY CLAUDE
Built to elite standards for Hillary Uche Anthony.
============================================================
