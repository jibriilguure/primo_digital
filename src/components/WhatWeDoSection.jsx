import React from "react";

function WhatWeDoSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
          What we do?
        </h1>

        <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">
          Digital & Design provides quality print and digital solutions,
          <br /> from business essentials to marketing materials, tailored to
          your creative needs.
          <br />
        </p>

        <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
          <div className="mx-auto xl:mx-0 mb-20 xl:mb-0 w-full xl:w-1/2">
            <img src="assets/what.png" alt="Image" className="w-full h-auto" />
          </div>

          <div className="mx-auto xl:mx-0 text-center xl:text-left w-full xl:w-1/2">
            <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Design is our most intense <br />
              process
            </h1>

            <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
              At Digital & Design, our design process is at the core of what we
              do. We meticulously craft each project, ensuring every detail
              aligns with our clients' vision while maintaining the highest
              quality standards. Our commitment to excellence is unwavering, as
              we strive to create impactful and memorable designs that stand out
              in today's competitive market.
              <br />
            </p>

            <a
              href="#"
              className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300"
            >
              See more
              <i data-feather="chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="mx-auto xl:mx-0 text-center xl:text-left w-full xl:w-1/2">
            <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Instantly understandable content <br />
              is important
            </h1>

            <p className="font-normal text-gray-400 text-md">
              Primo Digital and Design is recognized as a profound leader in the
              field of large format digital design. The uncompromising approach
              of Primo Digital and Design in effectively managing its projects
              makes the Company capable of executing major projects in all its
              spheres of specialization, from inception of a project to its
              successful completion.
            </p>

            <a
              href="#"
              className="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300"
            >
              See more
              <i data-feather="chevron-right"></i>
            </a>
          </div>
          <div className="mx-auto xl:mx-0 mb-20 xl:mb-0 w-full xl:w-1/2">
            <img
              src="assets/image-3.svg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
