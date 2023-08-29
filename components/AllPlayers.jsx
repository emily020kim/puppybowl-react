import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer, fetchAllPlayers } from "../API/ajaxHelpers";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    function renderAllPlayers() {
        return players.map((player) => {
            return (
                <div key={player.id} className="players">
                <h2>{player.name}</h2>
                <h4>{player.breed}</h4>
                <h4>{player.status}</h4>
                <img src={player.imageUrl}/>
                <button onClick = {() => navigate(`/players/${player.id}`)}>See Details</button>
                <button onClick = {() => handleDelete(player.id)}>Delete</button>
            </div>
            )
        });
    }
            
    useEffect(() => {
        async function allPlayerHandler() {
            const returnPlayer = await fetchAllPlayers();
            setPlayers(returnPlayer.data.players);
        } allPlayerHandler();
    }, [])

    const handleDelete = async (playerId) => {
        await deletePlayer(playerId);
        const returnPlayer = await fetchAllPlayers();
        setPlayers(returnPlayer.data.players);
        console.log("player id", playerId);
    };

    return (
        <div>
            {renderAllPlayers()};
        </div>
    );
}