import React, {useState} from "react";



function ToyCard({toy, donateToy}) {
  const [likes, setLikes] = useState(toy.likes)

  function handleLike(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        likes: likes+1
      })
    }).then(() => setLikes(likes+1))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
