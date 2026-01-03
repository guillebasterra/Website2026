# Personal Website Technical Specification
**Project:** Guillermo Basterra Portfolio Website
**Last Updated:** January 2, 2026 (Revised)

---

## 1. Project Overview

A minimalist personal portfolio website showcasing projects, essays, and creative work. Inspired by [shud.in](https://shud.in/) with emphasis on clean aesthetics, snappy performance, and mobile-first design.

**Core Principles:**
- Minimalist, monochrome design
- SPA-like performance (no page reload delays)
- Mobile responsive as critical priority
- Content-focused with subtle transitions

---

## 2. Site Structure & Pages

### 2.1 Main Navigation Pages

**About** (`/`)
- Single column text layout, aligned top-left
- General bio/introduction
- No page title (h1)
- Includes brief descriptions of other pages/sections
- No profile photo, purely text-focused
- Simple, clean typography
- Dithered art overlay fixed at bottom of page (only on About page)

**Projects** (`/projects`)
- No page title (h1)
- Content aligned top-left
- Vertical list layout with rich previews
- Each project includes:
  - Thumbnail/preview image
  - Project title
  - Short description
  - Date/timeframe
  - External links (live site, GitHub)
- Optimized for scrolling through portfolio

**Essays** (`/essays`)
- No page title (h1)
- Content aligned top-left
- Minimal titles-only list view (index page)
- Shows:
  - Essay title
  - Publication date
  - Reading time estimate (auto-calculated)
- Individual essay pages (`/essays/[slug]`)
  - No page title (h1) - goes straight to content
  - Metadata shown above content (date, reading time)
  - Full MDX content support
  - Code blocks with syntax highlighting
  - Images stored in repo at `/public/essays/[essay-slug]/`
  - No prev/next navigation between essays
  - Update dates displayed if article revised

**Contact** (`/contact`)
- No page title (h1)
- Content aligned top-left
- Full page route (not an overlay)
- Message display:
  > "Shoot me an email: guillebasterra@gmail.com or DM me on X: willybasterra. Reach out, I'd love to talk"
- Simple text layout
- Email as clickable mailto link
- X link opens in new tab

### 2.2 Additional Pages

**404 Page** (`/404`)
- No page title (h1)
- Content aligned top-left
- Custom minimal design
- Simple message with link back to home
- Maintains site aesthetic

---

## 3. Navigation System

### 3.1 Desktop Navigation

**Vertical Menu Bar**
- Fixed position (always visible)
- Left side of screen
- No border separating menu from content
- Text-only labels (no icons)
- Menu items:
  1. About
  2. Projects
  3. Essays
  4. Contact
  5. Links (dropdown)

**Social Icons**
- SVG icons positioned at bottom of vertical menu bar
- Icons for:
  1. X (Twitter)
  2. YouTube
  3. GitHub
  4. LinkedIn
- All open in new tab
- Hover state: subtle color change

**Links Dropdown**
- Expandable menu item in vertical bar
- Contains:
  1. YouTube (external link to channel @willybasterra)
  2. Strava
  3. Goodreads
  4. Resume/CV PDF (download link)
- All external links open in new tab

### 3.2 Mobile Navigation

**Hamburger Menu**
- Icon in top-left corner
- Slides in from left
- Contains same structure as desktop vertical bar
- Overlay/drawer pattern
- Menu items and social icons in same layout

---

## 4. Design System

### 4.1 Color Palette

**Monochrome Minimal**
- Primary: Black (#000000)
- Background: White (#FFFFFF)
- Grays for secondary text and borders
- No accent colors
- Focus on typography and whitespace

### 4.2 Typography

**Font Strategy:**
- **Headings:** Serif font (e.g., Crimson Text, Lora, or similar elegant serif)
- **Body Text:** Sans-serif font (e.g., Inter, Geist, or similar modern sans)
- Clean, readable, professional

**Hierarchy:**
- Clear distinction between heading levels
- Consistent spacing and sizing
- Optimized for readability on all devices

### 4.3 Spacing & Layout

**Responsive Breakpoints:**
- Mobile: < 768px
- Desktop: ≥ 768px
- Two-breakpoint system only

**Page Layout:**
- All content aligned top-left (not centered)
- Padding: 12px (48px) from all edges
- Content starts at same vertical position as menu items
- No page titles (h1 headings) - content starts immediately
- Matches shud.in aesthetic with clean alignment

**Grid System:**
- Flexible, fluid layouts
- Consistent padding/margins
- Vertical rhythm throughout

### 4.4 Visual Elements

**Dithered Art Overlay**
- Fixed PNG at bottom of screen (`/public/dithered-overlay.png`)
- Mountain landscape silhouette in monochrome
- Only visible on About page (not other pages)
- Does not move/scroll with content
- Purely decorative (no interactions)
- Static position, no parallax or animations
- Positioned flush to bottom with no gap
- On desktop: starts after 256px sidebar (left offset)
- Pointer-events disabled to not interfere with interactions

**No Footer**
- Ultra-minimal approach
- All navigation in sidebar
- No copyright or additional links at bottom

---

## 5. Interactions & Animations

### 5.1 Page Transitions

**Cross-Fade with Blur** (using `next-view-transitions`)
- Implemented via View Transitions API
- Outgoing page: blurs (0px → 5px) and fades out (opacity 1 → 0)
- Incoming page: fades in (opacity 0 → 1) and unblurs (5px → 0px)
- Duration: 850ms
- Easing: `cubic-bezier(0.2, 0, 0, 1)`
- No loading indicators or skeleton screens
- Smooth, deliberate feel
- Graceful fallback in unsupported browsers

**Animation Easing:**
- Cubic-bezier easing for smooth deceleration
- Consistent across all transitions

### 5.2 Hover States

**Interactive Elements:**
- Links: Subtle underline on hover
- Menu items: Slight color change
- Project cards: Subtle underline/color shift
- Minimal, refined feedback

**Social Icons:**
- Subtle color transition
- Consistent with overall hover pattern

### 5.3 Mobile Interactions

**Touch Optimization:**
- Tap targets minimum 44x44px
- No hover-dependent functionality
- Touch-friendly spacing

**Hamburger Menu Animation:**
- Smooth slide-in from left
- Backdrop overlay with transparency
- Close on route change or backdrop click

---

## 6. Content Management

### 6.1 Essays (MDX)

**File Structure:**
```
/content/essays/
  essay-slug-1/
    index.mdx
  essay-slug-2/
    index.mdx
  ...

/public/essays/
  essay-slug-1/
    image1.jpg
    image2.png
  essay-slug-2/
    diagram.svg
```

**Frontmatter Schema:**
```yaml
---
title: "Essay Title"
date: "2026-01-02"
updated: "2026-01-15" # optional
description: "Brief description for SEO"
---
```

**MDX Features:**
- Code blocks with syntax highlighting (GitHub Light theme)
- Images via Next.js Image component
- Standard markdown elements
- Custom components as needed

**Metadata Display:**
- Publication date (always shown)
- Updated date (if present)
- Reading time estimate (auto-calculated from word count)

### 6.2 Projects

**Data Structure:**
- Stored in `/content/projects/` as JSON or MDX
- Each project includes:
  ```json
  {
    "title": "Project Name",
    "description": "Short description...",
    "thumbnail": "/projects/project-slug/thumbnail.jpg",
    "date": "2025-12",
    "links": {
      "live": "https://...",
      "github": "https://github.com/..."
    }
  }
  ```

---

## 7. Technical Stack

### 7.1 Framework & Core

**Next.js**
- App Router (Next.js 14+)
- React 18+
- TypeScript
- Run with: `npm run dev`

### 7.2 Styling

**CSS Solution:**
- Tailwind CSS or CSS Modules (developer choice)
- Responsive utilities
- Custom animations for transitions

### 7.3 Content Processing

**MDX:**
- `@next/mdx` or `next-mdx-remote`
- Remark/Rehype plugins:
  - Syntax highlighting (Prism or Shiki with GitHub Light theme)
  - Reading time calculation
  - Image optimization

### 7.4 Image Optimization

**Next.js Image Component**
- Automatic optimization
- Lazy loading
- Responsive srcsets
- WebP/AVIF format generation

### 7.5 APIs & External Services

**No Analytics:**
- No tracking scripts
- Privacy-first approach
- No cookies

**Note:** YouTube integration removed - channel linked externally in Links dropdown instead of dedicated page

---

## 8. SEO & Meta

### 8.1 Meta Tags

**Every Page:**
- Title tag: `{Page Title} - Guillermo Basterra` (or just `Guillermo Basterra` for home)
- Meta description (unique per page)
- Canonical URL
- Language tag

**OpenGraph Tags:**
- `og:title`
- `og:description`
- `og:image` (social share image)
- `og:url`
- `og:type`

**Twitter Cards:**
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

### 8.2 Technical SEO

**Sitemap:**
- Auto-generated `sitemap.xml`
- Include all pages and essays
- Dynamic generation from content files

**Robots.txt:**
- Allow all crawlers
- Reference sitemap

**Structured Data:**
- JSON-LD for Person schema (homepage)
- Article schema for essays
- CreativeWork schema for projects

---

## 9. Performance Requirements

### 9.1 Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### 9.2 Optimization Strategies

**Code Splitting:**
- Route-based code splitting (Next.js default)
- Dynamic imports for heavy components

**Asset Optimization:**
- Image optimization via Next.js Image
- Font optimization (next/font)
- Minimal JavaScript bundle

**Caching:**
- Static generation where possible
- CDN caching for assets
- YouTube API response caching

### 9.3 Bundle Size

- Keep JavaScript bundle minimal
- No heavy dependencies without justification
- Tree-shaking enabled

---

## 10. Accessibility

### 10.1 Standards

**Target:** Basic keyboard navigation + ARIA
- Semantic HTML throughout
- Proper heading hierarchy
- Focus management
- ARIA labels where needed

### 10.2 Keyboard Navigation

**Requirements:**
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order
- Skip to content link
- Escape key closes modals/menus

### 10.3 Screen Readers

**Support:**
- ARIA labels for icon-only elements
- Alt text for all images
- Descriptive link text
- Proper landmark regions

### 10.4 Visual

**Considerations:**
- Sufficient color contrast (4.5:1 for normal text)
- Scalable text (no fixed pixel sizes for body text)
- No color-only information conveyance

---

## 11. Browser & Device Support

### 11.1 Browser Support

**Modern Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari
- Chrome Android

**No Support:**
- IE11
- Legacy browsers

### 11.2 Device Support

**Responsive Design:**
- Mobile phones (320px - 767px)
- Tablets (captured by desktop layout ≥ 768px)
- Desktop (768px+)
- Large desktop (no max-width restriction)

**Testing Targets:**
- iPhone (various sizes)
- Android phones
- iPad
- Standard desktop resolutions

---

## 12. Development Setup

### 12.1 Environment Variables

**File:** `.env.local`

No environment variables required (YouTube API integration removed).

### 12.2 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with ViewTransitions
│   ├── page.tsx           # About page (home)
│   ├── globals.css        # Global styles + transition CSS
│   ├── projects/
│   ├── essays/
│   ├── contact/
│   ├── api/               # API routes
│   │   └── essays/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/            # React components
│   ├── Navigation.tsx
│   └── ContactOverlay.tsx (unused)
├── content/
│   ├── essays/           # MDX essay files
│   └── projects/         # Project data
├── lib/                  # Utility functions
│   └── mdx.ts           # MDX processing
├── public/
│   ├── essays/          # Essay images
│   ├── projects/        # Project thumbnails
│   └── dithered-overlay.png  # Bottom overlay art
├── .env.local          # Environment variables (currently unused)
├── next.config.js
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

### 12.3 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 13. Deployment

### 13.1 Platform

**Vercel (Recommended)**
- Optimal Next.js support
- Zero-config deployment
- Free tier sufficient
- Automatic HTTPS
- CDN included

### 13.2 Environment Variables (Production)

**Vercel Dashboard:**
- No environment variables required (YouTube API integration removed)

### 13.3 Build Configuration

**Static Generation:**
- Pre-render all pages at build time where possible
- Fully static site (no ISR or dynamic routes needed)

### 13.4 Domain

- Custom domain setup via Vercel
- DNS configuration as needed
- SSL automatic

---

## 14. Content Guidelines

### 14.1 Writing Essays

**Process:**
1. Create folder in `/content/essays/[slug]/`
2. Create `index.mdx` with frontmatter
3. Add images to `/public/essays/[slug]/`
4. Reference images with relative paths in MDX
5. Commit and deploy (or preview locally)

**Best Practices:**
- Clear, descriptive titles
- Concise meta descriptions
- Meaningful slugs
- Alt text for all images

### 14.2 Adding Projects

**Process:**
1. Add project data file to `/content/projects/`
2. Add thumbnail to `/public/projects/`
3. Include all required fields
4. Deploy

### 14.3 YouTube

**Automatic:**
- Videos fetch automatically from API
- No manual updates needed
- Fallback list can be updated in code if desired

---

## 15. Future Considerations

### 15.1 Potential Enhancements

**Not in MVP, but possible future additions:**
- RSS feed for essays
- Search functionality
- Newsletter signup
- Comments on essays (via external service)
- Dark mode toggle
- Essay tags/categories with filtering
- More advanced animations

### 15.2 Content Scaling

**If site grows:**
- Consider CMS for non-technical collaborators
- Add pagination to essays list
- Implement search/filtering
- Category/tag system

---

## 16. Link Behavior

### 16.1 Internal vs External

**Internal Links:**
- Same tab navigation
- Use Link from `next-view-transitions` library
- Client-side routing with View Transitions API

**External Links:**
- All external links open in new tab
- `target="_blank"`
- `rel="noopener noreferrer"`

**Examples:**
- Social icons → new tab
- Project live/GitHub links → new tab
- Links dropdown items → new tab
- YouTube video links → new tab
- Internal page navigation → same tab

---

## 17. Error Handling

### 17.1 YouTube API

**Failures:**
- Network errors
- Rate limiting
- Invalid API key

**Handling:**
- Catch errors gracefully
- Fall back to cached/static video list
- Log errors for debugging
- Never show broken state to user

### 17.2 Image Loading

**Missing Images:**
- Graceful degradation
- Placeholder or skip rendering
- Alt text always present

### 17.3 MDX Processing

**Invalid MDX:**
- Build-time validation
- Clear error messages during development
- Fail build if MDX cannot parse

---

## 18. Testing Strategy

### 18.1 Manual Testing

**Required:**
- Test all pages on mobile and desktop
- Verify page transitions
- Check external links
- Keyboard navigation
- Form/contact page

### 18.2 Lighthouse Audits

**Targets:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: 100
- SEO: 100

### 18.3 Cross-Browser

**Test in:**
- Chrome
- Firefox
- Safari
- Mobile Safari
- Chrome Android

---

## 19. Maintenance

### 19.1 Regular Updates

**Dependencies:**
- Keep Next.js updated
- Security patches for dependencies
- Monitor for breaking changes

**Content:**
- Add new essays as written
- Update projects as completed
- Refresh Resume/CV as needed

### 19.2 Monitoring

**No Analytics, but monitor:**
- Vercel deployment status
- Build success/failures
- YouTube API quota usage (Google Cloud Console)
- Server errors (Vercel logs)

---

## 20. Summary Checklist

**Core Features:**
- ✓ Next.js with App Router
- ✓ 4 main pages (About, Projects, Essays, Contact)
- ✓ Vertical navigation bar (desktop) / hamburger (mobile)
- ✓ SVG social icons at bottom of menu bar
- ✓ Links dropdown (includes YouTube, Strava, Goodreads, Resume)
- ✓ MDX essays with syntax highlighting
- ✓ Cross-fade blur page transitions (850ms) via `next-view-transitions`
- ✓ Monochrome color scheme
- ✓ Serif headings / sans body text (Crimson Text / Inter)
- ✓ Dithered art overlay (static, About page only)
- ✓ Mobile responsive (2 breakpoints)
- ✓ Next.js Image optimization
- ✓ Full SEO setup (OG tags, sitemap, robots.txt)
- ✓ Custom 404 page
- ✓ No page titles (h1) - content starts immediately
- ✓ Content aligned top-left (not centered)
- ✓ No border between menu and content
- ✓ No footer
- ✓ No analytics
- ✓ No dark mode
- ✓ External links in new tab
- ✓ Basic keyboard navigation + ARIA
- ✓ Vercel deployment
- ✓ No environment variables required

**Design Specifications:**
- Typography: Crimson Text (serif headings) + Inter (sans body)
- Code highlighting: GitHub Light (monochrome)
- Hover states: Subtle underline/color change
- Page transitions: View Transitions API with cubic-bezier easing
- No loading indicators
- No back-to-top button
- No prev/next essay navigation
- Layout: Top-left aligned, inspired by shud.in

**Content:**
- Essays: titles-only list, reading time, dates, no h1 titles
- Projects: vertical rich previews with thumbnails, links, dates, descriptions
- About: includes brief descriptions of other sections, dithered mountain art at bottom
- Contact: dedicated page with email and X link
- YouTube: external link only (no dedicated page)

---

## Appendix: Design Reference

**Inspiration:**
- Primary: [shud.in](https://shud.in/) - minimal aesthetic, vertical menu, blur transitions, top-left alignment, no page titles
- Social icons: [richardpilnick.com](https://richardpilnick.com) - social placement at bottom of menu

**External Links:**
- YouTube Channel: `@willybasterra` (covers and video essays)
- Strava profile
- Goodreads profile

**Contact Info:**
- Email: guillebasterra@gmail.com
- X (Twitter): @willybasterra

**Key Design Decisions:**
- No page titles (h1) - content starts immediately
- Top-left alignment (not centered)
- No border between navigation and content
- Dithered mountain art only on About page
- 850ms blur transitions for deliberate, smooth feel
- View Transitions API via `next-view-transitions` library

---

**End of Specification**
