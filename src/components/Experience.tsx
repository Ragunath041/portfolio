import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Software Development Intern
              </h3>
              <p className="text-primary dark:text-primary-dark mb-2"><a href='https://drive.google.com/file/d/1AJb0MDhvEdIm7nLiFb19_WPwyidR_oEa/view?usp=drivesdk'>Digital Valley</a></p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">June 2023 - August 2023</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed and maintained web applications using React and Flask</li>
                <li>Collaborated with senior developers on various client projects</li>
                <li>Implemented responsive designs and improved user experience</li>
                <li>Participated in code reviews and team meetings</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;