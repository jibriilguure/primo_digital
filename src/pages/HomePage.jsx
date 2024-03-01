import React from "react";
import {
  HomeSection,
  Service,
  WhatWeDoSection,
  OurWorksSection,
  Footer,
} from "../components/index";
function HomePage() {
  return (
    <>
      <HomeSection />
      <Service />
      <WhatWeDoSection />
      <OurWorksSection />
      <Footer />
    </>
  );
}

export default HomePage;
