import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import  { fetchSinglePlayer } from "../API/ajaxHelpers";
import "./SinglePlayer.css";

export default function SinglePlayer() {
    const [player, setPlayer] = useState({});
    let { id } = useParams();

    function renderSinglePlayer() {
        return (
            <div className="player">
                <h2>{player.name}</h2>
                <h4>{player.breed}</h4>
                <h4>{player.status}</h4>
                <img src={player.imageUrl}/>
            </div>
        );
    }

    useEffect(() => {
        async function singlePlayerHandler() {
            const returnPlayer = await fetchSinglePlayer(id);
            setPlayer(returnPlayer);
        } singlePlayerHandler();
    }, [])

    return (
        <div>
            {renderSinglePlayer()}
        </div>
    )
}

