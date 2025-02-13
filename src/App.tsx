import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  // State to track dark mode (default: true)
  const [darkMode, setDarkMode] = useState(true);

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      setDarkMode(true); // Default to dark mode
    }
  }, []);

  // Toggle theme and store in localStorage
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-lg"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
