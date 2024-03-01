import React from "react";

import { servicesData } from "../data";

function Service() {
  return (
    <section className="py-8 md:py-10" id="ser">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {servicesData.map((service) => (
            <div key={service.id} className="text-center mb-10 xl:mb-0">
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 py-7 flex justify-center ${service.bgColor} ${service.textColor} rounded-md mb-5 md:mb-10`}
                >
                  <service.icon />
                </div>
              </div>
              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
                {service.title}
              </h2>
              <p className="font-normal text-gray-400 text-sm md:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
