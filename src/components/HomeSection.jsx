import React, { useState } from "react";
import NavBar from "./NavBar";
// Import Link from react-router-dom

const HomeSection = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <NavBar />
        <header className="flex-col xl:flex-row flex justify-between">
          <div className="mx-auto text-center xl:text-left xl:mx-0 mb-20 xl:mb-0">
            <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-10">
              A digital <br /> Product design <br /> Agency
            </h1>
            <p className="font-normal text-gray-500 text-sm md:text-lg mb-10">
              We develop world class high quality product <br /> designs.
            </p>
            <div className="flex items-center justify-center ">
              <a
                href="/about"
                className="px-8 py-3 bg-grredeen-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300 mr-14"
              >
                About Us
              </a>
            </div>
          </div>
          <div className="mx-auto xl:mx-0 w-[55%]">
            <img src="assets/2723660.jpg" alt="Image" />
          </div>
        </header>
      </div>
    </section>
  );
};

export default HomeSection;
