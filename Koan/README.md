# KŌAN Studio

> *Objects stripped to their essence.*

A fictional minimalist furniture brand landing page — designed and built as a frontend portfolio project. The goal was to push beyond template aesthetics into something that felt like a real creative studio's work: editorial, restrained, and intentional.

---

## Preview

![KŌAN Studio](./preview.png)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 |
| Styling | Tailwind CSS v4 |
| Bundler | Vite |
| Animation | GSAP + ScrollTrigger |
| Fonts | Cormorant Garamond, DM Sans |

---

## Features

- **Magnetic cursor** — lerp-based cursor follower with event delegation on interactive elements
- **Scroll-triggered reveals** — GSAP ScrollTrigger animations across every section
- **Editorial type pairing** — Cormorant Garamond (display) + DM Sans (body), set with precision tracking and weight contrast
- **Minimal black-and-white palette** — zero decorative color; contrast carries all the visual weight
- **Collection grid** — card layout with `group-hover` overlay reveals
- **Fully custom sections** — Hero, Collection, About, Craftsmanship, FAQ, Footer

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Collection.jsx
│   ├── About.jsx
│   ├── Craftsmanship.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   └── CursorFollower.jsx
├── App.jsx
└── index.css        # Tailwind v4 @theme tokens
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/koan-studio.git
cd koan-studio

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## Design Decisions

**Why black and white only?**
Color is easy to lean on. Stripping it forces every decision — spacing, type size, weight — to do real work. The constraint made the design stronger.

**Why Cormorant Garamond?**
It's a high-contrast serif with genuine editorial personality. At large sizes it reads like luxury print. At small sizes it stays legible. It earns every pixel.

**Why GSAP over Framer Motion?**
ScrollTrigger gives precise control over when and how elements enter the viewport. For a site where timing is part of the aesthetic, that precision matters.

---

## What I Learned

- Tailwind v4's `@theme` directive for custom design tokens without a config file
- GSAP ScrollTrigger pinning and scrub timing
- Lerp-based cursor tracking with `requestAnimationFrame`
- Editorial layout composition without relying on color or decoration

---

## License

This is a portfolio/concept project. Not affiliated with any real brand.

---

Built by **Yash** — [GitHub](https://github.com/yourusername) · [LinkedIn](https://linkedin.com/in/yourprofile)
