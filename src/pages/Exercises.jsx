import { useEffect, useState } from "react";
import SearchExercises from "../components/SearchExercises";

export default function Exercises() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', {
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '8a4f5a6ca5msh2da4b416502f1bap175610jsn6ff0cd998571'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log('API Response:', json);
        setData(json);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleSearch = () => {
    console.log('Search clicked');
    
    // Perform the search based on the searchTerm
    fetch(`https://exercisedb.p.rapidapi.com/exercises/search?name=${searchTerm}`, {
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '8a4f5a6ca5msh2da4b416502f1bap175610jsn6ff0cd998571'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log('Search Result:', json);
        setData(json);
      })
      .catch(error => console.error('Error fetching search data:', error));
  };

  return (
    <>
      <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Exercises</h1>
        </div>
      </div>
      <SearchExercises onSearch={handleSearch} setSearchTerm={setSearchTerm} />

      <div className="flex flex-wrap justify-center p-4">
        {data.map((item, i) => (
          <div key={i} className="max-w-md mx-4 mb-8 bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>{item.description}</p>
              <img src={item.gifUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
