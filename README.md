# Guillermo Basterra - Personal Website

A minimalist personal portfolio website built with Next.js, featuring projects, essays, and YouTube integration.

## Features

- **Minimalist Design**: Monochrome color scheme with serif headings and sans-serif body text
- **Page Transitions**: Smooth cross-fade blur transitions (400-500ms)
- **MDX Essays**: Write essays in MDX with code syntax highlighting
- **YouTube Integration**: Automatically fetches latest videos from YouTube channel
- **Mobile Responsive**: Hamburger menu on mobile, fixed vertical sidebar on desktop
- **SEO Optimized**: Full meta tags, OpenGraph, sitemap, and robots.txt
- **Fast Performance**: Optimized images, code splitting, and static generation

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- YouTube Data API v3 key (optional, fallback data provided)

### Installation

1. Clone the repository or navigate to this directory

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

The `.env.local` file is already configured with YouTube API credentials. If you need to update them:

```bash
YOUTUBE_API_KEY=your_youtube_api_key
YOUTUBE_CHANNEL_ID=willybasterra
```

To get a YouTube API key:
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project or select an existing one
- Enable the YouTube Data API v3
- Create credentials (API key)
- Copy the key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # About page (homepage)
│   ├── projects/            # Projects page
│   ├── essays/              # Essays list and [slug] pages
│   ├── youtube/             # YouTube videos grid
│   ├── contact/             # Contact page
│   ├── api/                 # API routes for essays
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── Navigation.tsx       # Vertical sidebar + mobile menu
│   ├── PageTransition.tsx   # Blur transition wrapper
│   └── ContactOverlay.tsx   # Contact modal (if needed)
├── content/
│   ├── essays/              # MDX essay files
│   │   └── [slug]/
│   │       └── index.mdx
│   └── projects/            # Project data
│       └── projects.json
├── lib/                     # Utility functions
│   ├── mdx.ts              # MDX processing
│   └── youtube.ts          # YouTube API integration
├── public/
│   ├── essays/             # Essay images
│   └── projects/           # Project thumbnails
└── .env.local              # Environment variables
```

## Content Management

### Adding Essays

1. Create a new folder in `content/essays/` with your essay slug:
```bash
mkdir -p content/essays/my-new-essay
```

2. Create an `index.mdx` file with frontmatter:
```mdx
---
title: "My New Essay"
date: "2025-01-15"
updated: "2025-01-16"  # Optional
description: "A brief description for SEO"
---

Your essay content here...

## Code Blocks

\`\`\`javascript
const example = "Code with syntax highlighting";
\`\`\`

## Images

Images go in `/public/essays/my-new-essay/`:
![Alt text](/essays/my-new-essay/image.jpg)
```

3. Add images to `/public/essays/my-new-essay/` if needed

4. The essay will automatically appear on the Essays page

### Adding Projects

Edit `content/projects/projects.json`:

```json
{
  "slug": "project-name",
  "title": "Project Title",
  "description": "Brief description of the project...",
  "thumbnail": "/projects/project-name/thumbnail.jpg",
  "date": "2025-01",
  "links": {
    "live": "https://project-url.com",
    "github": "https://github.com/username/repo"
  }
}
```

Add thumbnails to `/public/projects/project-name/`

### Updating About Page

Edit `app/page.tsx` to customize your bio.

### YouTube Videos

Videos are automatically fetched from the YouTube channel. The page revalidates every hour to show new videos.

If the API fails, it falls back to cached videos defined in `lib/youtube.ts`.

## Customization

### Colors

The monochrome theme is defined in `tailwind.config.ts` and `app/globals.css`.

### Fonts

Fonts are loaded in `app/layout.tsx`:
- **Serif**: Crimson Text (headings)
- **Sans**: Inter (body text)

To change fonts, update the imports in `app/layout.tsx`.

### Navigation Links

Edit `components/Navigation.tsx` to modify menu items, social links, or external links.

### Dithered Overlay

When you have the dithered art file:

1. Add the image to `/public/dithered-overlay.png`
2. Uncomment the overlay section in `app/layout.tsx`:

```tsx
<div className="fixed bottom-0 left-0 right-0 pointer-events-none z-10">
  <img src="/dithered-overlay.png" alt="" className="w-full" />
</div>
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `YOUTUBE_API_KEY`
   - `YOUTUBE_CHANNEL_ID`
4. Deploy

Vercel will automatically detect Next.js and configure everything.

### Other Platforms

This is a standard Next.js app and can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- Fly.io
- Self-hosted with PM2/Docker

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## Accessibility

- Keyboard navigation supported
- ARIA labels for screen readers
- Focus indicators
- Semantic HTML
- Color contrast compliance

## License

This project is for personal use.

## Support

For issues or questions about the codebase, refer to the spec.md file or check the inline code comments.
