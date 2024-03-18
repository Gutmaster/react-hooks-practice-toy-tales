import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, donateToy}) {
  return (
    <div id="toy-collection">{toyList.map(toy => <ToyCard key={toy.id} toy={toy} donateToy={donateToy}/>)}</div>
  );
}

export default ToyContainer;
