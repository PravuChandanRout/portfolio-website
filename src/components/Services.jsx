
const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces.',
    icon: '🎨',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications.',
    icon: '📱',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Services I Offer</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
