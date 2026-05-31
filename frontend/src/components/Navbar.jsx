import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
        CarShortlist
      </Link>
      
      <Link 
        to="/questionnaire" 
        className="relative inline-flex items-center px-6 py-3 font-bold text-white bg-blue-600 rounded-full group overflow-hidden transition-all hover:bg-blue-700 active:scale-95"
      >
        {/* Animated Glow Effect */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse"></span>
        <span className="relative flex items-center gap-2">
          ✨ Find My Perfect Car
        </span>
      </Link>
    </nav>
  );
}
