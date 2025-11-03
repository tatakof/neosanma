# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimalistic Next.js 15 blog for writing in markdown. Focused on simplicity with a lowercase design aesthetic.

## Development Commands

```bash
# Development server (uses Turbopack)
npm run dev

# Production build
npm run build

# Run production server
npm start

# Linting
npm run lint
```

## Architecture

### Framework & Core Technologies
- **Next.js 15** with App Router and React Server Components
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with custom design tokens in `src/app/globals.css`
- Path alias: `@/*` maps to `./src/*`

### Content Management
- Blog posts are **markdown files** stored in `content/posts/`
- Posts use frontmatter with fields: `title`, `date`, `excerpt`
- Post processing utilities in `src/lib/posts.ts`:
  - `getAllPostsMeta()` - Get all post metadata sorted by date
  - `getPostBySlug(slug)` - Get single post with rendered HTML content
  - Uses `gray-matter` for frontmatter parsing and `remark` + `remark-html` for markdown rendering

### Directory Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage with SVG wordmark
│   ├── layout.tsx    # Root layout with navigation
│   ├── blog/         # Blog listing and [slug] routes
│   └── about/        # About page
├── components/ui/    # Minimal UI components
├── lib/              # Utility functions
│   ├── posts.ts      # Blog post utilities
│   └── utils.ts      # cn() function for className merging
└── hooks/            # React hooks
```

## Design System
- Custom CSS variables in globals.css with light/dark theme support
- Uses OKLCH color space for colors
- Custom font configuration: Roboto (sans) and Roboto Mono (monospace)
- Consistent lowercase text treatment across the site
- Custom radius tokens from `--radius-sm` to `--radius-xl`

## Important Notes
- Blog routes use static export (`force-static`)
- Remote images allowed from all HTTPS hosts
- Next.js error overlays are hidden with CSS
