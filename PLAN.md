# Portfolio Implementation Plan

## Tech Stack
- Next.js 16 + React 19 + Tailwind CSS 4
- motion/react (formerly framer-motion) for animations
- clsx + tailwind-merge for cn() utility

## Design Principles
- Minimalistic design with no gradients or glow effects
- Blue accent color (blue-500/600)
- Dark mode support
- Single page scroll layout
- Fade-in animations only (opacity, 200ms, ease-out)

## Dependencies
```bash
pnpm add motion/react clsx tailwind-merge
```

## File Structure
```
app/
  page.tsx          # Main page with all sections
  layout.tsx        # Update metadata
  globals.css       # Add scroll-behavior: smooth
lib/
  utils.ts          # cn() utility
components/ui/
  fade-in.tsx       # Reusable fade-in component
```

## Sections

### Hero Section
- Placeholder image (user to provide)
- Name/tagline
- CTA button: "Let's talk" (scrolls to Contact)
- Fade-in animation

### Experience Section
- Responsive card grid (1 col mobile, 2-3 col desktop)
- Each card: role, company, date, description
- Staggered fade-in animations

### Work Section
- Single column layout (one project per row)
- Each project:
  - Image on top
  - Title and description below
  - Tech stack as colored pills (blue-100/900)
- Staggered fade-in animations

### Contact Section
- Email link
- Social links
- Minimal design

### Footer
- Navigation: Experience, Work, Contact
- Copyright/name

## UI Constraints
- Use `min-h-dvh` not `h-screen`
- Respect `safe-area-inset` for fixed elements
- Use Tailwind defaults only
- One accent color per view (blue)
- Use `truncate`/`line-clamp` for dense text
- Fixed z-index scale only

## Animation Constraints
- Animate only `opacity` (compositor property)
- Duration: max 200ms
- Easing: `ease-out`
- No layout property animations
- No custom easing curves

## Tech Stack Pills
- Style: `bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full px-3 py-1 text-sm`
- Display tech used in each project
