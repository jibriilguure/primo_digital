import React from "react";
import { workList } from "../data";

// Use workList here

function OurWorksSection() {
  return (
    <section className="py-8 md:py-16" id="work">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
          Our works
        </h1>
        <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit <br />
          anim id est laborum.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          {workList.map((worklist) => (
            <div key={worklist.id} className="space-y-2 xl:space-y-4">
              <img
                src={worklist.imageUrl}
                alt="Service"
                className="hover:opacity-75 transition ease-in-out duration-300 w-full h-64 object-cover" // Ensures images are the same size
              />

              <p className="font-normal text-gray-400 text-base">
                {worklist.description}
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
              >
                {worklist.title}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-20 md:mb-40">
          <a
            href="#"
            className="px-6 py-2 md:px-8 md:py-3 flex items-center gap-3 font-medium text-green-500 text-lg border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300"
          >
            See more works
            {/* Replace with your icon component */}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ml-4 md:ml-20 xl:ml-0 mb-20 xl:mb-40">
          {/* Repeat this img for each brand */}
          <img
            src="assets/image/brand-1.svg"
            alt="Image"
            className="mb-5 md:mb-10 xl:mb-0"
          />
          {/* End of repeated img */}
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between mb-8">
          <div>
            <p className="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">
              Let's talk
            </p>

            <h1 className="font-bold text-gray-700 text-xl md:text-4xl">
              Do you have any Project?
            </h1>
          </div>

          <div className="mt-10">
            <a
              href="/contact"
              className="px-4 py-2 md:px-8 md:py-3 font-medium text-green-500 text-lg border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300"
            >
              Contact us now
            </a>
          </div>
        </div>

        <hr className="text-gray-300 mb-8" />

        <p className="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit <br />
          anim id est laborum.
        </p>
      </div>
    </section>
  );
}

export default OurWorksSection;
