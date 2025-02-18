import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      // console.log("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      // console.log("light");
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
            MPF <span className="text-orange-500 px-1"> {" "}<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                    <path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z" fill="#FF6900"></path>
                </svg></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 ">
            <Link
              to="/"

              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              About
            </a>
            <a
              href="#impact"
              onClick={(e) => handleScroll(e, 'impact')}
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Impact
            </a>
            <a
              href="#whatwedo"
              onClick={(e) => handleScroll(e, 'whatwedo')}
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              What We Do
            </a>
            <a
              href="#values"
              onClick={(e) => handleScroll(e, 'values')}
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Values
            </a>
            <Link
              to="/openings"
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 relative"
            >
              Openings
              <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                New
              </span>
            </Link>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
            >
              Contact
            </a>
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
            <a href="#donation"
            onClick={(e) => handleScroll(e, 'donation')}>
            {/* Donate Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Donate
            </button>
          </a>

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
                onClick={(e) => handleScroll(e, 'home')}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Home
              </Link>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, 'about')}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                About
              </a>
              <a
                href="#impact"
                onClick={(e) => handleScroll(e, 'impact')}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Impact
              </a>
              <a
                href="#whatwedo"
                onClick={(e) => handleScroll(e, 'whatwedo')}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                What We Do
              </a>
              <a
                href="#values"
                onClick={(e) => handleScroll(e, 'values')}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Values
              </a>
              <Link
                to="/openings"
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Openings
              </Link>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
