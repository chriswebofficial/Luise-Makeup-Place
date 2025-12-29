
import { Link } from "react-router-dom";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/conact";

const Home: React.FC = () => {
  const bgImage =
    "https://cdn.pixabay.com/photo/2017/01/23/07/23/pink-leather-2001739_640.jpg";

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black/30"
      >
        <h1 className="text-5xl font-bold text-pink-400 mb-4">
          Welcome to LUISE MAKEUP PLACE
        </h1>
        <p className="text-lg text-white mb-6">
          Professional Makeup Artistry to Make You Shine
        </p>

        {/* Demo Button */}
        <button
          onClick={() => alert("Demo website — booking is disabled")}
          className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
        >
          Book Now
        </button>
      </section>
        
      <section id="services">
        <Services />
      </section>
      

      <section id="about">
        <About />
      </section>

      <section id="gallery">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
      // Add this below your existing sections in Home.tsx

<section id="masterclass" className="py-20 bg-pink-100">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-pink-600 mb-4">Master Class</h2>
    <p className="text-gray-700 mb-12">
      Join our exclusive Master Classes to learn professional makeup techniques from Lulu herself. Enhance your skills and become a makeup pro!
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Example Master Class Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
        <img
          src="https://i.pinimg.com/736x/79/a1/f4/79a1f46ea37ef6e379615eb26d51cb4b.jpg"
          alt="Master Class 1"
          className="rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Bridal Makeup</h3>
        <p className="text-gray-600 mb-4">
          Learn the secrets to flawless bridal looks in this hands-on session.
        </p>
       <Link
  to="/demo"
  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition inline-block"
>
  Join Now
</Link>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
        <img
          src="https://i.pinimg.com/1200x/cf/ec/4c/cfec4cf4eef530bfbf1987fc43cf3919.jpg"
          alt="Master Class 2"
          className="rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Fashion Makeup</h3>
        <p className="text-gray-600 mb-4">
          Master the latest fashion makeup trends and techniques for photoshoots.
        </p>
     <Link
  to="/demo"
  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition inline-block"
>
  Join Now
</Link>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
        <img
          src="https://i.pinimg.com/736x/85/2c/60/852c60e8f99189a419264321024191b1.jpg"
          alt="Master Class 3"
          className="rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-pink-600 mb-2">On-Screen Makeup</h3>
        <p className="text-gray-600 mb-4">
          Learn techniques used for film, TV, and digital media makeup.
        </p>
    <Link
  to="/demo"
  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition inline-block"
>
  Join Now
</Link>

      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
