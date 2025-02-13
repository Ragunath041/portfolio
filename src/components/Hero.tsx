import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiX, FiInstagram } from "react-icons/fi";

// Variants for text animations
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Variants for social icons
const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { yoyo: Infinity, duration: 0.3 },
  },
};

// Glowing background animation
const glowVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0.3, 0.7, 0.3],
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          {/* Name with Fade & Scale Animation */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Ragunath G
          </motion.h1>

          {/* Typing Animation for Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Software Engineering Student & Developer
          </motion.p>

          {/* Social Media Icons with Hover Effects */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: FiGithub, link: "https://github.com/Ragunath041" },
              { icon: FiLinkedin, link: "https://www.linkedin.com/in/ragunath-g-198261227/" },
              { icon: FiX, link: "https://x.com/Ragunat96317716" },
              { icon: FiInstagram, link: "https://www.instagram.com/ragunath_ak/" },
            ].map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-lg"
                whileHover="hover"
                variants={iconVariants}
              >
                <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
