import React, { useEffect, useState } from "react";
import "./style.css"
import API from "../../utils/API"
import { List, ListItem } from "../../components/List"

function Search() {

    const [game, setGame] = useState("")
    const [gamelist, setGamelist] = useState([])
    const [gameimage, setGameimage] = useState([])

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
        // console.log("game img updated")
        const games = [...gamelist]
        const images = games.map(game => game.cover)
        
        // games.forEach((game) =>{

        //     API.findGameCover(game.cover)
        //         .then(res => game.image = res)

        // })

        const CoverArtPromiseArr = images.map(image => {return API.findGameCover(image)})
        Promise.all(CoverArtPromiseArr).then(res => {
            res.forEach((url, index) => {
            games[index].cover = url})
            setGameimage(games)
        })
        


        //promise.all
        //async await?
        
        // console.log(games)



    }, [gamelist])


    return (

        <div>

            <form onSubmit={handleSubmit}>
                <label className="searchLabel">
                    Search for a Game:
                <input className="searchInput" type="text" value={game} onChange={e => setGame(e.target.value)} />
                </label>
                <input type="submit" value="Search" />
            </form>
            {gameimage.length ? (
            
            <List>
                {/* {console.log("Game Image: ", gameimage)}
                {console.log("Game Object: ", gameimage[0])}
                {console.log("Game URL: ", gameimage[0].cover)}
                {console.log("Game Name: ", gameimage[0].name)} */}
                {gameimage.map(game => {
                    // console.log("Game: ", game, "Game Image: ", game.cover)
                    return (
                    
                    <ListItem key={game.id}>
                        <img alt={game.name} src={game.cover}/>
                        <strong>
                            {game.name}
                        </strong>
                        <button>View Game</button>
                    </ListItem>
            
                )})}

            </List>): ""}

        </div>

    )

}

export default Search