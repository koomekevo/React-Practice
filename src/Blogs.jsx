/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "King Kunta",
      author: "Koome Kevo",
      body: "Example 1 of a blog",
      id: 1,
    },
    {
      title: "River Between",
      author: " Ngugi Theo",
      body: "Example 2 of a blog",
      id: 2,
    },
    {
      title: "Dungeon and Robbers",
      author: "Theo Walcott",
      body: "Example 3 of a blog",
      id: 3,
    },
  ]);

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

export default Blogs;
