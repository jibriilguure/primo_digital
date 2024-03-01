import React, { useState } from "react";
function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex-wrap lg:flex items-center justify-between mb-20 lg:mb-10">
      <div className="flex items-center justify-between mb-10 lg:mb-0">
        <img
          src="assets/logoA.jpeg"
          style={{ height: "100px" }}
          alt="Logo"
          href="/"
        />

        <button
          className="flex items-center justify-center border border-green-500 w-10 h-10 text-green-500 rounded-md outline-none lg:hidden ml-auto"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="feather-icon menu"></i>
        </button>
      </div>

      <ul
        className={`hidden lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 ${
          navbarOpen ? "flex" : "hidden"
        }`}
      >
        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/">Home</a>
        </li>
        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#ser">Services</a>
        </li>
        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#work">Works</a>
        </li>
        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Blog</a>
        </li>
        <li className="px-8 py-3 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300">
          <a href="/contact">Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
