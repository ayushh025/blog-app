import React from "react";

const AddBlog = ({ setShowForm }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setShowForm(false)}
      ></div>
      <div className="relative w-full max-w-xl bg-white shadow-xl rounded-xl p-4 sm:p-6">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500 transition cursor-pointer"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Add New Blog
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              placeholder="Paste image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea
              rows="5"
              placeholder="Write your blog content..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
