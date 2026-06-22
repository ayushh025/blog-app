import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddBlog from "./components/AddBlog";

const App = () => {
  // https://6a37a9f3c105017aa6392f33.mockapi.io/blog
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Navbar setShowForm={setShowForm} />
      {showForm && <AddBlog setShowForm={setShowForm} />}
    </div>
  );
};

export default App;
