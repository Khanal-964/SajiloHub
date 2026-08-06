// ============================================
// SajiloHub — Express Server Entry Point
// ============================================

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

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
