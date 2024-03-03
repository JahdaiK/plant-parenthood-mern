import React, { useState } from "react";

export default function SearchBar({ findPlants, setPlants, fetchPlants }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    if (query.length < 1) {
      setPlants([]);
      fetchPlants();
    } else {
      findPlants(query);
    }
  }

  return (
    <>
      <div className="bg-[#C2AD97] p-14">
        <form onSubmit={handleSubmit}>
          <div class="sm:flex items-center bg-white overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2"
              name="search"
              placeholder="Search for plant by name"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button class="bg-[#0F6359] text-white text-base rounded-md rounded-sm px-4 py-2 font-bold">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
