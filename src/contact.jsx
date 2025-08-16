import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., log to console or send to backend)
    console.log('Form submitted:', formData);
    // Clear form inputs
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.section
      id="contact"
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have a project in mind? Contact AI Allied Limited to discuss your vision and let us bring it to life with our expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    aria-label="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300 w-full"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 text-gray-200">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail size={24} className="text-red-600" />
                  <a href="mailto:info@aaliedltd.com" className="hover:text-red-600 transition duration-300">
                    info@aaliedltd.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={24} className="text-red-600" />
                  <a href="tel:+1234567890" className="hover:text-red-600 transition duration-300">
                    +234 803 701 4096
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={24} className="text-red-600" />
                  <span>No.14 Kabir Mustapha Street, Dantata Estate, Kubwa, Abuja.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}