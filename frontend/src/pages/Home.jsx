import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/cars`)
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load showroom. Please check if the server is running.");
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium">Curating your showroom...</p>
    </div>
  );

  if (error) return (
    <div className="p-10 text-center text-red-600 bg-red-50 rounded-xl max-w-2xl mx-auto mt-10 border border-red-100">
      <p className="font-bold">{error}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Discover Your Next Ride</h1>
        <p className="text-lg text-gray-600">Browse the top-rated cars in India or use our assistant to narrow down your choice.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
