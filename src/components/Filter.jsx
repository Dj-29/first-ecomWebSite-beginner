import React from "react";

export const Filter = ({ categories, filter }) => {
  return (
    <div className="filter">
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => filter(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
