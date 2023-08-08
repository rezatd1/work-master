import React from "react";
import BlogGroup from "../components/blog/BlogGroup";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import FooterOne from "../components/footer/FooterOne";
import NavBar from "../components/navbar/NavBar";

const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Blog;
