# Tech Stack

## Context

Global tech stack defaults for Agent OS projects, overridable in project-specific `.agent-os/product/tech-stack.md`.

- App Framework: Next.js 14+ (App Router), Fastify
- Language: TypeScript 5+ / JavaScript ES6+
- Primary Database: MongoDB / Firebase (depends on project)
- ORM/ODM: Prisma (works with MongoDB too)
- JavaScript Framework: React 18+
- Build Tool: Next.js built-in (Turbopack/Webpack)
- Import Strategy: ES6 modules
- Package Manager: npm / pnpm
- Node Version: 20 LTS or 22 LTS
- CSS Framework: TailwindCSS 3.4+
- UI Components: shadcn/ui
- UI Installation: Copy to components folder via npm
- Font Provider: Google Fonts
- Font Loading: Self-hosted (Next.js font optimization)
- Icons: React Icons / Lucide React
- Application Hosting: Vercel (primary) / AWS Amplify
- Hosting Region: Auto (Vercel Edge Network) / Primary region
- Database Hosting: MongoDB Atlas / Firebase / AWS DocumentDB
- Database Backups: Daily automated (recommended - should configure)
- Asset Storage: Vercel Blob Storage / AWS S3 / Google Cloud Storage
- CDN: Vercel Edge Network (automatic) / CloudFront (for AWS)
- Asset Access: Public (general) / Private with signed URLs (for private content)
- CI/CD Platform: Vercel (automatic) / GitHub Actions (optional)
- CI/CD Trigger: Push to main branch (auto deploy)
- Tests: Automatic at build time (optional)
- Production Environment: main branch
- Staging Environment: preview branches (Vercel automatic preview)
