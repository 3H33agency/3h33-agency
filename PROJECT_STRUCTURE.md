# Project Structure

## Directory Tree

```
3h33-agency/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   ├── artists/route.ts
│   │   │   └── events/route.ts
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ArtistsSection.tsx
│   │   ├── AgencySection.tsx
│   │   ├── N8LifeSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── db.ts
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   └── utils/
│       ├── cn.ts
│       └── constants.ts
├── prisma/
│   └── schema.prisma
├── public/
│   ├── artists/
│   ├── og-image.jpg
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
└── README.md
```

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage entry point |
| `src/app/layout.tsx` | Root layout with metadata |
| `src/components/Hero.tsx` | Hero section with GSAP |
| `prisma/schema.prisma` | Database schema |
| `tailwind.config.ts` | Tailwind theme config |

## Component Hierarchy

```
Layout
├── Navbar (fixed)
├── Hero (full-screen)
├── ArtistsSection (grid)
├── AgencySection (services)
├── N8LifeSection (showcase)
├── ContactSection (form)
└── Footer
```
