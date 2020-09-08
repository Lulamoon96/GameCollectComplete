import React, { useEffect, useState } from "react";
import "./style.css"
import API from "../../utils/API"
import { List, ListItem } from "../../components/List"

function Search() {

    const [game, setGame] = useState("")
    const [gamelist, setGamelist] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!game) {
            return;
        }
        API.searchGame(game)
            .then(games => {
                if (games.data.length === 0) {
                    alert("No results found.")
                    throw new Error("No results found.");
                }
                if (games.data.status === "error") {
                    throw new Error(games.data.message);
                }
                setGamelist(games.data)
            })
            .catch(err => console.log(err))
        
    }

    useEffect(() => {

        gamelist.forEach(game =>{

            API.findGameCover(game.cover)
                .then(res => game.cover = res)

        })

    }, [gamelist])


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label className="searchLabel">
                    Search for a Game:
                <input className="searchInput" type="text" value={game} onChange={e => setGame(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {gamelist.length ? (
            
            <List>
                {gamelist.map(game => (

                    <ListItem key={game.id}>
                        <img src={game.cover}/>
                        <strong>
                            {game.name}
                        </strong>
                    </ListItem>

                ))}

            </List>): ""}

        </div>

    )

}

export default Search