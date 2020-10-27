import React, { useState } from "react";
import "./App.css";

import RecipeList from "./RecipeList";

const defaultTitle = "crackers";

function App() {
  const [title, setTitle] = useState(defaultTitle);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <input onChange={handleInputChange} />
      <h1 onClick={() => setTitle("cool " + title)}>
        {title.length === 0 ? defaultTitle : title}
      </h1>
      <RecipeList />
    </div>
  );
}

export default App;
