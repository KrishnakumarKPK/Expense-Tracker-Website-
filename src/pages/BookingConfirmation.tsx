import React from 'react';
import { useLocation } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';
import { Check, Calendar, MapPin, Users, Wallet } from 'lucide-react';

const BookingConfirmation = () => {
  const { theme } = useThemeStore();
  const location = useLocation();
  const { hotel, preferences, totalPrice } = location.state || {};

  const bookingDetails = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Duration",
      value: `${preferences?.duration} days`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Destination",
      value: preferences?.destination
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Traveling With",
      value: preferences?.travelWith
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      label: "Total Price",
      value: `$${totalPrice}`
    }
  ];

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
            <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your reservation at {hotel?.name} has been confirmed
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Hotel Details</h2>
            <img
              src={hotel?.image}
              alt={hotel?.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{hotel?.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{hotel?.location}</p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookingDetails.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 text-gray-400 dark:text-gray-500">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>A confirmation email has been sent to your email address.</p>
          <p className="mt-1">For any questions, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;