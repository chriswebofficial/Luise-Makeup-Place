import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setShake(true);

      setTimeout(() => setShake(false), 400);
      return;
    }

    setError(false);

    // Redirect to demo page
    navigate("/demo");
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-pink-600">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-2">
            Book a session or connect with us on social media 💄
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Details
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 <span className="font-medium">Location:</span> Lagos, Nigeria
              </p>

              <p>
                📞 <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+2340000000000"
                  className="text-pink-600 hover:underline"
                >
                  +234 000 000 0000
                </a>
              </p>

              <p>
                📧 <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:lulumakeup@gmail.com"
                  className="text-pink-600 hover:underline"
                >
                  lulumakeup@gmail.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Follow Us
              </h3>

              <div className="flex gap-4 text-2xl text-pink-600">
                <FaInstagram />
                <FaWhatsapp />
                <FaFacebook />
                <FaTiktok />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 ${shake ? "animate-shake" : ""}`}
          >
            {error && (
              <p className="text-red-500 text-sm">
                Please fill in all fields
              </p>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none
                ${
                  error && !formData.name
                    ? "border-red-500"
                    : "focus:ring-2 focus:ring-pink-400"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none
                ${
                  error && !formData.email
                    ? "border-red-500"
                    : "focus:ring-2 focus:ring-pink-400"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none
                ${
                  error && !formData.message
                    ? "border-red-500"
                    : "focus:ring-2 focus:ring-pink-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
