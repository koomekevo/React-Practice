/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-review" key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
