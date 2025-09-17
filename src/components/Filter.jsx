import React from "react";

export const Filter = ({ categories, setFilter }) => {
  return (
    <div className="filter">
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => setFilter(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
