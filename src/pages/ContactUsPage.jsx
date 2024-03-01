import React from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components";

function ContactUsPage() {
  return (
    <>
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <NavBar />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-gray-700 text-3xl md:text-4xl text-center mb-5">
              Contact Us
            </h1>
            <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-10">
              Get in touch with us for any inquiries or questions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mb-20 md:mb-40">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31575.592958137175!2d48.48886729999999!3d8.40665825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d9dcf582a2bac5d%3A0x83fe5ba854ae5048!2sGarowe%2C%20Somalia!5e0!3m2!1sen!2smy!4v1709288112413!5m2!1sen!2smy"
                className="w-full h-96 rounded-lg"
              ></iframe>
            </div>

            <div className="lg:w-1/2 ml-7">
              <h2 className="font-bold text-gray-700 text-2xl md:text-3xl mb-5">
                Contact Information
              </h2>

              <p className="font-normal text-gray-600 text-lg mb-8">
                Address: Garowe, Somalia
              </p>
              <p className="font-normal text-gray-600 text-lg mb-8">
                Phone: +25290-6640842
              </p>
              <p className="font-normal text-gray-600 text-lg mb-8">
                Email: primo23digital@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUsPage;
