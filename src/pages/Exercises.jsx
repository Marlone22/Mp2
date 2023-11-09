import { useEffect, useState } from "react";
import SearchExercises from "../components/SearchExercises";

export default function Exercises() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])

  return (
    <>
      <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Exercises</h1>
        </div>
      </div>
      <SearchExercises />

      <div className="flex flex-wrap justify-center p-4">
        {data.map((item, i) => (
          <div key={i} className="max-w-md mx-4 mb-8 bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
