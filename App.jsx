import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from "./components/NavBar"
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/SinglePlayer"
import NewPlayerForm from "./components/NewPlayerForm"
import SearchBar from "./components/SearchBar"


function App() {

  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <h1>Puppy Bowl!</h1>

      <div id="dog-animation">
        <div className="dog-head">
          <img src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png" />
        </div>
      </div>

      <p>Create your dream team of puppies and decide which furry friend you would like to bring home!</p>

      <div className="main">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/newplayerform" element={<NewPlayerForm />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </div>
    </>
  )
}

export default App