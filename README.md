# Charmi Gubbala — Portfolio

A cursor-reactive Next.js portfolio with a full-screen character hero, responsive sections, and a production-ready Vercel structure.

## Stack
- Next.js + React + TypeScript
- Canvas-based cursor tracking
- 64 pre-extracted WebP character frames from the supplied animation
- Responsive CSS and custom cursor
- Ready for Vercel

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Character animation

The hero uses `public/frames/frame-00.webp` through `frame-63.webp`, extracted from the supplied 10-second, 24 FPS animation. The browser preloads the frames and renders a single crisp frame per animation tick based on the cursor direction.

## Resume

The latest resume is included as `public/resume.pdf` and is linked from the hero and footer.

## Deploy to Vercel

Push the project to GitHub, import the repository into Vercel, and use the default Next.js build settings.
