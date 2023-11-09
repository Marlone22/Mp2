import { useState, useEffect } from 'react';

function SearchExercises() {
  const [searchQuery, setSearchQuery] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises')
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(error => console.error('Error fetching exercises:', error));
  }, []);

  const filterExercises = () => {
    const lowercaseQuery = searchQuery.toLowerCase();


    const filteredExercises = exercises.filter(exercise =>
      exercise.toLowerCase().includes(lowercaseQuery)
    );

    return filteredExercises;
  };

  const handleSearch = () => {
    const filteredExercises = filterExercises();
    console.log('Filtered Exercises:', filteredExercises);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 justify-center p-5">
        <h2 className="font-bold text-3xl lg:text-6xl mb-5 text-center">
          Awesome Exercises You Should Know
        </h2>

        <div className="relative mb-12">
          <input
            className="w-80 lg:w-96 h-16 pl-5 pr-16 bg-white rounded-full border-none font-semibold"
            type="text"
            placeholder="Search Exercises"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="search-btn bg-red-600 text-white  rounded-full px-6 h-16 absolute top-0 right-0"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchExercises;
