import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  const handleGetStarted = () => {
    navigate('/preferences');
  };

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Plane className="mx-auto h-16 w-16 text-purple-600" />
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Your Journey Begins Here</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Plan Your Perfect Trip
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Create personalized travel itineraries, discover amazing destinations, and make your dream vacation a reality.
            </p>
            <div className="mt-10">
              <button
                onClick={handleGetStarted}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Personalized Itineraries</h3>
              <p className="text-gray-600 dark:text-gray-400">Create custom travel plans tailored to your preferences and interests.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-400">Get AI-powered suggestions for destinations, activities, and accommodations.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Detailed Planning</h3>
              <p className="text-gray-600 dark:text-gray-400">Organize your trip day by day with our intuitive planning tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;