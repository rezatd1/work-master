import React from "react";
import AboutAreaOne from "../components/about/AboutAreaOne";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactAreaOne from "../components/contact/ContactAreaOne";
import CounterAreaOne from "../components/counter/CounterAreaOne";
import FaqArea from "../components/faq/FaqArea";
import FooterOne from "../components/footer/FooterOne";
import NavBar from "../components/navbar/NavBar";
import TeamArea from "../components/team/TeamArea";
import WorkProcessOne from "../components/workProcess/WorkProcessOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* FAQ Area One */}
      <FaqArea />

      {/* Team Area One */}
      <TeamArea />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
