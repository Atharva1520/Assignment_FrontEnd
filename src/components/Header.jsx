import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-6 md:px-24 bg-white z-10 shadow-md shadow-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-black text-3xl font-semibold cursor-pointer">
            BlueStick <br />
            Consultants
          </h1>
        </div>
        <nav className="md:flex hidden">
          <ul className="flex space-x-4 justify-center items-center">
            <li>
              <a href="#" className="text-black text-xl hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xl  hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xl  hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xl  hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-black text-xl hover:text-blue-400 focus:outline-none"
            onClick={toggleNav}
          >
            ☰
          </button>
        </div>
        {isNavOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white z-20 shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a
                  href="#"
                  className="text-black text-xl hover:text-blue-400"
                  onClick={toggleNav}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-xl hover:text-blue-400"
                  onClick={toggleNav}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-xl hover:text-blue-400"
                  onClick={toggleNav}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-xl hover:text-blue-400"
                  onClick={toggleNav}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
