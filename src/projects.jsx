import { motion } from 'framer-motion';
import Building4 from './images/building-4.jpg'; 

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    title: 'Commercial Complex',
    description: 'A state-of-the-art commercial building with modern amenities.',
    category: 'Commercial',
  },
  {
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471',
    title: 'Residential Tower',
    description: 'Luxury apartments with stunning city views and eco-friendly design.',
    category: 'Commercial',
  },
  {
    img: Building4,
    title: 'Infrastructure Project',
    description: 'A robust bridge built to withstand extreme conditions.',
    category: 'Commercial',
  },
  {
    img: Building4,
    title: 'Urban Renovation',
    description: 'Revitalizing historic structures with modern functionality.',
    category: 'Commercial',
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-[#F8F1E9]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore our diverse portfolio of construction projects showcasing quality and innovation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[50vh] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <p className="text-sm text-red-600 font-semibold mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                  aria-label="Contact us for project details"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}