import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

const Preferences = () => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();
  const [preferences, setPreferences] = useState({
    destination: '',
    duration: '',
    budget: '',
    travelWith: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/trip-details', { state: { preferences } });
  };

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Tell Us About Your Trip</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Where would you like to go?</label>
            <input
              type="text"
              value={preferences.destination}
              onChange={(e) => setPreferences({...preferences, destination: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter destination"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">How many days are you planning to stay?</label>
            <select
              value={preferences.duration}
              onChange={(e) => setPreferences({...preferences, duration: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              required
            >
              <option value="">Select duration</option>
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5">5 days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">What's your budget range?</label>
            <select
              value={preferences.budget}
              onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              required
            >
              <option value="">Select budget</option>
              <option value="budget">Budget</option>
              <option value="moderate">Moderate</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Who are you traveling with?</label>
            <select
              value={preferences.travelWith}
              onChange={(e) => setPreferences({...preferences, travelWith: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              required
            >
              <option value="">Select travel companion</option>
              <option value="solo">Just me</option>
              <option value="couple">A couple</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Create Trip
          </button>
        </form>
      </div>
    </div>
  );
}

export default Preferences;