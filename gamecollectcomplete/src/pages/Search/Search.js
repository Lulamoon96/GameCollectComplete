import React, { useEffect, useState } from "react";
import "./style.css"

function Search(){

    const [game, setGame] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searched game ${game}`)
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label className="searchLabel">
                Search for a Game: 
                <input className="searchInput" type="text" value = {game} onChange={e => setGame(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
        </form>
      </div>

    )

}

export default Search