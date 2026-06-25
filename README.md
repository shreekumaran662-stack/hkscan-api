# HKscan

HKscan is a **full-stack mobile + web AI memory and scanning application** inspired by the workflow and product category you described, but fully branded and structured as **HKscan**.

This repo is built as a **production-oriented monorepo scaffold** with:

- **Universal frontend**: Expo + React Native (iOS, Android, Web)
- **Backend API**: Node.js + Express + TypeScript
- **Database layer**: PostgreSQL via Prisma schema
- **AI layer**: OpenAI-compatible service abstraction with demo fallback
- **OCR layer**: Tesseract-first service abstraction with room for Google Vision
- **Storage layer**: AWS S3-style upload abstraction with local/demo fallback
- **Auth layer**: Email auth implemented + Google/Apple provider-ready structure
- **Memory intelligence**: timeline, semantic search, auto-tagging, contextual chat

## What is included

### Frontend
- Sign in / sign up flow
- Premium dashboard with search, recent scans, memories, and sync status
- Semantic search screen
- Timeline/history screen
- Scan + OCR upload screen
- AI chat screen
- Memory detail screen
- Settings with theme toggle
- Light + dark mode foundation
- Works as a single codebase for mobile and web via Expo

### Backend
- Auth endpoints
- Memory CRUD + timeline endpoints
- Semantic search endpoint
- AI chat endpoint with contextual memory recall
- OCR scanning endpoint
- File upload endpoint
- Notification/reminder endpoints
- Demo mode so the API can run without external services during early development

### Data model
- Users
- Memories
- Conversations / messages
- Files / scans
- Tags
- Reminders
- Notification records

## Chosen defaults

Because you asked for a complete build direction and did not lock the optional stack choices, I used these defaults:

- **Frontend**: React Native with Expo (mobile + web from one codebase)
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Prisma
- **AI**: OpenAI-compatible API abstraction
- **OCR**: Tesseract.js with optional Google Vision upgrade path
- **Cloud storage**: AWS S3-compatible abstraction

## Current delivery state

This is a **strong production-ready scaffold / MVP foundation** with real architecture, routes, screens, schemas, and service boundaries.

Some integrations are implemented with **demo-safe fallbacks** so the app structure is usable immediately even without live API keys.

## Project structure

- `apps/client` — Expo React Native app for Android, iOS, and Web
- `apps/api` — Express API and service layer
- `packages/shared` — shared types and demo data
- `docs` — architecture and rollout notes

## Quick start

### 1) Install dependencies
```bash
npm install
```

### 2) Start PostgreSQL (optional for production mode)
```bash
docker compose up -d
```

### 3) Copy environment file
```bash
cp .env.example .env
```

### 4) Run API
```bash
npm run dev:api
```

### 5) Run mobile/web app
```bash
npm run dev:client
```

## Main scripts

```bash
npm run dev:api
npm run dev:client
npm run lint
npm run typecheck
```

## Demo mode

By default, the API can run in **demo mode**. In this mode:
- in-memory sample data is available
- auth still works using JWT
- search and chat have fallback behavior
- OCR and uploads return safe mock/demo responses when credentials are missing

## Deployment

Generic self-host deployment files are included:
- `apps/api/Dockerfile`
- `apps/client/Dockerfile`
- `deploy/docker-compose.prod.yml`
- `docs/deploy-any-server.md`

If you deploy to your own server, the default URLs will be:
- Web: `http://YOUR_SERVER_IP:3000`
- API: `http://YOUR_SERVER_IP:4000`

## Notes

- This repo does **not** copy any proprietary MemoriesX branding or private assets.
- It is an **HKscan-branded implementation** of the feature set and workflow you requested.
- Without your hosting access, I can prepare deployment files but I cannot publish a live public URL from inside this workspace.

## Legacy prototype

Your previous native Android starter has been preserved in:
- `HKscan-android-starter/`
