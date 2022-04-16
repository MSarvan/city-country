import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../App.css";

export const Home = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6789/details`)
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((err) => console.log(err));
  }, []);

  console.log("details:", details);

  return (
    <div>
      <h3>Home</h3>
      <div className="btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/add-city">
          <button>Add city</button>
        </Link>
        <Link to="/add-country">
          <button>Add Country</button>
        </Link>
      </div>
      <br />
      <br />
      <table style={{ border: "1px solid #cecece" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #cecece" }}>id</th>
            <th style={{ border: "1px solid #cecece" }}>Country</th>
            <th style={{ border: "1px solid #cecece" }}>City</th>
            <th style={{ border: "1px solid #cecece" }}>Population</th>
            <th style={{ border: "1px solid #cecece" }}>Edit</th>
            <th style={{ border: "1px solid #cecece" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
            {details.map((e) => (
                <tr key={e.id}>
                    <td style={{ border: "1px solid #cecece" }}>{e.id}</td>
                    <td style={{ border: "1px solid #cecece" }}>{e.country}</td>
                    <td style={{ border: "1px solid #cecece" }}>{e.city}</td>
                    <td style={{ border: "1px solid #cecece" }}>{e.population}</td>
                    <td style={{ border: "1px solid #cecece" }}><button>Edit</button></td>
                    <td style={{ border: "1px solid #cecece" }}><button>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
