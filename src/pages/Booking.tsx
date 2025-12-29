import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, service, date, time } = formData;

    if (!name || !phone || !service || !date || !time) {
      setError(true);
      setShake(true);

      // stop shake animation
      setTimeout(() => setShake(false), 400);
      return;
    }

    setError(false);

    // redirect to demo page
    navigate("/demo");
  };

  return (
    <div className="min-h-screen bg-pink-100 bg-cover bg-center flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white/85 backdrop-blur-md w-full max-w-xl rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-2">
          Book an Appointment
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Secure your makeup session with Lulu Makeup
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            Please fill in all fields
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className={`space-y-4 ${shake ? "animate-shake" : ""}`}
        >
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none
              ${
                error && !formData.name
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-pink-400"
              }`}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none
              ${
                error && !formData.phone
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-pink-400"
              }`}
          />

          {/* Service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none
              ${
                error && !formData.service
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-pink-400"
              }`}
          >
            <option value="">Select Service</option>
            <option value="Bridal Makeup">Bridal Makeup</option>
            <option value="On-Screen Makeup">On-Screen Makeup</option>
            <option value="Fashion Makeup">Fashion Makeup</option>
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none
              ${
                error && !formData.date
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-pink-400"
              }`}
          />

          {/* Time */}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none
              ${
                error && !formData.time
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-pink-400"
              }`}
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
