import { useState } from "react";
import { Link } from "react-router-dom";

export const Addcountry = () => {
  const [countryname, setCountryname] = useState("");

  const handleSubmit = () => {
    const contdetails = {
      country: countryname,
    };
  };

  return (
    <div>
      <h1>Add Country</h1>
      <div className="btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/add-city">
          <button>Add city</button>
        </Link>
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter Country name"
          value={countryname}
          onChange={(e) => {
            setCountryname(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
