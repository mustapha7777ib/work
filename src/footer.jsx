import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      className="bg-gray-800 text-gray-200 py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
          {/* Company Info */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-extrabold text-white mb-4">AI Allieds Limited</h3>
            <p className="text-sm text-gray-300">
              Building the Future, Preserving the Past
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 flex flex-col items-center">
              {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(item)}
                    className="hover:text-red-600 transition duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 flex flex-col items-center">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-red-600" />
                <a href="mailto:Alliedssltd@hotmail.com" className="hover:text-red-600 transition duration-300">
                  Alliedssltd@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-600" />
                <a href="tel:+2348037014096" className="hover:text-red-600 transition duration-300">
                  +234 803 701 4096
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 border-t border-gray-700 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AI Allieds Limited. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}