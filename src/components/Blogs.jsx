import React from "react";
import BlogCard from "./BlogCard";

const Blogs = React.memo(({ blogs, deleteBlog, editBlog }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.id}
            deleteBlog={deleteBlog}
            editBlog={editBlog}
          />
        ))}
      </div>
    </div>
  );
});

export default Blogs;
