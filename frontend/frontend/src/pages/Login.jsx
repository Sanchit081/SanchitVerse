import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import LoginIllustration from '../assets/products/login.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle, loginWithMicrosoft } = useAuth(); // Add this if Microsoft login is supported
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError('Failed to log in: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError('Failed to log in with Google: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMicrosoftLogin = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithMicrosoft(); // You must implement this in your AuthContext
      navigate('/');
    } catch (error) {
      setError('Failed to log in with Microsoft: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col md:flex-row bg-white"
    >
      {/* Left: Login Form */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex items-center justify-center px-6 lg:px-16 py-10"
      >
        <div className="max-w-md w-full space-y-6">
          <div className="text-center -mt-4">
            <h2 className="text-3xl font-extrabold text-[#3D52A0]">Welcome to SanchitVerse</h2>
            <p className="mt-1 text-sm text-[#8697C4]">“Create. Inspire. Evolve.” — <span className="font-semibold">Sanchit</span></p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#ADBBDD] rounded-lg bg-[#F8FAFC] placeholder-gray-500 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-[#7091E6] transition"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#ADBBDD] rounded-lg bg-[#F8FAFC] placeholder-gray-500 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-[#7091E6] transition"
              />
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-[#3D52A0] hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#7091E6] text-white rounded-lg font-semibold hover:bg-[#3D52A0] transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow hover:bg-gray-50 transition disabled:opacity-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.22 14.85 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                onClick={handleMicrosoftLogin}
                disabled={loading}
                className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow hover:bg-gray-50 transition disabled:opacity-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" fill="white" />
                  <path d="M11.5 3H3v8.5h8.5V3z" fill="#F25022"/>
                  <path d="M21 3h-8.5v8.5H21V3z" fill="#7FBA00"/>
                  <path d="M11.5 12.5H3V21h8.5v-8.5z" fill="#00A4EF"/>
                  <path d="M21 12.5h-8.5V21H21v-8.5z" fill="#FFB900"/>
                </svg>
                Continue with Microsoft
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-[#3D52A0] font-medium hover:underline">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </motion.div>

      {/* Right: Illustration and Tagline */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex w-1/2 bg-[#F5F6FA] items-center justify-center px-10"
      >
        <div className="text-center">
          <img
            src={LoginIllustration}
            alt="Login illustration"
            className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto -mt-10 mb-4"
          />
          <h3 className="text-3xl font-bold text-[#3D52A0] mb-2">Unlock Your Digital Potential</h3>
          <p className="text-[#8697C4]">With NeuroBit, productivity is not a task — it’s a lifestyle.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
