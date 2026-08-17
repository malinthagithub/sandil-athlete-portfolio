# Sandil Hetti Arachchige — Recruit Portfolio

A Next.js + Tailwind CSS v4 recruiting portfolio built from the supplied athlete data.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- HTML5 video (no video library required)

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replace the demo videos

Put the real videos inside `public/media/` and either keep these filenames:

- `demo-pb.mp4` — main 2.01 m PB video
- `demo-junior-national.mp4` — 2.00 m Junior National clip
- `demo-reel.mp4` — competition reel

Or change the paths in `data/athlete.ts`.

The included MP4 files are intentionally obvious demo placeholders.

## Replace / add photos

Current real hero image:

- `public/media/sandil-champion.jpg`

You can add more photos to `public/media/` and create a gallery section later without changing the athlete data structure.

## Update athlete information

Edit only:

`data/athlete.ts`

This contains:
- bio/profile data
- academics
- leadership/experience
- videos
- all competition results

## Transcript link

When the Google Drive or transcript URL is ready, set:

```ts
transcriptUrl: "https://..."
```

inside `data/athlete.ts`.

## Design direction

The portfolio deliberately avoids:
- glassmorphism
- excessive gradients
- animated tickers
- fake statistics
- fake testimonials
- decorative cards everywhere

The visual system is intended to feel like a serious sports editorial/recruiting site.

Fonts:
- Barlow Condensed — display/headings
- Manrope — body text

Palette:
- Ink: `#0d0f12`
- Paper: `#f5f1e8`
- Wine: `#861f32`
- Gold: `#c9a45c`
