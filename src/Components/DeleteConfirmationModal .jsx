import React from "react";
import Modal from "./Modal";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
      <p className="mb-4">Are you sure you want to delete this item? This action cannot be undone.</p>
      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
