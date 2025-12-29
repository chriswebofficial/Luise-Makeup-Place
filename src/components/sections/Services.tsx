const services = [
  {
    title: "On Screen",
    duration: "1 hr",
    price: "$100",
  },
  {
    title: "Bridal",
    duration: "1 hr",
    price: "$150",
  },
  {
    title: "Fashion",
    duration: "1 hr",
    price: "$120",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-black bg-opacity-30"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        SERVICES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-pink-100  rounded-xl shadow-lg p-6 text-center hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>

            <p className="text-gray-500 mb-2">{service.duration}</p>

            <p className="text-3xl font-bold text-pink-600 mb-6">
              {service.price}
            </p>

            <a
              href="/booking"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
