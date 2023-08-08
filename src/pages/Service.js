import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import FooterOne from "../components/footer/FooterOne";
import NavBar from "../components/navbar/NavBar";
import PricingAreaOne from "../components/pricing/PricingAreaOne";
import ServiceAreaGroup from "../components/serviceArea/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Service;
