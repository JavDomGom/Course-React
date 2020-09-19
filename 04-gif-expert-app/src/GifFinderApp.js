import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(["Grateful Dead"]);

  return (
    <>
      <h2>GifFinderApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
