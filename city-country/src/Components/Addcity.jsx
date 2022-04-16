import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdatedData } from "../Redux/action";

export const Addcity = () => {
  const [cityname, setCityname] = useState("");
  const [population, setPopulation] = useState("");
  const [countryname, setCountryname] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
      alert("Updated successfully");
    const citydetails = {
      city: cityname,
      population: population,
      country: countryname,
    };
    dispatch(UpdatedData(citydetails));
  };

  return (
    <div>
      <h3>Add City</h3>
      <div className="btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/add-country">
          <button>Add Country</button>
        </Link>
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter City name"
          value={cityname}
          onChange={(e) => {
            setCityname(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Population"
          value={population}
          onChange={(e) => {
            setPopulation(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Country name"
          value={countryname}
          onChange={(e) => {
            setCountryname(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={handleSubmit} disabled={!cityname || !population || !countryname}>Submit</button>
      </div>
    </div>
  );
};
