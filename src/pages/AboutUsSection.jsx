import React from "react";
import NavBar from "../components/NavBar";

function AboutUsSection() {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <NavBar />
          <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
            About Us
          </h1>

          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">
            Learn more about our team, our mission, and the values that drive
            our work.
          </p>

          <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
            <div className="mx-auto xl:mx-0 mb-20 xl:mb-0 w-full xl:w-1/2">
              <img
                src="assets/logomain.jpeg"
                alt="About Us"
                className="w-full"
              />
            </div>

            <div className="mx-auto xl:mx-0 text-center xl:text-left w-full xl:w-1/2">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Our Story
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Primo Digital and Design is a multi-disciplinary professional
                company offering its private and public clients a comprehensive
                range of professional large format digital printing services.
                The company was founded in 2023 and has been in operation since.
                Primo Digital and Design is recognized as a profound leader in
                the field of large format digital design. The uncompromising
                approach of Primo Digital and Design in effectively managing its
                projects makes the Company capable of executing major projects
                in all its spheres of specialization, from inception of a
                project to its successful completion.
              </p>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Our Mission: Enhancing our identity and that of our clients by
                providing an excellent and competitive professional service as
                well as an exceptionally quality product. Continual improvement,
                broadening of skills and enhancing the working environment of
                our personnel to reach their full potential.
              </p>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Our Vision: Enhancing our identity and that of our clients by
                providing an excellent and competitive professional service as
                well as an exceptionally quality product. Continual improvement,
                broadening of skills and enhancing the working environment of
                our personnel to reach their full potential.
              </p>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Our Products: Digital & Design has an extensive range of printed
                products to choose from. But what makes us different from some
                of our printing competitors? Well, the number 1 difference is
                that we are a Digital and Creative Design that Satisfying our
                customers. This allows for full quality control, faster
                turnarounds and at a cost-effective rate. Please see below some
                of the products that we design & print.
              </p>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Primo Digital and Design's structure and leadership core is
                backed by a team of highly skilled employees such as Manager
                Creative Designers and support, capable of handling projects of
                any size and nature.
              </p>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Conclusion: We believe that landscaping can be both beautiful
                and beneficial to the planet. Our dedication to innovation,
                sustainability, and customer satisfaction has positioned us as a
                trusted partner for anyone looking to invest in eco-friendly
                outdoor spaces. As we look to the future, we remain committed to
                our mission of creating green havens that clients love and the
                environment appreciates. Owner Of The Company One of the
                Professional Creative Designer has been 10 years Experience and
                of the team of Primo Digital and Design Eng Mohamed Hasan
                Mohamed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
