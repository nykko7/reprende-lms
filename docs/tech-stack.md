# Technology Stack

## Frontend

### Core

- Next.js 15 (App Router)
- React 19
- TypeScript

### UI & Styling

- Shadcn UI
- Radix UI
- Tailwind CSS

### State Management

- Zustand for client state
- React Query for server state
- nuqs for URL state

### Server Actions

- ZSA Actions for type-safe server actions

### AI Integration

- Vercel AI SDK

## Backend

### Core

- Node.js
- TypeScript

### Database

- PostgreSQL
- Drizzle ORM

### Architecture

- Data Access Layer
- Use Cases Layer
- Server Components (RSC)

## Project Structure

```
src/
├── app/             # Routes and UI logic
│   ├── api/         # API routes, webhooks
│   ├── components/  # Shared UI components
│   └── lib/         # Custom libraries and utilities
├── server/          # Server-side code
│   ├── db/          # Database config and schema
│   ├── use-cases/   # Business logic
│   └── data-access/ # Database access functions
├── public/          # Static files
└── styles/          # Global styles
```

## Key Principles

1. Server-First Approach

   - Prefer Server Components
   - Minimize client-side JavaScript
   - Use type-safe server actions

2. State Management

   - Server state with React Query
   - Client state with Zustand
   - URL state with nuqs

3. Database Access
   - Drizzle ORM for type-safe queries
   - Structured data access through use-cases
   - No direct database access from components
