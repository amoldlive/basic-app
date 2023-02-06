import { useState } from "react";
import   '../css/SearchBar.css'

function SearchBar({onSubmit}) {

    const [term ,setTeam] =useState('');

    const handleFormSubmit = (event) => {
    event.preventDefault(); // prevent from default behaviours
    //console.log("handling form submit");

    onSubmit(term);
  };

  const handleChange=(event)=>{
    //console.log(event.target.value)
    setTeam(event.target.value);
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit} className='search-bar'>
        <label>Enter Search Details </label>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}
export default SearchBar;
