import React from "react"
import "./style.css"

function Landing(){

    return (
        <>
            <div>
                <h1 className="topText">Welcome to GameCollectComplete!</h1>
            </div>

            <div className="questionBlock">
                <h3 className="introQ">What is GameCollectComplete?</h3>
                <p className="answerP">    Game collectors often run into the issue of games being <i>incomplete</i>. Be it missing the manual, some random inserts, or whatever else may have came with the game when new, a game isn't complete without EVERYTHING.
                Unfortunately, there aren't any websites which catalogue the various things that games come with.</p>

            </div>
        </>
    )

}

export default Landing