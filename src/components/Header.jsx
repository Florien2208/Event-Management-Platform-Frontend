import  { useState } from "react";
import Log from "../images/Logo-4x.png";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleLogin = () => {
  
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Log} className="w-1/6 h-10" alt="Logo" />
        <nav className="text-white">
          <a href="/" className="mx-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Events
          </a>
          <a href="/about" className="mx-2 hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="mx-2 hover:text-gray-300">
            Contact
          </a>
          {isLoggedIn ? (
            <a href="/profile" className="mx-2 hover:text-gray-300">
              Profile
            </a>
          ) : (
            <a
              href="/login"
              className="mx-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
