import React from "react";

const SortInput = ({ value, onChange }) => {
  return (
    <div className="form-group d-flex align-items-center">
      <select className="form-control" value={value} onChange={onChange}>
        <option value="default">Sort by</option>
        <option value="default">Default</option>
        <option value="name-asc">A - Z</option>
        <option value="name-desc">Z - A</option>
      </select>
    </div>
  );
};

export default SortInput;
