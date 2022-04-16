import { Link } from "react-router-dom";

export const Addcountry = () => {
    return (
        <div>
            <h1>Add Country</h1>
            <div className="btns">
                <Link to="/" ><button>Home</button></Link>
                <Link to="/add-city" ><button>Add city</button></Link>
            </div>
            <br />
            <div>
                <input type="text" placeholder="Enter Country name" />
            </div>
        </div>
    )
}