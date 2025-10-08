import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md px-8 py-4 flex justify-between items-center z-10 transition-colors">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rajesh.dev</h1>
      <div className="flex items-center space-x-6">
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Contact</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
