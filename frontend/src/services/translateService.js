// ============================================
// Translate Service — API calls to backend
// All translation-related HTTP requests
// ============================================

import axios from 'axios';

// Pre-configured axios instance for translation endpoints
const api = axios.create({
  baseURL: '/api/translate',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Translate text from source language to target language
 * @param {string} text — the text to translate
 * @param {string} source — source language code (or 'auto' for auto-detect)
 * @param {string} target — target language code
 */
export const translateText = async (text, source, target) => {
  const response = await api.post('/', { text, source, target });
  return response.data;
};

/**
 * Get all supported languages with display names
 */
export const getSupportedLanguages = async () => {
  const response = await api.get('/languages');
  return response.data;
};

/**
 * Detect the language of the given text
 * @param {string} text — text to detect the language of
 */
export const detectLanguage = async (text) => {
  const response = await api.post('/detect', { text });
  return response.data;
};
