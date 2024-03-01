import React from "react";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <br />
        <br />
        <a
          href="/"
          className="mt-6 px-8 py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
