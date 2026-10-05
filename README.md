# 3H33 Agency - Premium Nightlife Management & Booking

Premium next-generation management and booking platform for DJs and nightlife artists.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger, Lenis
- **Database:** PostgreSQL (Prisma ORM)
- **Backend:** Next.js API Routes
- **Deployment:** Vercel

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Setup database
npx prisma generate
npx prisma db push

# Run dev server
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Database & API utilities
├── types/           # TypeScript types
├── hooks/           # Custom React hooks
└── utils/           # Helper functions

prisma/             # Database schema & migrations
public/             # Static files
```

## Key Features

- **Artists Section:** Showcase roster with GSAP animations
- **Services Grid:** 6 service offerings with hover effects
- **N8LIFE Integration:** Platform showcase with stats and CTAs
- **Contact Form:** Booking requests with validation
- **API Routes:** RESTful endpoints for artists & contact
- **Dark Theme:** Premium dark/minimal aesthetic
- **Responsive:** Mobile-first, fully responsive design
- **Animations:** Scroll-triggered effects with GSAP

## Deployment

Deploy to Vercel:

```bash
git push origin main
```

Then configure domain and environment variables in Vercel dashboard.

## License

© 2026 3h33 Agency. All rights reserved.
