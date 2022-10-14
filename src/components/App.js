import React from "react";
import NewQuote from "./Quote-App";
import NewFact from "./Cat-Facts-App";

function App() {

  const [page, setPage] = React.useState(<NewQuote />);

  function getPage(event) {
    const {value} = event.target;
    value === "Quote" ?  setPage(<NewQuote />) : setPage(<NewFact />)
  };
  
  return (
    <div>
      <nav>
        <ul class="list-item">
        <button value="Quote" onClick={getPage}>Random Quotes</button>
        <button value="Cat" onClick={getPage}>Cat Facts</button>
        </ul>
      </nav>
     {page}
    </div>
  )
  
  

};

export default App;
