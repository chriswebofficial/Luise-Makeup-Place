import { Link } from "react-router-dom";


const Demo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Demo Website
        </h1>

        <p className="text-gray-700 mb-6">
          This website is a <strong>demo project</strong>.
          <br />
          Booking and contact forms are not active.
        </p>

        <p className="text-gray-500 text-sm mb-6">
          If you’re interested in a real website like this,
          please contact the developer.
        </p>

        <Link
          to="/"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Demo;
