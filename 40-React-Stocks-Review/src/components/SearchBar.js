import React from 'react';

const SearchBar = ({ changeSort, sort, changeFilter}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input onChange={(event) => changeSort(event.target.value)} type="radio" value="Alphabetically" checked={sort === "Alphabetically" }/>
        Alphabetically
      </label>
      <label>
        <input onChange={(event) => changeSort(event.target.value)} type="radio" value="Price" checked={sort === "Price"}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => changeFilter(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
