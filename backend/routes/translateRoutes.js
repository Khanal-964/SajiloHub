// ============================================
// Translate Routes
// Maps translation API endpoints to controller
// ============================================

const express = require('express');
const router = express.Router();
const translateController = require('../controllers/translateController');

// POST /api/translate — Translate text
router.post('/', translateController.translate);

// GET /api/translate/languages — List supported languages
router.get('/languages', translateController.getLanguages);

// POST /api/translate/detect — Detect language
router.post('/detect', translateController.detect);

module.exports = router;
