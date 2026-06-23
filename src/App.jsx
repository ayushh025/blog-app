import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddBlog from "./components/AddBlog";
import axios from "axios";
import Blogs from "./components/Blogs";
import DeleteModal from "./components/DeleteModal";
import Loader from "./components/Loader";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadBlogs, setLoadBlogs] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const getBlogs = async () => {
    setLoadBlogs(true);
    const res = await axios.get(
      "https://6a37a9f3c105017aa6392f33.mockapi.io/blog"
    );
    setBlogs(res.data);
    setLoadBlogs(false);
  };

  const deleteClick = async (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const deleteBlog = async () => {
    setLoading(true);
    await axios.delete(
      `https://6a37a9f3c105017aa6392f33.mockapi.io/blog/${selectedId}`
    );
    await getBlogs();
    setLoading(false);
    setShowConfirm(false);
    setSelectedId(null);
  };

  const editBlog = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div>
      <Navbar setShowForm={setShowForm} setEditingBlog={setEditingBlog} />
      {showForm && (
        <AddBlog
          setShowForm={setShowForm}
          getBlogs={getBlogs}
          editingBlog={editingBlog}
        />
      )}
      {loadBlogs ? (
        <Loader />
      ) : (
        <Blogs
          blogs={blogs}
          deleteBlog={deleteClick}
          showConfirm={showConfirm}
          editBlog={editBlog}
        />
      )}

      {showConfirm && (
        <DeleteModal
          loading={loading}
          deleteBlog={deleteBlog}
          setShowConfirm={setShowConfirm}
        />
      )}
    </div>
  );
};

export default App;
