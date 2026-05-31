import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CarCard from '../components/CarCard';

export default function Results() {
  const { state } = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/recommend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(data => {
      setResults(data);
      setLoading(false);
    });
  }, [state]);

  if (loading) return <div className="p-20 text-center">Analyzing the best value for you...</div>;

  if (results && results.topMatches.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">No Recommendations Found</h2>
        <p className="text-gray-600 mb-8">We couldn't find any cars matching your specific criteria. Try adjusting your budget or selecting a different car type.</p>
        <Link to="/questionnaire" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md">
          ← Adjust My Preferences
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Expert Recommendations</h2>
        {results?.insight && (
          <div className="max-w-2xl mx-auto p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100 italic">
            " {results.insight.reason} "
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {results?.topMatches.map((car, idx) => (
          <div key={car.id} className="relative">
            {idx === 0 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">VALUE LEADER</span>}
            <CarCard car={car} highlight={idx === 0} />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/questionnaire" className="text-blue-600 font-medium hover:underline">
          ← Adjust my preferences
        </Link>
      </div>
    </div>
  );
}
