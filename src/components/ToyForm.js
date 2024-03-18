import React, {useState} from "react";

function ToyForm({submitToy}) {
  console.log(submitToy)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    submitToy(name, image)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e)=>handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          onChange={(e)=>setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input
          onChange={(e)=>setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
