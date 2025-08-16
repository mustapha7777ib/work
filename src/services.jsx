import { motion } from 'framer-motion';

const services = [
  {
    title: 'Building Construction',
    description: 'From residential homes to commercial projects, we deliver durable and modern construction solutions.',
    icon: '🏗️',
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Revamp and modernize existing structures with high-quality renovation services.',
    icon: '🔨',
  },
  {
    title: 'Architecture & Design',
    description: 'Creative architectural designs tailored to client needs and industry standards.',
    icon: '📐',
  },
  {
    title: 'Project Management',
    description: 'Efficient planning, execution, and supervision to ensure timely delivery of projects.',
    icon: '📊',
  },
  {
    title: 'Road & Infrastructure',
    description: 'Quality infrastructure services including roads, bridges, and drainage systems.',
    icon: '🛣️',
  },
  {
    title: 'Consultancy',
    description: 'Professional advice and feasibility studies for construction and engineering projects.',
    icon: '💼',
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-24 bg-[#F8F1E9]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            AI Allied Limited delivers comprehensive construction services, combining innovation, quality, and expertise to bring your vision to life.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative text-7xl mb-6 text-red-600">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}