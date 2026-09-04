// ============================================
// SajiloHub — Express Server Entry Point
// ============================================

// Load environment variables FIRST — before any other module
// reads process.env (especially config/db.js)
require('dotenv').config();

// --------------------------------------------------
// Startup Validation — fail fast if critical env vars are missing
// --------------------------------------------------
const requiredEnvVars = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
};

const missing = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missing.length > 0) {
  console.error('\n❌ Missing required environment variables:');
  missing.forEach((key) => console.error(`   • ${key}`));
  console.error('\n   Please check your backend/.env file and fill in all required values.');
  console.error('   See .env comments for guidance.\n');
  process.exit(1);
}

// Warn about placeholder values (don't crash — they might be intentional in dev)
if (process.env.DB_PASSWORD === 'your_mysql_password_here') {
  console.warn('\n⚠️  DB_PASSWORD is still set to the placeholder value.');
  console.warn('   Replace it with your actual MySQL password in backend/.env\n');
}

if (process.env.GOOGLE_CLIENT_ID === 'your_google_client_id_here') {
  console.warn('⚠️  GOOGLE_CLIENT_ID is still a placeholder — Google Sign-In will not work.');
  console.warn('   Get your Client ID from https://console.cloud.google.com/apis/credentials\n');
}



// --------------------------------------------------
// Application Setup
// --------------------------------------------------

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const translateRoutes = require('./routes/translateRoutes');

const app = express();

// ---- Middleware ----

// CORS: Allow frontend origin with credentials (cookies)
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

// Parse JSON request bodies
app.use(express.json());

// Parse cookies from incoming requests
app.use(cookieParser());

// ---- Routes ----

// Auth routes: /api/auth/*
app.use('/api/auth', authRoutes);

// Translate routes: /api/translate/*
app.use('/api/translate', translateRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'SajiloHub API',
    timestamp: new Date().toISOString(),
  });
});

// ---- Start Server ----

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 SajiloHub server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api/auth\n`);
});
