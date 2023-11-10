import { useState } from "react";

export default function SearchExercises({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 mx-auto max-w-md">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter body part"
      />
      <button type="submit" className="block mx-auto mt-2 bg-blue-500 text-white py-2 px-4 rounded-md">
        Search
      </button>
    </form>
  );
}






