const PLAYERS_API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2305-ftb-pt-web-pt/players';

export async function fetchAllPlayers() {
    try {
        const response = await fetch(PLAYERS_API_URL);
        const players = await response.json();
        console.log(players);
        return players;
    }catch (error) {
        console.error('Uh oh trouble fetching players', error);
    }
}

export async function fetchSinglePlayer(playerId) {
    try {
        const response = await fetch(`${PLAYERS_API_URL}/${playerId}`);
        const playerData = await response.json();
        const player = playerData.data.player;
        return player;
    } catch (error) {
        console.error(`Oh no trouble fetching player #${playerId}!`, error);
    }
}

export async function deletePlayer(playerId) {
    try {
        const response = await fetch(`${PLAYERS_API_URL}/${playerId}`, {
            method: 'DELETE',
        });
        const deletePlayerData = await response.json();
        return deletePlayerData.data;
    } catch (error) {
        console.error(`Oh no trouble deleting player #${playerId}!`, error);
    }
}

export async function fetchPlayersList() {
    try {
        const response = await fetch(PLAYERS_API_URL);
        const players = await response.json();
        console.log(players);
        return players;
    }catch (error) {
        console.error('Uh oh trouble fetching players', error);
    }
}