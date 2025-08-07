import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import SignupIllustration from '../assets/products/login.svg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, loginWithGoogle, loginWithMicrosoft } = useAuth(); // make sure Microsoft method exists
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch (error) {
      setError('Failed to create account: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError('Failed to sign up with Google: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMicrosoftSignup = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithMicrosoft();
      navigate('/');
    } catch (error) {
      setError('Failed to sign up with Microsoft: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col md:flex-row"
    >
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 lg:px-16 py-12 bg-white">
        <div className="max-w-md w-full space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold text-[#3D52A0] text-center">Join SanchitVerse</h2>
            <p className="mt-2 text-center text-sm text-[#8697C4]">
              “Create. Inspire. Evolve.” — <span className="font-semibold">Sanchit</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-[#7091E6] focus:border-[#7091E6] placeholder-gray-400 text-sm"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-[#7091E6] focus:border-[#7091E6] placeholder-gray-400 text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-[#7091E6] focus:border-[#7091E6] placeholder-gray-400 text-sm"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-[#7091E6] text-white font-semibold rounded-lg shadow-md hover:bg-[#3D52A0] transition duration-300 text-sm"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          {/* Google + Microsoft buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              type="button"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.22 14.85 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>

            <button
              type="button"
              onClick={handleMicrosoftSignup}
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#F25022" d="M1 1h10v10H1z" />
                <path fill="#7FBA00" d="M13 1h10v10H13z" />
                <path fill="#00A4EF" d="M1 13h10v10H1z" />
                <path fill="#FFB900" d="M13 13h10v10H13z" />
              </svg>
              Sign up with Microsoft
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-[#3D52A0] font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex w-1/2 bg-[#F5F6FA] items-center justify-center px-10">
        <div className="text-center">
          <img
            src={SignupIllustration}
            alt="Signup illustration"
            className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto -mt-8 mb-6"
          />
          <h3 className="text-3xl font-bold text-[#3D52A0] mb-2">Unlock Your Digital Potential</h3>
          <p className="text-[#8697C4]">With NeuroBit, productivity is not a task — it’s a lifestyle.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
