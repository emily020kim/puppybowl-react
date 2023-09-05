import { useState, useEffect } from 'react'
import { fetchAllPlayers } from '../API/ajaxHelpers'
import './SearchBar.css'

export default function SearchBar() {
  const [players, setPlayers] = useState([]);
  const [state, setState] = useState({
    query: '',
    list: []
  })
console.log("players", players);
  const handleChange = async (e) => {
    const results = players.data.players.filter(player => {
      if (e.target.value === "") return players
      return player.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setState({
      query: e.target.value,
      list: results
    })
  }

  useEffect(() => {
    async function allPlayersHandler() {
      const result = await fetchAllPlayers();
      console.log("results", result);
      setPlayers(result);
    }
    allPlayersHandler();
  }, [])

  return (
    <div className="search-results">
      <form>
        <label> Search
          <input onChange={handleChange} value={state.query} type="search"  className="searchTerm" placeholder="Search for your dog..." />
        </label>
      </form>
      <ul>
        {(state.query === '' ? "" : state.list.map(player => {
          return <li key={player.name}>{player.name}</li>
        }))}
      </ul>
    </div>
  )
}