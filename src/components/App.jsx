import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  // Add state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Toggle dark mode
  const handleDarkmodeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkmodeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
