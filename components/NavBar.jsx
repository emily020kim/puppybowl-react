import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <>
        <div id="navbar">
            <ul>
                <Link to="/">All Dogs</Link>
                <Link to="/newplayerform">Add new dog</Link>
                <Link to="/search">Search</Link>
            </ul>
        </div>
        </>
    )
}