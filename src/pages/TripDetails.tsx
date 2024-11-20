import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';
import { Calendar, MapPin, Star } from 'lucide-react';

interface DayActivity {
  time: string;
  activity: string;
  image: string;
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  price: string;
  pricePerNight: number;
  rating: number;
  image: string;
}

const TripDetails = () => {
  const { theme } = useThemeStore();
  const location = useLocation();
  const navigate = useNavigate();
  const preferences = location.state?.preferences;
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);

  const hotels: Hotel[] = [
    {
      id: "h1",
      name: "Le Grand Hotel",
      location: "16 Rue de la Paix, Paris",
      price: "$250/night",
      pricePerNight: 250,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "h2",
      name: "Maison Boutique",
      location: "8 Avenue Montaigne, Paris",
      price: "$180/night",
      pricePerNight: 180,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const dayActivities: DayActivity[] = [
    {
      time: "6:00 AM - 10:00 AM",
      activity: "Visit the Eiffel Tower at sunrise",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      time: "10:00 AM - 12:00 PM",
      activity: "Explore the Louvre Museum",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      time: "12:00 PM - 4:00 PM",
      activity: "Seine River Cruise & Notre-Dame Cathedral",
      image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?auto=format&fit=crop&q=80&w=1000"
    },
    {
      time: "4:00 PM - 8:00 PM",
      activity: "Shopping at Champs-Élysées",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000"
    },
    {
      time: "8:00 PM - 12:00 AM",
      activity: "Dinner at Montmartre",
      image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const handleBooking = () => {
    const hotel = hotels.find(h => h.id === selectedHotel);
    if (hotel) {
      navigate('/booking-confirmation', {
        state: {
          hotel,
          preferences,
          totalPrice: hotel.pricePerNight * Number(preferences?.duration || 1)
        }
      });
    } else {
      alert('Please select a hotel to continue with booking');
    }
  };

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Trip to {preferences?.destination}</h1>

        {/* Destination Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Destination Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                alt="Paris"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Paris, France</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The City of Light beckons with its unparalleled blend of history, culture, and romance. 
                From iconic landmarks to hidden gems, your {preferences?.duration}-day journey will be filled 
                with unforgettable experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold">Duration</h4>
                  <p>{preferences?.duration} days</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold">Budget</h4>
                  <p className="capitalize">{preferences?.budget}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Hotels */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recommended Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className={`bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                  selectedHotel === hotel.id ? 'ring-2 ring-purple-600' : ''
                }`}
                onClick={() => setSelectedHotel(hotel.id)}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                    <MapPin size={16} className="mr-1" />
                    <p>{hotel.location}</p>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-semibold">{hotel.price}</span>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-500 mr-1" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleBooking}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center"
            >
              <Calendar className="mr-2" />
              Book Now
            </button>
          </div>
        </div>

        {/* Daily Itinerary */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Day 1 Itinerary</h2>
          <div className="space-y-6">
            {dayActivities.map((activity, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <img
                    src={activity.image}
                    alt={activity.activity}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4 md:col-span-2">
                    <h3 className="text-lg font-semibold">{activity.time}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{activity.activity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;