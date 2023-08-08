import React from "react";
import AboutAreaTwo from "../components/about/AboutAreaTwo";
import BannerTwo from "../components/banner/Banner";
import BlogArea from "../components/blog/BlogArea";
import ContactAreaTwo from "../components/contact/ContactAreaTwo";
import CounterAreaTwo from "../components/counter/CounterAreaTwo";
import FooterTwo from "../components/footer/FooterTwo";
import NavBar from "../components/navbar/NavBar";
import PricingAreaTwo from "../components/pricing/PricingAreaTwo";
import ServiceAreaTwo from "../components/serviceArea/ServiceAreaTwo";
import Testimonials from "../components/testimonials/Testimonials";
import WorkProcessTwo from "../components/workProcess/WorkProcessTwo";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerTwo />
      <AboutAreaTwo />
      <ServiceAreaTwo />
      <PricingAreaTwo />
      <CounterAreaTwo />
      <ContactAreaTwo />
      <WorkProcessTwo />
      <Testimonials />
      <BlogArea />
      <FooterTwo />
    </>
  );
};

export default Home;
