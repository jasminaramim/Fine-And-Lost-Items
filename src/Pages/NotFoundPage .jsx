import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2 text-gray-600">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-4 text-lg text-blue-500 hover:underline"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
