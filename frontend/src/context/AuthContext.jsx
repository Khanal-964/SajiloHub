// ============================================
// Auth Context — Global authentication state
// Provides user state + auth actions to all components
// ============================================

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  loginUser,
  registerUser,
  googleAuthUser,
  getCurrentUser,
  logoutUser,
} from '../services/authService';

// Create the context
const AuthContext = createContext(null);

/**
 * Custom hook to access auth context.
 * Throws if used outside of <AuthProvider>.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an <AuthProvider>');
  }
  return context;
};

/**
 * AuthProvider — wraps the app to provide global auth state.
 *
 * State:
 *   - user: the currently logged-in user object (or null)
 *   - loading: true while checking for an existing session on mount
 *
 * Actions:
 *   - login(email, password)
 *   - register(fullName, email, password, confirmPassword)
 *   - googleAuth(credential)
 *   - logout()
 *
 * All action functions throw on error so the calling component
 * can catch and display the error message.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // True until initial session check completes

  // ---- Check for existing session on mount ----
  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data.user);
      } catch {
        // No valid session — user stays null
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // ---- Auth Actions ----

  const login = useCallback(async (email, password) => {
    const data = await loginUser({ email, password });
    setUser(data.user);
    return data;
  }, []);

  const register = useCallback(async (fullName, email, password, confirmPassword) => {
    const data = await registerUser({ fullName, email, password, confirmPassword });
    setUser(data.user);
    return data;
  }, []);

  const googleAuth = useCallback(async (credential) => {
    const data = await googleAuthUser({ credential });
    setUser(data.user);
    return data;
  }, []);

  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
  }, []);

  // ---- Provide context value ----
  const value = {
    user,
    loading,
    login,
    register,
    googleAuth,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
