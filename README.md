# The Day of Love

A romantic AI-powered love letter generator built with React and Firebase, featuring user authentication, letter creation with Google Gemini AI, and a dashboard for managing letters.

## Features

- **AI love letters**: Generate personalized love letters using Google Gemini AI
- **Firebase authentication**: Email/password and Google sign-in
- **JWT authentication**: Token-based auth with refresh flow via backend
- **Dashboard**: Sidebar-based layout for managing letters and profile
- **Like system**: Like/unlike letters from other users
- **Responsive UI**: shadcn/ui components with Tailwind CSS
- **Protected routes**: Auth-guarded pages with automatic redirect

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 6 |
| Routing | React Router DOM 7 |
| Auth | Firebase 11 + JWT |
| HTTP | Axios with interceptors |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix) |
| UI | Lucide React, React Icons |

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env` file with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Project Structure

```
src/
├── components/ui/    # shadcn/ui components (15+ primitives)
├── Firebase/         # Firebase configuration
├── Hooks/            # Custom hooks (useAuth, useAxiosSecure, useAxiosPublic)
├── Layout/           # Main layout
├── Pages/
│   ├── Auth/         # Login, Signup
│   ├── Dashboard/    # Dashboard with sidebar
│   ├── Home/         # Home page
│   └── LoveLetter/   # AI letter generator
├── Providers/        # AuthProvider context
├── lib/              # Utilities
└── routes/           # Route definitions
```

## API

Connects to the [the-day-of-love-server](https://github.com/tarekul42/the-day-of-love-server) backend with Gemini AI integration.
