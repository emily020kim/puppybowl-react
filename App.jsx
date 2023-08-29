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
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/newplayerform" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
