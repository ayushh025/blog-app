import React from "react";

const DeleteModal = ({ deleteBlog, loading, setShowConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Delete this blog?</h2>

        <div className="flex gap-3">
          <button
            onClick={() => setShowConfirm(false)}
            className="px-4 py-2 border rounded cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={deleteBlog}
            className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
            disabled={loading}
          >
            {loading ? "Deleteing" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
