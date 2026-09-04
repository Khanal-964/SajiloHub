// ============================================
// GoogleAuthButton — "Continue with Google" button
// Uses @react-oauth/google's GoogleLogin component
// ============================================

import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Renders the official Google Sign-In button.
 * On success, sends the ID token to our backend for verification.
 *
 * Props:
 *   - onError(message): callback to display error messages in the parent form
 */
const GoogleAuthButton = ({ onError }) => {
  const { googleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSuccess = async (credentialResponse) => {
    try {
      await googleAuth(credentialResponse.credential);
      navigate(from, { replace: true });
    } catch (err) {
      const message =
        err.response?.data?.message || 'Google authentication failed. Please try again.';
      onError(message);
    }
  };

  const handleError = () => {
    onError('Google Sign-In was cancelled or failed. Please try again.');
  };

  return (
    <div className="google-btn-wrapper">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        theme="outline"
        size="large"
        text="continue_with"
        shape="rectangular"
        locale="en"
      />
    </div>
  );
};

export default GoogleAuthButton;
