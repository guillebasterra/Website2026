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
``

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
