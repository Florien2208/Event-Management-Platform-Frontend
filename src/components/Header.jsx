// Header.js
import  { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy function for login
  const handleLogin = () => {
    // Perform login logic here
    // For demonstration purposes, just toggling isLoggedIn state
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Event Management App</h1>
        <nav className="text-white">
          <a href="#" className="mx-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Events
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            About
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Contact
          </a>
          {isLoggedIn ? (
            <a href="/login" className="mx-2 hover:text-gray-300">
              Profile
            </a>
          ) : (
            <button
              onClick={handleLogin}
              className="mx-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
