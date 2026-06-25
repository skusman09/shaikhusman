# Engineering Portfolio

A premium, engineering-focused portfolio built for **Shaikh Mohammed Usman**. 

Designed to communicate engineering maturity, product thinking, backend expertise, and startup experience to recruiters, engineering managers, and technical leads. 

This is not a generic developer portfolio. It is heavily inspired by the design principles of Vercel, Linear, and Stripe—focusing on minimalism, excellent typography, a spacious layout, and high performance.

---

## 🏗 Architecture & Philosophy

The project adheres to strict separation of concerns, implementing a **Lightweight CMS Architecture** without the need for an external database:

```text
Content (Data)  →  UI Components  →  Layouts  →  Pages
```

- **Content Layer (`src/content/`)**: Acts as the single source of truth for all data, text, and configurations. It is fully typed and exported cleanly via `src/content/index.ts`.
- **Component Layer (`src/components/`)**: Strictly presentation-only. Components receive data from the content layer and focus entirely on rendering beautiful, accessible, and responsive interfaces.
- **Layouts & Pages**: Astro is used to assemble the static output, ensuring maximum performance and SEO.

---

## 🛠 Technology Stack

- **Framework:** [Astro](https://astro.build/) (Static Output)
- **UI Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Geist & Inter
- **Deployment:** Cloudflare Pages

---

## 📂 Project Structure

```text
src/
├── components/       # Presentation-only React components (UI elements, Sections)
├── content/          # Lightweight CMS containing all portfolio data (The single source of truth)
├── layouts/          # Astro layout wrappers (PageLayout, BaseLayout)
├── lib/              # Utility functions (e.g., class merging, theme toggling)
├── pages/            # Astro routing (index.astro)
├── styles/           # Global styles and Tailwind v4 configurations
└── types/            # Centralized TypeScript interfaces (portfolio.ts)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository and navigate into the project directory.
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the local development server:
```bash
pnpm dev
```
The site will be available at `http://localhost:4321`.

### Build & Verification

Before deploying, verify the codebase matches all quality standards:

```bash
pnpm lint      # Run ESLint checks
pnpm check     # Run Astro type diagnostics
pnpm build     # Build the static output to the /dist directory
```

---

## 📝 Managing Content

To update the portfolio's text, experience, projects, or links, you **do not** need to edit the UI components. 

Simply navigate to the `src/content/` directory and update the corresponding `.ts` file:
- `experience.ts` - Professional experience and platform evolution.
- `projects.ts` - Personal engineering projects.
- `tech.ts` - Engineering stack and technologies.
- `hero.ts` - Introduction, title, and quick info.
- `seo.ts` - Site metadata for search engines.

All types are strictly defined in `src/types/portfolio.ts` to ensure data integrity.
