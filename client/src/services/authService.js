// ============================================
// Auth Service — API calls to backend
// All auth-related HTTP requests go through here
// ============================================

import axios from 'axios';

// Create a pre-configured axios instance
// baseURL is '/api/auth' because Vite proxies /api to the backend
const api = axios.create({
  baseURL: '/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Send cookies with every request
});

/**
 * Register a new user with email and password
 * @param {{ fullName: string, email: string, password: string, confirmPassword: string }} data
 */
export const registerUser = async (data) => {
  const response = await api.post('/register', data);
  return response.data;
};

/**
 * Login with email and password
 * @param {{ email: string, password: string }} data
 */
export const loginUser = async (data) => {
  const response = await api.post('/login', data);
  return response.data;
};

/**
 * Login or register via Google OAuth credential
 * @param {{ credential: string }} data — the Google ID token
 */
export const googleAuthUser = async (data) => {
  const response = await api.post('/google', data);
  return response.data;
};

/**
 * Get the currently authenticated user's info
 * Uses the JWT stored in the httpOnly cookie
 */
export const getCurrentUser = async () => {
  const response = await api.get('/me');
  return response.data;
};

/**
 * Log out — clears the httpOnly cookie on the server
 */
export const logoutUser = async () => {
  const response = await api.post('/logout');
  return response.data;
};
