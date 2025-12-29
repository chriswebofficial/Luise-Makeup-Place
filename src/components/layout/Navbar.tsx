import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

interface Weather {
  temperature: number;
  windspeed: number;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Lagos, Nigeria"); // default location

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          const { latitude, longitude } = coords;

          // Reverse geocode location
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();

            const city: string = data.address.city || data.address.town || data.address.village || "";
            const state: string = data.address.state || "";
            const country: string = data.address.country || "";

            setLocation(
              `${city}${city && state ? ", " : ""}${state}${state && country ? ", " : ""}${country}`
            );
          } catch {
            setLocation("Unknown Location");
          }

          // Fetch weather
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );
            const weatherData: { current_weather: Weather } = await weatherRes.json();
            setWeather(weatherData.current_weather);
          } catch {
            setWeather(null);
          }
        },
        async () => {
          // fallback to Lagos
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true`
            );
            const weatherData: { current_weather: Weather } = await weatherRes.json();
            setWeather(weatherData.current_weather);
          } catch {
            setWeather(null);
          }
        }
      );
    };

    fetchLocationAndWeather();
  }, []);

  // Update time/date every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuSections = ["home", "services", "about", "gallery", "contact"];

  return (
    <nav className="bg-pink-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-600">
            Luise Beauty
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 items-center">
            {menuSections.map((section) => (
              <li key={section}>
                <HashLink
                  smooth
                  to={`/#${section}`}
                  className="capitalize hover:text-pink-600 transition-colors"
                >
                  {section}
                </HashLink>
              </li>
            ))}

            {/* Reviews link */}
            <li>
              <Link
                to="/reviews"
                className="capitalize hover:text-pink-600 transition-colors"
              >
                Reviews
              </Link>
            </li>

            {/* Weather + Time/Date */}
            <li className="ml-6 flex gap-2 items-center text-sm text-gray-700 bg-white/50 px-3 py-1 rounded-lg">
              {weather && <>🌦️ {Math.round(weather.temperature)}°C</>}
              <span>📍 {location}</span>
              <span>🕒 {time}</span>
              <span>📅 {date}</span>
            </li>
          </ul>

          {/* Desktop Book Now */}
          <div className="hidden md:flex gap-4">
            <Link
              to="/booking"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-100 p-4 space-y-2">
          {menuSections.map((section) => (
            <HashLink
              key={section}
              smooth
              to={`/#${section}`}
              onClick={() => setIsOpen(false)}
              className="block capitalize hover:text-pink-600 transition-colors"
            >
              {section}
            </HashLink>
          ))}

          {/* Reviews link */}
          <Link
            to="/reviews"
            onClick={() => setIsOpen(false)}
            className="block capitalize hover:text-pink-600 transition-colors"
          >
            Reviews
          </Link>

          {/* Weather + Time/Date */}
          <div className="flex flex-col gap-1 text-gray-700 text-sm mt-2 bg-white/50 p-2 rounded-lg">
            {weather && <>🌦️ {Math.round(weather.temperature)}°C</>}
            <span>📍 {location}</span>
            <span>🕒 {time}</span>
            <span>📅 {date}</span>
          </div>

          {/* Mobile Book Now */}
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block bg-pink-600 text-white mt-3 p-2 rounded text-center hover:bg-pink-700 transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
