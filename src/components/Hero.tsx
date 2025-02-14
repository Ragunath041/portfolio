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
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center md:text-left overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <div className="relative z-10 flex flex-col items-center md:items-start max-w-3xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          {/* Name with Fade & Scale Animation */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Ragunath G
          </motion.h1>

          {/* Typing Animation for Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Software Engineer
          </motion.p>

          {/* Social Media Icons with Hover Effects */}
          <div className="flex justify-center md:justify-start flex-wrap gap-4 sm:gap-6">
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
                className="p-3 sm:p-4 md:p-5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-lg"
                whileHover="hover"
                variants={iconVariants}
              >
                <Icon className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-gray-900 dark:text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-6 md:mb-0 md:ml-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/Ragunath.jpeg" // Replace this with your actual image path
          alt="Ragunath G"
          className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
