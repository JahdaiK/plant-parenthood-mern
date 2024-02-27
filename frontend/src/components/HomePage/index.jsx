import { useState, useEffect } from "react";
import Gallery from "../Gallery";
import SearchBar from "../SearchBar";

export default function HomePage() {
  const [plants, setPlants] = useState([]);

  //get all indoor plants
  async function fetchPlants() {
    const url = `https://perenual.com/api/species-list?key=${import.meta.env.VITE_PERENUAL_API_KEY}&indoor=1`;
    const res = await fetch(url);
    const { data } = await res.json();
    setPlants(data);
  }
  useEffect(() => {
    if (plants.length === 0) fetchPlants();
  }, []);

  //get plants via search
  async function findPlants(searchTerm) {
    const url = `https://perenual.com/api/species-list?key=${import.meta.env.VITE_PERENUAL_API_KEY}=${searchTerm}`;
    const res = await fetch(url);
    const { data } = await res.json();
    setPlants(data);
  }

  return (
    <>
      <h1>This is the HomePage</h1>
       <SearchBar />
       <Gallery />
    </>
  );
}
