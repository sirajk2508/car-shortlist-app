import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Questionnaire() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ budget: 10, type: 'SUV', priority: 'safety' });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: formData });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">What are you looking for?</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Maximum Budget (Lakhs INR): {formData.budget}L</label>
            <input 
              type="range" min="5" max="40" step="0.5"
              value={formData.budget}
              onChange={e => setFormData({...formData, budget: parseFloat(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Preferred Car Type</label>
            <select 
              value={formData.type}
              onChange={e => setFormData({...formData, type: e.target.value})}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Hatchback">Hatchback</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="MUV">MUV</option>
              <option value="EV">Electric (EV)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">What's your top priority?</label>
            <select 
              value={formData.priority}
              onChange={e => setFormData({...formData, priority: e.target.value})}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="safety">Safety (High Ratings)</option>
              <option value="efficiency">Mileage (Fuel Savings)</option>
              <option value="features">User Reviews & Features</option>
            </select>
          </div>

          <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
            Show My Shortlist
          </button>
        </form>
      </div>
    </div>
  );
}
