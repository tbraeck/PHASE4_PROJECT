import React, { useState } from 'react';
// import { useParams } from 'react-router';

function EditDrawing({  user, drawing, categories, handleUpdateSubmit, handleUpdateUserItem }) {
  
  console.log(drawing)
  console.log(user)
  const [newAdjective, setNewAdjective] = useState("");
    const [newNoun, setNewNoun] = useState("");
    const [newVerb, setNewVerb] = useState("");
    const [newAdverb, setNewAdverb] = useState("");
 
    const handleSubmitEdit = (e) => {
      e.preventDefault();
  
      const editedDrawing = {
        adjective: newAdjective,
        noun: newNoun,
        verb: newVerb,
        adverb: newAdverb,
      };
  
      fetch(`http://localhost:3000/users/${user.id}/drawings/${drawing.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedDrawing),
      })
        .then((response) => response.json())
        .then((updatedDrawing) => {
          setNewAdjective(updatedDrawing.adjective);
          setNewNoun(updatedDrawing.noun);
          setNewVerb(updatedDrawing.verb);
          setNewAdverb(updatedDrawing.adverb);
          handleUpdateSubmit(updatedDrawing);
        })
        .catch((error) => {
          console.error("Error updating drawing:", error);
        });
    };

  return (
    <form onSubmit={handleSubmitEdit}>
      <input
        type="text"
        value={newAdjective}
        onChange={(e) => setNewAdjective(e.target.value)}
        placeholder="Enter title..."
      />
       <input
        type="text"
        value={newNoun}
        onChange={(e) => setNewNoun(e.target.value)}
        placeholder="Enter noun..."
      />
       <input
        type="text"
        value={newVerb}
        onChange={(e) => setNewVerb(e.target.value)}
        placeholder="Enter verb..."
      />
       <input
        type="text"
        value={newAdverb}
        onChange={(e) => setNewAdverb(e.target.value)}
        placeholder="Enter adverb..."
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditDrawing;