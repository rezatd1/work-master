import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactMain from "../components/contact/ContactMain";
import FooterOne from "../components/footer/FooterOne";
import NavBar from "../components/navbar/NavBar";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
