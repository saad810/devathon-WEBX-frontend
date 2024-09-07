import React from "react";

const card = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Title</h2>
        <h3 className="text-xl font-bold">Instructor</h3>
        <h4 className="text-lg font-bold">Price</h4>
        <p className="text-sm">Category</p>
        <p className="text-sm">Description</p>
        <img src="" alt="" />
        <button>View</button>
      </div>
    </div>
  );
};

export default card;
