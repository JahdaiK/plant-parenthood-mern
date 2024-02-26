import { useState, useEffect } from "react";

export default function HomePage() {
  const [plants, setPlants] = useState([]);

  //get all indoor plants
  async function fetchPlants() {
    const url =
      "https://perenual.com/api/species-list?key=sk-Tsec65dca9e466d594369&indoor=1";
    const res = await fetch(url);
    const { data } = await res.json();
    setPlants(data);
  }
  useEffect(() => {
    if(plants.length===0) fetchPlants();
  }, []);

  //get plants via search
  async function findPlants(searchTerm) {
    const url = `https://perenual.com/api/species-list?key=sk-Tsec65dca9e466d594369&q=${searchTerm}`;
    const res = await fetch(url);
    const { data } = await res.json();
    setPlants(data);
  }
 
  return (
    <>

      <h1>This is the HomePage</h1>
    </>
  );
}
