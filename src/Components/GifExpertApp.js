import { useState } from "react";

import AddCategory from "./add-category";
import GifGrid from "./gif-grid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      <hr />
    </>
  );
}
