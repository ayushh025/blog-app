import axios from "axios";
import React, { useEffect, useState } from "react";

const AddBlog = React.memo(({ setShowForm, getBlogs, editingBlog }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    titleErr: "",
    contentErr: "",
    imageErr: "",
  });
  useEffect(() => {
    const fetchBlog = async () => {
      if (editingBlog) {
        setTitle(editingBlog.title);
        setImage(editingBlog.image);
        setContent(editingBlog.content);
      }
    };

    fetchBlog();
  }, [editingBlog]);

  const publishBlog = async (e) => {
    e.preventDefault();

    let isValid = true;

    const newErrors = {
      titleErr: "",
      imageErr: "",
      contentErr: "",
    };

    if (title.trim() === "") {
      newErrors.titleErr = "Title is required";
      isValid = false;
    }

    if (image.trim() === "") {
      newErrors.imageErr = "Image URL is required";
      isValid = false;
    }

    if (content.trim() === "") {
      newErrors.contentErr = "Content is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    if (editingBlog) {
      try {
        setLoading(true);

        await axios.put(
          `https://6a37a9f3c105017aa6392f33.mockapi.io/blog/${editingBlog.id}`,
          {
            title,
            image,
            content,
          }
        );

        await getBlogs();

        setTitle("");
        setImage("");
        setContent("");

        setErrors({
          titleErr: "",
          imageErr: "",
          contentErr: "",
        });

        setShowForm(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);

        await axios.post("https://6a37a9f3c105017aa6392f33.mockapi.io/blog", {
          title,
          image,
          content,
        });

        await getBlogs();

        setTitle("");
        setImage("");
        setContent("");

        setErrors({
          titleErr: "",
          imageErr: "",
          contentErr: "",
        });

        setShowForm(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
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
        <form className="space-y-4" onSubmit={publishBlog}>
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm mt-1">{errors.titleErr}</p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="Paste image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm mt-1">{errors.imageErr}</p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              rows="5"
              placeholder="Write your blog content..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <p className="text-red-500 text-sm mt-1">{errors.contentErr}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading
              ? editingBlog
                ? "Updating..."
                : "Publishing..."
              : editingBlog
              ? "Update Blog"
              : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
});

export default AddBlog;
