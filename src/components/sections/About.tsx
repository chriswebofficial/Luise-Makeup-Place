import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="bg-pink-100  text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6  text-pink-600">
            Enhancing Beauty, <br /> One Face at a Time
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            At <span className="font-semibold">Luise Makeup</span>, we believe
            makeup is more than just appearance it’s about confidence,
            elegance, and self-expression. Every look is carefully crafted to
            enhance your natural beauty while matching your unique style.
          </p>
          <Link to={"/booking"}
           className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition">
            Book an Appointment
          </Link>
        </div>

        {/* Image */}
        <img
            src="https://cdn.pixabay.com/photo/2014/01/12/13/54/makeup-set-242806_640.jpg"
            alt="Lulu Makeup Artist"
            className="shadow-lg w-full max-w-md object-cover rounded-2xl"
/>

      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6  text-pink-600">Our Story</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Luise Makeup was born from a passion for beauty and a deep appreciation
          for individuality. From bridal glam to special events and photoshoots,
          our goal is simple  to help every client feel confident, radiant, and
          unforgettable.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12  text-pink-600">
            Why Choose Luise Makeup
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3  text-pink-600"> 
                Personalized Experience
              </h3>
              <p>
                Every look is tailored to suit your skin tone, face shape, and
                personal style.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3  text-pink-600">Premium Products</h3>
              <p>
                We use high quality, skin friendly makeup products for flawless
                and long-lasting results.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3  text-pink-600">
                Trusted for Special Moments
              </h3>
              <p>
                From weddings to events, clients trust Luise Makeup to deliver
                elegance and perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6  text-pink-600">
          Ready to Feel Your Best?
        </h2>
        <p className="text-lg mb-8">
          Book your session today and let Luise bring your beauty vision to life.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
