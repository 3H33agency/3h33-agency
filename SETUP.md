# Setup Guide

## 1. Local Development

### Install Dependencies
```bash
npm install
```

### Environment Setup
Copy `.env.example` to `.env.local` and configure:
```
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_API_URL="http://localhost:3000"
CONTACT_EMAIL="booking@3h33agency.fr"
NEXT_PUBLIC_N8LIFE_URL="https://n8life.fr"
```

### Database Setup
```bash
npx prisma generate
npx prisma db push
npx prisma studio
```

### Run Dev Server
```bash
npm run dev
```

## 2. Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Configure domain `3h33agency.fr`
5. Deploy!

## 3. Supabase Database

Create PostgreSQL database on Supabase and copy `DATABASE_URL` to `.env.local`.

## Troubleshooting

See SETUP.md for detailed troubleshooting.
