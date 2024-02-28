import React, { useState } from "react";

export default function SearchBar({ findPlants, setPlants, fetchPlants }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event);
    if (query.length < 1){
        setPlants([]);
        fetchPlants();
    } else {
        findPlants(query)
    }
  }

  return (
    <>
      <div className="pb-10">
        <form onSubmit={handleSubmit} className="mt-4 text-center">
          <input
            className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            name="search"
            placeholder="Search for plant by name"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" className="">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
