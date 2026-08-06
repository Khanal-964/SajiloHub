// ============================================
// Auth Routes
// Maps API endpoints to controller functions
// ============================================

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes (no authentication required)
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/google', authController.googleAuth);
router.post('/logout', authController.logout);

// Protected routes (JWT required)
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
