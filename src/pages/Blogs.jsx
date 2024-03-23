import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import BlogPage from '../components/BlogPage/BlogPage';
import Footer from "../components/Footer/Footer";
const Blogs = () => {
  return (
    <div>
      <Navbar title="Our Blog" />
      <BlogPage/>
      <Footer />
    </div>
  )
}

export default Blogs
