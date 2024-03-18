import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(fetchToys, [])

  function fetchToys(){
    fetch('http://localhost:3001/toys')
    .then(response=>response.json())
    .then(data => {
      setToyList(data) 
    })
  }

  function submitToy(name, image){
    fetch(`http://localhost:3001/toys/`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
      })
    }).then(response=>response.json())
    .then(() => fetchToys())
  }

  function donateToy(id){
    fetch(`http://localhost:3001/toys/${id}`, {method: 'DELETE'})
    .then(() => fetchToys())
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm submitToy={submitToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} donateToy={donateToy}/>
    </>
  );
}

export default App;
