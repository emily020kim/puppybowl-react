import { useState } from "react"
import "./NewPlayerForm.css";


export default function NewPlayerForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2305-ftb-pt-web-pt/players', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, breed, status, imageUrl }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding new player:', error);
        }
    }

    return (
      <div className="add-new-player">
        <h2>Add New Player!</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text"
            name="breed"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <input 
            type="text"
            name="status"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input 
            type="text"
            name="image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    )
  }