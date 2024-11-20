import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Preferences from './pages/Preferences';
import TripDetails from './pages/TripDetails';
import BookingConfirmation from './pages/BookingConfirmation';
import Footer from './components/Footer';

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/trip-details" element={<TripDetails />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;