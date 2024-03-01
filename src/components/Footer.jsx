import React from "react";

function Footer() {
  return (
    <footer className="bg-green-50 py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
          <div className="mb-10 lg:mb-0 max-w-md">
            <img
              src="assets/logoA.jpeg"
              alt="Image"
              className="mb-5 mx-auto lg:mx-0 h-20"
            />
            <p className="font-normal text-gray-400 text-md">
              Primo Digital and Design is a leader in large format digital
              design. Our uncompromising approach in managing projects enables
              us to execute major projects in all our areas of specialization,
              from inception to completion.
            </p>
          </div>

          <div className="space-y-4 mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">
              Our services
            </h4>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              UI Design
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Animation
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Development
            </a>
          </div>

          <div className="space-y-4 mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">
              Our Company
            </h4>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Reporting
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Management
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">
              Contact Us
            </h4>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Garowe, Somalia
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              +25290-6640842
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              primo23digital@gmail.com
            </a>
          </div>
        </div>

        <hr className="text-gray-300 mt-10" />

        <p className="font-normal text-gray-400 text-md text-center mt-5">
          &copy; 2024 Primo Digital & Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
