import React, { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter items based on the selected category
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Produce">Produce</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
