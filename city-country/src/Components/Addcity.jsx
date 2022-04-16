import { Link } from "react-router-dom";

export const Addcity = () => {
    return (
        <div>
            <h1>Add City</h1>
            <div className="btns">
                <Link to="/" ><button>Home</button></Link>
                <Link to="/add-country" ><button>Add Country</button></Link>
            </div>
            <br />
            <div>
                <input type="text" placeholder="Enter City name" />
                <input type="number" placeholder="Population" />
                <input type="text" placeholder="Enter Country name" />
            </div>
        </div>
    )
}