import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-orange-500 text-xl font-bold"
          >
            MPF 🏠
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              About
            </Link>
            <Link
              to="/value"
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Value
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Donate Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Donate
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                About
              </Link>
              <Link
                to="/value"
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Value
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
