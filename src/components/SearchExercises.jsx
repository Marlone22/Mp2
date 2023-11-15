import  { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';

export default function SearchExercises({ setExercises }) {
  const [inputValue, setInputValue] = useState('');

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchBodyParts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSearch();
  };

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.target.toLowerCase().includes(search.toLowerCase()) ||
          item.equipment.toLowerCase().includes(search.toLowerCase()) ||
          item.bodyPart.toLowerCase().includes(search.toLowerCase())
      );

      setSearch('');
      setExercises(searchedExercises);
    }
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
