import { motion } from 'framer-motion';
import Project1 from './images/project-1.jpeg'; 

export default function About() {
  return (
    <motion.section
      id="about"
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">About AI Allied Limited</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Project1}
              alt="AI Allied Limited construction workers"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Founded with a vision to transform landscapes, AI Allied Limited has been a leader in construction excellence since its inception. As of today, we continue to deliver innovative, high-quality projects across residential, commercial, and infrastructural sectors. Our commitment to sustainability and precision ensures every structure we build stands as a testament to durability and design.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Guided by our motto, "Building the Future, Preserving the Past," we blend cutting-edge technology with time-honored craftsmanship. From modern homes to iconic mosques, our diverse portfolio reflects our dedication to client satisfaction and community impact. Partner with us to bring your vision to life with unparalleled expertise.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}