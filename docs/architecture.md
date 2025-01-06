# Reaprende LMS System Architecture

## Overview

The Reaprende LMS architecture is designed to provide a scalable, secure, and user-friendly platform for course exploration, purchase, and content delivery. This architecture combines frontend, backend, third-party integrations, and database components to deliver a seamless experience for users.

---

## System Components

### 1. **Frontend**

- **Technology:**

  - Framework: Next.js 15 (App Router)
  - Vercel AI SDK for AI features
  - Shadcn UI and Radix UI for components
  - Tailwind CSS for styling
  - Zustand for state management
  - React Query for server state
  - ZSA Actions for type-safe server actions

- **Responsibilities:**

  - User interface for the website and application.
  - Responsive design for desktop and mobile users.
  - Integration with backend APIs for dynamic content.
  - Authentication (login, registration, password reset).

---

### 2. **Backend**

- **Technology:**

  - Framework: Node.js
  - ORM: Drizzle ORM with PostgreSQL
  - Type-safe database operations
  - Structured schema management

- **Responsibilities:**

  - Business logic and API endpoints.
  - User management (registration, authentication, role-based access).
  - Course management (CRUD operations for courses, modules, and lessons).
  - Payment processing integration with MercadoPago.
  - Email communication using Resend API.

---

### 3. **Database**

- **Technology:** PostgreSQL

- **now** 4. **Third-Party Integrations**

* **Zoom API:**

  - Scheduling and hosting live online classes.
  - Recording sessions and providing playback links.

* **MercadoPago API:**

  - Secure payment gateway for course purchases.
  - Support for modular payments, full course payments, and subscriptions.

* **Resend API:**

  - Automated email delivery for:
    - Purchase confirmations.
    - Course details and Zoom links.
    - Notifications and reminders.

---

### 5. **Hosting & Deployment**

- **Frontend Hosting:** Vercel (for seamless Next.js deployment).

- **Backend Hosting:**

  - Cloud provider (e.g., AWS, DigitalOcean) for Node.js server.
  - PostgreSQL database hosting.

- **CI/CD Pipeline:** GitHub Actions for automated testing, building, and deployment.

---

## Data Flow

1. **Client Layer:**

   - Server Components (RSC) as default
   - Minimal 'use client' directives
   - Suspense boundaries for loading states

2. **Server Layer:**

   - Type-safe server actions with ZSA
   - Structured data access through use-cases
   - Direct database access restricted to data-access layer

3. **User Interaction:**

   - Users browse courses on the frontend and initiate purchases.
   - Authentication ensures secure access to user-specific content.

4. **Payment Processing:**

   - User selects a course and proceeds to payment via MercadoPago.
   - Payment status is verified and recorded in the database.

5. **Content Delivery:**

   - For live classes:
     - Backend schedules sessions via Zoom API.
     - Resend sends the meeting link to the user.
   - For recorded classes:
     - User accesses video playback links directly via the frontend.

6. **Email Communication:**

   - Resend handles purchase confirmations and notifications.

7. **Admin Interaction:**

   - Admins manage courses, users, and transactions via the admin dashboard.
   - Analytics are generated for user engagement and sales performance.

---

## Scalability Considerations

1. **Horizontal Scaling:**

   - Frontend can scale with Vercel’s serverless architecture.
   - Backend can use load balancers and containerized deployments.

2. **Database Optimization:**

   - Indexing for frequently queried fields (e.g., user IDs, course IDs).
   - Partitioning large tables for better performance.

3. **Caching:**

   - Use of CDN for static assets.
   - Backend caching for frequently accessed data (e.g., course catalog).

---

## Security Measures

1. **Authentication & Authorization:**

   - Secure user authentication (e.g., JWT tokens).
   - Role-based access control for students and admins.

2. **Data Protection:**

   - Encryption for sensitive data in transit (HTTPS) and at rest.
   - Regular database backups.

3. **Payment Security:**

   - PCI-compliant payment gateway (MercadoPago).

4. **API Security:**

   - Rate limiting and IP whitelisting for third-party integrations.

---

## Conclusion

The Reaprende LMS architecture leverages modern technologies and integrations to deliver a robust, secure, and user-friendly platform. Its modular design ensures scalability, making it adaptable to future needs and growing user demand.
