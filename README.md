# Mohammad Shaiful Alam — Freelance Portfolio

Modern, polished, fully responsive single-page portfolio built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**.

## Tech stack

- Vite + React 18
- Tailwind CSS (dark/light mode, `dark` class strategy)
- Framer Motion (scroll reveal, hover lifts, count-up stats, typewriter)
- lucide-react (icons)

## Folder structure

```
src/
  main.jsx              # Entry point (wraps App in ThemeProvider)
  App.jsx               # Page layout, scroll spy, section orchestration
  index.css             # Tailwind utilities + base styles
  data/portfolio.js     # All text, links, lists (single source of truth)
  hooks/
    useTheme.js         # Dark mode state (localStorage + prefers-color-scheme)
    useCountUp.js       # Animated count-up on scroll
  components/
    Navbar.jsx          # Sticky nav, hamburger menu, active-section highlight
    ThemeToggle.jsx     # Dark/light mode toggle
    Hero.jsx            # Hero, typewriter roles, avatar, CTAs, badges
    Avatar.jsx          # Placeholder avatar (DiceBear), swappable via src prop
    Stats.jsx           # Animated count-up statistics
    About.jsx           # Professional summary + objective
    Services.jsx        # 15 service cards with category filter + tag expander
    Tools.jsx           # Platforms & tools marquee
    Strengths.jsx       # Professional strengths cards
    Experience.jsx      # Vertical timeline with profile links
    Education.jsx       # Compact education cards
    Contact.jsx         # Contact cards + mailto contact form
    Footer.jsx          # Copyright + social icons
    WhatsAppFab.jsx     # Floating WhatsApp button
```

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## How to edit content

All copy, links, and lists live in `src/data/portfolio.js`. Edit that file and the
components update automatically — no component changes needed.

## How to swap the avatar

`src/components/Avatar.jsx` accepts a `src` prop. By default it uses a DiceBear
illustrated avatar. To use a real photo:

```jsx
<Avatar src="/images/photo.jpg" alt="Mohammad Shaiful Alam" />
```

Place your image in `public/` and reference it, or import it and pass it as `src`.
The component falls back to an "MS" initials badge if the image fails to load.

## Notes

- The contact form opens a `mailto:` link (no backend).
- Dark mode is persisted in `localStorage` and respects `prefers-color-scheme`.
- Animations respect `prefers-reduced-motion`.
- Target: Lighthouse 90+ on all categories (no heavy images, lazy avatar, system fonts preloaded).
