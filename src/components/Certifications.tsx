import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';
import { FiAward } from 'react-icons/fi';

const certifications = [
  {
    title: 'Python Foundation Certification',
    issuer: 'Infosys Sprinboard',
    date: 'October 2022',
    link: 'https://drive.google.com/file/d/14aBP_7BRYk5gUWhiD8q9aaUYbWX_THLr/view?usp=drivesdk',
  },
  {
    title: 'MySQL with Information Technology',
    issuer: 'Coursera',
    date: 'April 2024',
    link : 'https://drive.google.com/file/d/1BZSMgHwcxhubTL0HDMiAA52dpPB-Zxuf/view'
  },
  {
    title: 'Getting Started with Power BI Desktop',
    issuer: 'Coursera',
    date : 'April 2024',
    link : 'https://drive.google.com/file/d/174fiR3N3a6x28Ze9B5VNXZcFuq9CPbUN/view',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Certifications
          </h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-start"
              >
                <FiAward className="w-8 h-8 text-primary dark:text-primary-dark mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                  <p><a href={cert.link}>Click here</a></p>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;