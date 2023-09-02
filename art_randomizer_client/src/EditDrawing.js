import React, { useState } from 'react';

function EditDrawing({  user, drawing, handleUpdateUserDrawings, isEditFormVisible, setIsEditFormVisible }) {
  const [drawingBody, setDrawingBody] = useState({
        adjective: drawing.adjective,
        noun: drawing.noun,
        verb: drawing.verb,
    adverb: drawing.adverb,
        drawing_id: drawing.drawing_id
    })
   
    const {adjective, noun, verb, adverb} = drawingBody;

    const handleDrawingChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setDrawingBody({...drawingBody, [name]:value})
      }
 
    const handleSubmitEdit = (e) => {
      e.preventDefault();
      let drawing_id = drawing.id;
      let user_id = user.id;

      fetch(`http://localhost:3000/users/${user_id}/user_drawings/${drawing_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(drawingBody),
      })
        .then((response) => response.json())
        .then((updatedDrawing) => {
          console.log(updatedDrawing)
          handleUpdateUserDrawings(updatedDrawing);
          setIsEditFormVisible(!isEditFormVisible);
        })
        .catch((error) => {
          console.error("Error updating drawing:", error);
        });
    };

  return (

    <form className='newDrawingForm' onSubmit={handleSubmitEdit}>
      <input
      className='formInput'
        type="text"
        name='adjective'
        value={adjective}
        onChange={handleDrawingChange}
        placeholder="Enter title..."
      />
       <input
       className='formInput'
        type="text"
        name='noun'
        value={noun}
        onChange={handleDrawingChange}
        placeholder="Enter noun..."
      />
       <input
       className='formInput'
        type="text"
        name='verb'
        value={verb}
        onChange={handleDrawingChange}
        placeholder="Enter verb..."
      />
       <input
       className='formInput'
        type="text"
        name='adverb'
        value={adverb}
        onChange={handleDrawingChange}
        placeholder="Enter adverb..."
      />
      <button className='formButton' type="submit">Update</button>
    </form> 
);
};

export default EditDrawing;

