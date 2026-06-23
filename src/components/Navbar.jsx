import React from "react";

const Navbar = React.memo(({ setShowForm, setEditingBlog }) => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-md sticky top-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600 tracking-wide">
        Blog App
      </h1>

      <button
        onClick={() => {
          setEditingBlog(null);
          setShowForm(true);
        }}
        className="bg-indigo-600 text-white px-3 sm:px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 cursor-pointer text-sm sm:text-base"
      >
        Add Blog
      </button>
    </nav>
  );
});

export default Navbar;
