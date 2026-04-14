import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-blue-900">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;