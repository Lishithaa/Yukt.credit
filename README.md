# YUKT MVP

Full-stack MVP for yukt.credit with Next.js 14 + Prisma + NextAuth.

## Setup

1. `npm install`
2. `cp .env.example .env.local`
3. Fill env variables (`DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, Google OAuth keys)
4. `npm run prisma:generate`
5. `npm run prisma:migrate -- --name init`
6. `npm run prisma:seed`
7. `npm run dev`

## Demo Accounts

- CA: `ca1@yukt.credit`
- MSME: `msme1@yukt.credit`
- Lender: `hdfc@yukt.credit`
- Admin: `admin@yukt.credit`
- Password for all: `password123`

## Pages

- `/` landing page
- `/ca/dashboard` CA portal
- `/msme/dashboard` MSME portal
- `/lender/dashboard` lender portal
- `/admin` admin portal

## Deployment

- Vercel / Render / DigitalOcean App Platform ready
- Optional Dockerfile included
