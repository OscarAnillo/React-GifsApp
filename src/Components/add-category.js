import { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ setCategories }) {
  const [input, setInput] = useState(""); // "controlled" state

  /* Submit handler for forms */
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the form from refreshing
    // some validation
    if (input?.length <= 0) {
      alert("Please type a valid category");
      return;
    }
    setCategories((category) => [input, ...category]); // receives a call back, input and copy of the array
    setInput(""); // after the input is added, the input is returned to the initial state
  };

  /* changeHandler for keypress */
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add by gif name"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
