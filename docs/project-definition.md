# Reaprende LMS Project Definition

## Overview

Reaprende is an educational platform focused on providing mathematics leveling courses, particularly for high school students preparing for the PAES and adults seeking to restart their academic journey. The platform will consist of a webpage and an application designed to enable students to explore, purchase, and access courses seamlessly. The system will function as a Learning Management System (LMS), integrating e-commerce capabilities and course content delivery.

---

## Objectives

1. **Student Empowerment:** Provide an intuitive platform to explore, purchase, and engage with courses.
2. **Streamlined Management:** Allow course administrators to manage users, content, and analytics efficiently.
3. **Increased Reach:** Enhance accessibility and engagement through a web-based application with mobile optimization.
4. **E-commerce Integration:** Facilitate payments and subscriptions for live and recorded courses.
5. **Community Building:** Foster a supportive learning community through feedback systems and interaction tools.

---

## Core Features

### 1. **Webpage**

#### **Landing Page:**

- **Hero Section:** Highlight flagship courses (e.g., PAES preparation).
- **Key Features:** Benefits, testimonials, and success stories.
- **Call-to-Actions:** Clear CTAs for course exploration and purchase.

#### **Course Catalog:**

- Filter and search options by course type (live, recorded, module-based).
- Course details (description, syllabus, duration, price, testimonials).

#### **E-commerce:**

- Secure payment integration (MercadoPago, Stripe).
- Options for full course purchase, modular payments, and subscriptions.
- Discount code and referral program support.

#### **About & Contact Pages:**

- Information about Reaprende’s mission, instructors, and methods.
- Contact form and FAQ.

### 2. **Application (LMS)**

#### **User Dashboard:**

- Personalized course progress tracking.
- Access to purchased courses (live and recorded).
- Notifications for upcoming classes, deadlines, and offers.

#### **Course Content:**

- Video player for recorded classes.
- Link to Zoom for live online classes.
- Resource downloads (e.g., PAES guides, practice tests).
- Interactive quizzes and assignments.

#### **Community Features:**

- Discussion boards for peer-to-peer interaction.
- Feedback and review system for courses.

#### **Admin Features:**

- User management (registration, progress, and payments).
- Course creation and scheduling tools.
- Analytics dashboard (user engagement, sales, retention).

---

## Technical Requirements

### **Frontend:**

- **Framework:** Next.js.
- **Styling:** Tailwind CSS.
- **UI Components:** Shadcn/ui.

### **Backend:**

- **Framework:** Node.js.
- **Database:** PostgreSQL (Drizzle ORM for schema management).
- **APIs:** Integration with MercadoPago for payments, Zoom for live classes, Resend for emails.

### **Hosting & Deployment:**

- **Hosting:** Vercel.
- **CI/CD:** GitHub Actions.

---

## Target Audience

- **Primary:** High school students (14+ years old) preparing for PAES.
- **Secondary:** Parents, working adults (up to 45 years old) seeking academic growth or career change.

---

## Success Metrics

1. **User Engagement:** Number of active users and time spent on the platform.
2. **Sales Performance:** Total course sales, subscription conversions.
3. **Retention Rates:** Percentage of students completing courses.
4. **Community Interaction:** Participation in discussions, reviews, and feedback.

---

## Roadmap

### **Phase 1: Initial Setup**

- Design wireframes for the webpage and application.
- Develop the course catalog and e-commerce functionality.
- Integrate MercadoPago and Resend to enable course purchases and automated email delivery with course information.
- Set up the admin dashboard for user and course management.

### **Phase 2: Course Delivery**

- Build live class integration and recorded video functionality.
- Develop user dashboards and progress tracking.

### **Phase 3: Community Features**

- Add discussion boards and feedback systems.
- Enhance analytics for administrators.

### **Phase 4: Optimization & Scale**

- Launch a mobile app for iOS and Android.
- Optimize performance and integrate additional payment methods.

---

## Conclusion

Reaprende’s LMS will be a comprehensive platform combining e-commerce, course delivery, and community-building features. By focusing on accessibility, user engagement, and administrative efficiency, the project aims to position Reaprende as a leader in online education for mathematics leveling courses.
