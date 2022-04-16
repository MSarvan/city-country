import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className="btns">
                <Link to="/" ><button>Home</button></Link>
                <Link to="/add-city" ><button>Add city</button></Link>
                <Link to="/add-country" ><button>Add Country</button></Link>
            </div>
            <br />

        </div>
    )
}