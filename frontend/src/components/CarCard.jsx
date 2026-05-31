export default function CarCard({ car, highlight = false }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${highlight ? 'border-blue-500 scale-105' : 'border-transparent'}`}>
      <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{car.make} {car.model}</h3>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">₹{car.price}L</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{car.type} • {car.mileage} kmpl • {car.safetyRating}⭐ Safety</p>
        
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-medium text-gray-700">{car.userRating}</span>
          <span className="text-xs text-gray-400">({car.reviewCount} reviews)</span>
        </div>

        {car.matchScore && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm font-semibold text-blue-600">Match Score: {car.matchScore}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
