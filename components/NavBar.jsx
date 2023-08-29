import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
        <div id="navbar">
            <Link to="/">All Players</Link>
            <Link to="/newplayerform">Create New Player</Link>
        </div>
        </>
    )
}