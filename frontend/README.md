# Auth Frontend (Week 3)

## Project Overview

Auth Frontend is a React + TypeScript application built on top of the Week 2 AuthShield API.

This project demonstrates:

- JWT Authentication
- Refresh Token Flow
- Protected Routes
- Role-Based Access Control (RBAC)
- React Query Server State Management
- Zustand Client State Management
- Optimistic Updates with Rollback
- Feature-Based Folder Structure
- TypeScript

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- React Router DOM
- TanStack Query
- Zustand
- Axios
- React Hook Form
- Zod
- React Hot Toast

## Backend

Consumes the Week 2 AuthShield API.

---

# Features

## Authentication

- User Registration
- User Login
- Access Token Handling
- Refresh Token Handling
- Logout
- Session Persistence

## Authorization

- Protected Routes
- Admin Only Routes
- Role Based Access Control

## User Features

- Dashboard
- Profile Page
- Profile Update

## Admin Features

- Users Management
- Analytics Dashboard
- Role Updates

## React Query

- Data Fetching
- Caching
- Query Invalidation
- Mutations
- Optimistic Updates

---

# Authentication Flow

## Login

User submits:

```json
{
  "email": "user@gmail.com",
  "password": "password123"
}
```

Backend returns:

```json
{
  "accessToken": "...",
  "refreshToken": "...",
  "user": {}
}
```

Frontend:

1. Stores refresh token.
2. Stores access token in Zustand.
3. Stores user information.
4. Redirects to dashboard.

---

## Refresh Token Flow

When access token expires:

1. Axios interceptor catches 401.
2. Refresh endpoint is called.
3. New access token is generated.
4. Original request is retried.

Benefits:

- Better security.
- Better user experience.
- No forced logout every few minutes.

---

## Logout Flow

1. Refresh token sent to backend.
2. Refresh token invalidated.
3. Zustand state cleared.
4. Local storage cleared.
5. Redirect to login.

---

# Routing

## Public Routes

```txt
/login
/register
```

## Protected Routes

```txt
/
/profile
```

## Admin Routes

```txt
/admin/users
/admin/analytics
```

---

# Protected Route

Responsibilities:

- Verify user exists.
- Redirect unauthenticated users.
- Verify role permissions.
- Prevent unauthorized access.

Example:

```tsx
<ProtectedRoute role="ADMIN">
  <UsersPage />
</ProtectedRoute>
```

---

# State Management

## Zustand

Used only for:

- Current User
- Access Token
- Login State

Example State:

```ts
{
  user,
  accessToken
}
```

Why Zustand?

- Lightweight
- Minimal boilerplate
- Easier than Redux

---

## React Query

Used for all server state.

Examples:

```txt
Profile
Users
Analytics
Role Stats
Signup Stats
```

Benefits:

- Caching
- Background Refetching
- Request Deduplication
- Automatic Loading States

---

# Optimistic Update

Implemented in:

```txt
PATCH /users/:id/role
```

Process:

1. UI updates immediately.
2. Request sent to server.
3. If successful:
   - Keep new state.
4. If failed:
   - Rollback previous state.

Benefits:

- Fast UI
- Better UX

---

# API Endpoints

## Auth

```txt
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
```

## User

```txt
GET /users/profile
PATCH /users/profile
```

## Admin

```txt
GET /users
PATCH /users/:id/role

GET /users/analytics
GET /users/stats/signups
GET /users/stats/roles
```

---

# Folder Breakdown

## auth

Contains:

```txt
hooks/
pages/
schemas/
store/
```

Responsibilities:

- Login
- Register
- Logout
- Refresh Token
- Auth State

---

## dashboard

Contains dashboard page.

Responsibilities:

- Welcome screen
- User information

---

## profile

Responsibilities:

- Fetch profile
- Update profile
- React Query integration

---

## admin

Responsibilities:

- Manage users
- Update roles
- Analytics

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build Project

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

---

# Environment Variables

```env
VITE_API_URL=http://localhost:5000/api
```

Example:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

# Learning Outcomes

This project demonstrates understanding of:

- React Fundamentals
- React Router
- Authentication
- Authorization
- JWT
- Refresh Tokens
- Zustand
- TanStack Query
- Optimistic Updates
- TypeScript
- Feature Based Architecture
- API Integration

---

# Week 3 Requirements Mapping

| Requirement | Implemented |
|------------|------------|
| React Frontend | Yes |
| Week 2 API Integration | Yes |
| Login | Yes |
| Token Refresh | Yes |
| Logout | Yes |
| Protected Routes | Yes |
| React Query | Yes |
| Optimistic Update | Yes |
| Rollback | Yes |
| RBAC | Yes |

---

# Author

Muhammad Jawad Saeed

Week 3 Project Submission

Auth Frontend
