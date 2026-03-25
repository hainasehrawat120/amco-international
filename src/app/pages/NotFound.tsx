import { Link } from "react-router";
import { AlertTriangle, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <AlertTriangle className="w-24 h-24 text-orange-600 mx-auto mb-6" />
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          <Home className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
