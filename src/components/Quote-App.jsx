import React from "react";
import axios from "axios";

function NewQuote(){

        const [Q, setQ] = React.useState({
          quote: "",
          author: ""
        });
      
        function getQ() {
            axios
            .get("http://quotes.stormconsultancy.co.uk/random.json")
            .then(res => {
               setQ({ quote: res.data.quote, author: res.data.author });
            })
        }
    
    return( 
        <div className="blockquote-wrapper">
        <div className="blockquote">
            <h1>{Q.quote}</h1>
            <h4>{Q.author}</h4>
        </div>
        <button onClick={getQ}>New Quote</button>
      </div>
    )
}


export default NewQuote




