
import { useState } from "react";

export default function SearchExercises({ onSearch }) {
  const [bodyPart, setBodyPart] = useState("");

  const handleSearchClick = () => {
    // Trigger the search with the selected body part
    onSearch(bodyPart);
  };

  return (
    <div className="mt-8 mx-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Body Part:
      </label>
      <div className="flex items-center">
        <select
          className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setBodyPart(e.target.value)}
        >
          <option value="chest">Chest</option>
          <option value="legs">Legs</option>
          <option value="chest">Back</option>
          <option value="legs">Cardio</option>
          <option value="chest">Abs</option>
          <option value="legs">Arms</option>

        </select>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
