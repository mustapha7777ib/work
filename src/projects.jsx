import { motion } from 'framer-motion';
import Project1 from './images/project-1.jpeg';
import Project2 from './images/project-2.jpeg';
import Project3 from './images/project-3.jpeg';
import Project4 from './images/project-4.jpeg';
import Project5 from './images/project-5.jpeg';
import Project6 from './images/project-6.jpeg';
import Project7 from './images/project-7.jpeg';
import Project8 from './images/project-8.jpeg';

const projects = [
  {
    img: Project1,
    title: 'CONSTRUCTION OF WORSHIP CENTERS FOR QATAR CHARITY ORGANIZATION, ABUJA',
    description: 'A serene place of worship with intricate designs and modern facilities, fostering community and spirituality.',
    category: 'Religious',
  },
  {
    img: Project2,
    title: '4-BEDROOM DUPLEX LOCATED AT GAMES VILLAGE',
    description: 'A stylish duplex with spacious interiors and contemporary architecture, designed for luxury living.',
    category: 'Residential',
  },
  {
    img: Project3,
    title: 'CONSTRUCTION OF DEWOO CAMP FOR SB ENERGY RESOURCES LTD, KRPC, KADUNA',
    description: 'A fully equipped camp facility built to support SB Energy Resources Ltd’s operations for KRPC in Kaduna.',
    category: 'Expatiate Camp',
  },
  {
    img: Project4,
    title: 'CONSTRUCTION OF 3 BEDROOM BLOCK OF FLAT FOR AMSSCO, EARO GARDEN, ABUJA',
    description: 'Modern multi-unit apartments offering eco-friendly features and stunning city views.',
    category: 'Residential',
  },
  {
    img: Project5,
    title: 'CONSTRUCTION OF TERRACE DUPLEX, GWARIMPA, ABUJA',
    description: 'A stylish terrace duplex constructed in Gwarimpa, Abuja, combining contemporary architecture with practical living spaces.',
    category: 'Residential',
  },
  {
    img: Project6,
    title: 'CONSTRUCTION OF RADIO MAST AND SOLAR POWER FOR UFOMA COMMUNITY RADIO, UGHELLI, DELTA STATE.',
    description: 'A robust telecommunications mast engineered for durability and seamless connectivity.',
    category: 'Infrastructure',
  },
    {
    img: Project7,
    title: 'MULTIPURPOSE BUILDING FOR BIBLE SOCIETY OF NIGERIA IBADAN',
    description: 'A modern multipurpose facility constructed for the Bible Society of Nigeria in Ibadan',
    category: 'Institutional',
  },
    {
    img: Project8,
    title: 'REHABILITATION OF WATER SUPPLY NETWORK',
    description: 'Comprehensive upgrade of the water supply system at KRPC, executed for Daewoo.',
    category: 'Infrastructure',

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
                <a href={project.img} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image of ${project.title} in a new window`}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[50vh] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
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

