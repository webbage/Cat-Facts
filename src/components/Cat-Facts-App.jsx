import React from "react";
import axios from "axios";
import ringer from "../img/meow.wav";

function NewFact(){



        const audio = new Audio(ringer);
        const [Fact, setFact] = React.useState();
        function getF() {
            axios
            .get("https://catfact.ninja/fact")
            .then(res => { setFact(res.data.fact) })
            .then(res => { audio.play() })
        };
    
    return( 
        <div className="blockFacts-wrapper">
        <div className="blockFacts">
            <h1>{Fact}</h1>
        </div>
            <button onClick={getF}>New Fact</button>
        </div>
        
    )
}


export default NewFact