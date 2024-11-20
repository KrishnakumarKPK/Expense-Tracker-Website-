import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

const Login = () => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo credentials check
    if (credentials.email === 'demo@example.com' && credentials.password === 'demo123') {
      navigate('/preferences');
    } else {
      alert('Please use demo credentials - Email: demo@example.com, Password: demo123');
    }
  };

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Sign In</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              placeholder="demo@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              placeholder="demo123"
              required
            />
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            Demo credentials:<br />
            Email: demo@example.com<br />
            Password: demo123
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;