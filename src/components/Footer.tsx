import React from 'react';
import { useThemeStore } from '../store/themeStore';

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About trawell.co</h3>
            <p className="text-sm">Your perfect travel companion for planning unforgettable journeys around the world.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-600">Home</a></li>
              <li><a href="#" className="hover:text-purple-600">Destinations</a></li>
              <li><a href="#" className="hover:text-purple-600">Plan a Trip</a></li>
              <li><a href="#" className="hover:text-purple-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-600">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-600">FAQs</a></li>
              <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-600">Twitter</a>
              <a href="#" className="hover:text-purple-600">Facebook</a>
              <a href="#" className="hover:text-purple-600">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
          <p>&copy; 2024 trawell.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;