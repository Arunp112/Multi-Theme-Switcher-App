import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"; 

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold text-black dark:text-white">
          🌈 Theme App
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:underline text-black dark:text-white">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline text-black dark:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline text-black dark:text-white"
          >
            Contact
          </Link>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="ml-4 border p-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white"
          >
            <option value="theme1">Theme 1 - Minimal</option>
            <option value="theme2">Theme 2 - Dark</option>
            <option value="theme3">Theme 3 - Colorful</option>
          </select>
        </nav>

        {/* Mobile Nav Toggle */}
        {!isOpen && (
          <button
            aria-label="Open menu"
            className="md:hidden text-2xl z-50 relative text-black dark:text-white"
            onClick={() => setIsOpen(true)}
          >
          <CiMenuBurger/>
          </button>
        )}
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          <button
            aria-label="Close menu"
            className="self-end text-2xl text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose/>
          </button>
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="block hover:underline text-black dark:text-white"
            >
              {label}
            </Link>
          ))}
          <select
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
              setIsOpen(false);
            }}
            className="w-full border p-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white"
          >
            <option value="theme1">Theme 1 - Minimal</option>
            <option value="theme2">Theme 2 - Dark</option>
            <option value="theme3">Theme 3 - Colorful</option>
          </select>
        </div>
      </div>

      {/* Optional: Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
