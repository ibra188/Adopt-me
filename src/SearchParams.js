import { useState } from "react";
const SearchParams = () =>{
  //const location = "seattile, Wa";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  return(
    <div className="search-params">
      <form>
        <label htmlform="location">
               location
               <input id="location"
                      value={location}
                      placeholder="Location"
                      onChange={(e) => setLocation(e.target.value)}
               />       
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
