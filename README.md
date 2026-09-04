# SajiloHub — Learn Japanese the Easy Way

A full-stack authentication system (Login, Registration, Google OAuth 2.0) for a Japanese learning platform.

## Tech Stack

| Layer          | Technology                                  |
| -------------- | ------------------------------------------- |
| Frontend       | React 18 + Vite + React Router              |
| Backend        | Node.js + Express.js                        |
| Database       | MySQL                                       |
| Authentication | JWT (httpOnly cookies) + Google OAuth 2.0    |
| Styling        | Vanilla CSS (Japanese-themed design system)  |

## Project Structure

```
SajiloHub/
├── frontend/                        # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── GoogleAuthButton.jsx # Google Sign-In button
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Global auth state
│   │   ├── pages/
│   │   │   ├── Login.jsx            # Login page
│   │   │   ├── Register.jsx         # Registration page
│   │   │   └── Dashboard.jsx        # Dashboard (placeholder)
│   │   ├── services/
│   │   │   └── authService.js       # API calls (axios)
│   │   ├── App.jsx                  # Routes + route guards
│   │   ├── App.css                  # Component styles
│   │   ├── index.css                # Global styles + design tokens
│   │   └── main.jsx                 # Entry point with providers
│   ├── index.html
│   ├── vite.config.js               # Vite + API proxy config
│   ├── package.json
│   └── .env                         # VITE_GOOGLE_CLIENT_ID (local only)
│
├── backend/                         # Express backend
│   ├── config/
│   │   └── db.js                    # MySQL connection pool
│   ├── controllers/
│   │   └── authController.js        # Auth logic (5 endpoints)
│   ├── middleware/
│   │   └── authMiddleware.js        # JWT verification
│   ├── routes/
│   │   └── authRoutes.js            # Route definitions
│   ├── server.js                    # Express entry point
│   ├── package.json
│   └── .env                         # DB + JWT + Google config (local only)
│
├── database/
│   └── schema.sql                    # MySQL table creation
│
└── README.md
```

## Setup Instructions

### Prerequisites

- **Node.js** 18+ and npm
- **MySQL** server running locally
- **Google OAuth 2.0 credentials** (optional, for Google Sign-In)

### 1. Database Setup

```bash
# Log into MySQL and run the schema script
mysql -u root -p < database/schema.sql
```

This creates the `sajilohub` database and `users` table.

### 2. Backend Setup

```bash
cd backend
npm install

# Edit .env with your MySQL credentials and a strong JWT secret
# Then start the server:
npm run dev
```

The backend runs on **http://localhost:5000**.

### 3. Frontend Setup

```bash
cd frontend
npm install

# Edit .env with your Google Client ID (optional)
# Then start the dev server:
npm run dev
```

The frontend runs on **http://localhost:5173** and proxies `/api` requests to the backend.

### 4. Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID (Web application)
3. Add `http://localhost:5173` to **Authorized JavaScript origins**
4. Copy the Client ID to:
   - `frontend/.env` → `VITE_GOOGLE_CLIENT_ID`
   - `backend/.env` → `GOOGLE_CLIENT_ID`

## API Endpoints

| Method | Endpoint             | Auth     | Description                          |
| ------ | -------------------- | -------- | ------------------------------------ |
| POST   | `/api/auth/register` | Public   | Register with email/password         |
| POST   | `/api/auth/login`    | Public   | Login with email/password            |
| POST   | `/api/auth/google`   | Public   | Login/register via Google token      |
| GET    | `/api/auth/me`       | JWT      | Get current user info                |
| POST   | `/api/auth/logout`   | Public   | Clear JWT cookie                     |

## Security

- Passwords hashed with **bcrypt** (10 salt rounds)
- JWT stored in **httpOnly cookies** (not accessible via JavaScript)
- Google tokens verified server-side with **google-auth-library**
- CORS restricted to the frontend origin
- Input validation on both client and server
