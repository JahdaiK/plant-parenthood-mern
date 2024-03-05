
import { useState, useEffect } from "react";
import Gallery from "../Gallery";
import SearchBar from "../SearchBar";
import banner from "../../assets/small_banner.png";
export default function HomePage() {
  const [plants, setPlants] = useState([]);
  //get all indoor plants
  async function fetchPlants() {
    const url = `https://perenual.com/api/species-list?key=${
      import.meta.env.VITE_PERENUAL_API_KEY
    }&indoor=1`;
    const res = await fetch(url);
    const { data } = await res.json(); console.log(data)
    const shuffledPlants = [];
    while (data.length > 0) { console.log(data, 'In the fetch plants while loop')
      let randomNum = Math.random() * data.length;
      shuffledPlants.push(...data.splice(randomNum)); console.log(shuffledPlants, 'shuffled in the whole loop')
    }
    setPlants(shuffledPlants);
  }
  useEffect(() => {
    if (plants.length === 0) fetchPlants();
    console.log(plants);
  }, []);
  //get plants via search
  async function findPlants(query) {
    const url = `https://perenual.com/api/species-list?key=${
      import.meta.env.VITE_PERENUAL_API_KEY
    }&q=${query}`;
    const res = await fetch(url);
    const { data } = await res.json();
    setPlants(data);
  }
  return (
    <>
      <SearchBar
        findPlants={findPlants}
        setPlants={setPlants}
        fetchPlants={fetchPlants}
      />
      <Gallery plants={plants} setPlants={setPlants} />
    </>
  );
}