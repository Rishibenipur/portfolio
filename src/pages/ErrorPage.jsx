const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-800">Oops! Page not found.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
