import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css";


export default function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://fsa-puppy-bowl.herokuapp.com/api/2305-ftb-pt-web-pt/players")
        .then((response) => response.json())
        .then(json => {
            //issue with filter function
            const results = json.filter((players) => {
                return (
                    value && 
                    players && 
                    players.name && 
                    players.name.toLowerCase().includes(value)
                )
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." 
            value={input} 
            onChange={(e) => handleChange(e.target.value)} 
            />
        </div>
    )
}