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
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">About AI Allieds Limited</h2>
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
              alt="AI  Limited construction workers"
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
          <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto mb-10">
            AI Allieds Limited was fully incorporated under the laws of the Federal Republic of Nigeria in the year 1998, with registration number RC 346914. Founded with a vision to deliver innovative and sustainable construction solutions, we specialize in creating high-quality residential, commercial, and infrastructural projects that transform communities and exceed client expectations.
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