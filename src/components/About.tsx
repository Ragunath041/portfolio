import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiServer } from 'react-icons/fi';
import { SiFirebase, SiPowers, SiReact, SiPostgresql, SiCplusplus, SiMysql , SiDart} from 'react-icons/si';
// import { SiPowerBi, SiJava } from "react-icons/si";


const skills = [
  { name: 'Python', icon: FiCode },
  { name: 'Flutter', icon: FiSmartphone },
  { name: 'React', icon: SiReact },
  { name: 'Flask', icon: FiServer },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Power BI', icon: SiPowers },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Dart', icon: SiDart },
  { name: 'C++', icon: SiCplusplus },
  // { name: 'Java', icon: SiJava },
  { name: 'MySQL', icon: SiMysql },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose dark:prose-invert text-center">
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate software engineering student in the field of Computer Science and Business Systems with a strong foundation in both frontend
                and backend development. My goal is to create innovative solutions that make a positive
                impact on people's lives through technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Currently focusing on web and mobile development, I'm always eager to learn new
                technologies and take on challenging projects that push my boundaries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <skill.icon className="w-6 h-6 text-primary dark:text-primary-dark mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
