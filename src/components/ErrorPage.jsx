import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-9xl font-bold text-[#f04336] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
