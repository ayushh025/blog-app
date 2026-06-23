import React from "react";

const BlogCard = React.memo(({ blog, deleteBlog, editBlog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-indigo-600 mb-2">{blog.title}</h2>

        <p className="text-gray-600 mb-4 mt-auto">{blog.content}</p>

        <p className="text-sm text-gray-400 mb-4 mt-auto">
          {new Date(blog.createdAt * 1000).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>

        <div className="flex gap-3">
          <button
            className="flex-1 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 py-2 rounded-lg font-medium transition cursor-pointer"
            onClick={() => editBlog(blog)}
          >
            Edit
          </button>

          <button
            onClick={() => deleteBlog(blog.id)}
            className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 py-2 rounded-lg font-medium transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
});

export default BlogCard;
