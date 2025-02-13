import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin , FiX , FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get in Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="mailto:kitcbe.25.21bcb041@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Ragunath041"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ragunath-g-198261227/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Ragunat96317716"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <FiX className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ragunath_ak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
               
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;