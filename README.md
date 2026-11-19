# Academic Personal Website for GitHub Pages (`github.io`)

A clean, modern, zero-dependency personal website designed specifically for academic researchers, PhD candidates, postdocs, and professors. Built with responsive HTML5, modern CSS with Light/Dark themes, and dynamic data rendering via a single configuration file.

![Preview](assets/img/avatar-placeholder.svg)

---

## Key Features

- **Scholarship First**: Interactive publication list with category filters (*All, Conference, Journal, Preprint*), keyword search, and distinction badges (*Oral, Spotlight, Best Paper*).
- **BibTeX & LaTeX Ready**:
  - 1-click **"Copy BibTeX"** modal with automatic clipboard feedback.
  - Collapsible paper abstracts.
  - Native **LaTeX math rendering** powered by KaTeX (e.g., equations like $\mathcal{L}_{reg}$ and $\mathcal{M} \subset \mathbb{R}^d$ render directly in titles and abstracts).
- **Academic Profile Hub**:
  - Badges for **Google Scholar, arXiv, ORCID, GitHub, Twitter/X, LinkedIn, DBLP, and Curriculum Vitae (PDF)**.
  - Research interest cards with topic chips.
  - Chronological news & updates feed.
  - Two-column timeline for Experience and Education.
  - Teaching & mentoring section.
  - Program Committee (PC) reviewing & honors record.
- **Windows 8 style Start screen**: frosted-glass tiles grouped into research, career and connect. Large tiles are live and cycle through your papers, news and positions. Tiles tilt toward where you press, like Windows 8.
- **Dark and light themes**: a black gradient by default and a bright light theme, switched with the toggle at the top right. In light mode every tile changes to a pale frosted version of its colour with deep-toned text. The site follows the visitor's system setting until they choose, then remembers their choice.
- **Section views**: each tile opens a glass panel with a swipeable list of sections across the top. Every section has its own link (for example `/#publications` or `/#experience:edu`), and the browser back button returns to the Start screen.
- **Modern Polish**:
  - Press `/` anywhere to jump to the publication search.
  - Fast load times, zero external build tools, zero npm dependencies.
  - GitHub Pages native out-of-the-box (`.nojekyll` included).

---

## Directory Structure

```text
academic-website/
├── index.html                   # Semantic HTML structure & layout
├── .nojekyll                    # Ensures GitHub Pages serves all assets directly
├── serve.py                     # Local preview server
├── README.md                    # Setup & GitHub Pages guide
└── assets/
    ├── css/
    │   └── style.css            # Colours, typography, layout and components
    ├── js/
    │   ├── content.js           # << YOUR DATA GOES HERE >>
    │   └── main.js              # Tiles, live tiles, section panels, filters, BibTeX, KaTeX
    ├── img/
    │   ├── avatar-placeholder.svg
    │   └── favicon.svg
    └── pdf/
        └── cv-placeholder.pdf   # Replace with your actual CV PDF
```

---

## Quickstart: Local Preview

To preview the website locally on your computer:

```bash
python serve.py
```

This will automatically start a local server and open `http://localhost:8000` in your default browser.

---

## How to Customize Your Content

All personal content is centralized in **`assets/js/content.js`**. You do not need to touch complex HTML to update your information.

### 1. Update Profile & Bio
Open `assets/js/content.js` and edit the `ACADEMIC_PROFILE` object:

```javascript
name: "Your Name",
role: "PhD Candidate / Postdoctoral Researcher",
affiliation: "Your University / Research Lab",
affiliationUrl: "https://your-university.edu",
status: "Available for Academic Roles / Collaborations",
avatar: "assets/img/your-photo.jpg", // Place your headshot in assets/img/
bio: [
  "Your research statement and background...",
  "Your current focus..."
]
```

### 2. Update Social & Academic Links
In `assets/js/content.js`, update the `links` array with your URLs:

```javascript
links: [
  { label: "Google Scholar", icon: "fa-solid fa-graduation-cap", url: "https://scholar.google.com/citations?user=YOUR_ID" },
  { label: "arXiv", icon: "fa-solid fa-book-open", url: "https://arxiv.org/a/your_id" },
  { label: "ORCID", icon: "fa-brands fa-orcid", url: "https://orcid.org/0000-0000-0000-0000" },
  { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/your-username" },
  { label: "Curriculum Vitae", icon: "fa-solid fa-file-pdf", url: "assets/pdf/cv.pdf", isCv: true }
]
```

### 3. Add Publications
Add papers to the `publications` array:

```javascript
{
  id: "author2026title",
  title: "Your Paper Title with LaTeX Support $O(N \\log N)$",
  authors: ["Your Name", "Co-author One", "Co-author Two"],
  venue: "NeurIPS / ICML / CVPR / Journal Name",
  year: 2026,
  type: "conference", // 'conference' | 'journal' | 'preprint'
  badge: "Oral / Spotlight", // or null
  links: {
    pdf: "https://...",
    arxiv: "https://arxiv.org/abs/...",
    code: "https://github.com/...",
    project: "https://..."
  },
  abstract: "Your paper abstract here...",
  bibtex: `@inproceedings{author2026title,
  title     = {Your Paper Title},
  author    = {Author, One and Author, Two},
  booktitle = {Conference},
  year      = {2026}
}`
}








