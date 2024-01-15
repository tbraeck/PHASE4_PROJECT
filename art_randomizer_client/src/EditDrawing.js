import React, { useState } from 'react';

function EditDrawing({ user, drawing, handleUpdateUserDrawings, isEditFormVisible, setIsEditFormVisible }) {
  const [drawingBody, setDrawingBody] = useState({
    adjective: drawing.adjective,
    noun: drawing.noun,
    verb: drawing.verb,
    adverb: drawing.adverb,
    drawing_id: drawing.drawing_id,
  });
  const [errors, setErrors] = useState([]);

  const { adjective, noun, verb, adverb } = drawingBody;

  const handleDrawingChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDrawingBody({ ...drawingBody, [name]: value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const drawing_id = drawing.id;
    const user_id = user.id;

    fetch(`/users/${user_id}/user_drawings/${drawing_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(drawingBody),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((updatedDrawing) => {
          // setErrors([]);
          handleUpdateUserDrawings(updatedDrawing);
          setIsEditFormVisible(!isEditFormVisible);
        });
      } else {
        return r.json().then((error) => {
          console.error('Error response from server:', error);
          setErrors(error.errors);
          setTimeout(() => {
            setErrors(null);
          }, 3000);
        });
      }
    });
};


  return (
    <form className="newDrawingForm" onSubmit={handleSubmitEdit}>
      <input
        className="formInput"
        type="text"
        name="adjective"
        value={adjective}
        onChange={handleDrawingChange}
        placeholder="Enter title..."
      />
      <input
        className="formInput"
        type="text"
        name="noun"
        value={noun}
        onChange={handleDrawingChange}
        placeholder="Enter noun..."
      />
      <input
        className="formInput"
        type="text"
        name="verb"
        value={verb}
        onChange={handleDrawingChange}
        placeholder="Enter verb..."
      />
      <input
        className="formInput"
        type="text"
        name="adverb"
        value={adverb}
        onChange={handleDrawingChange}
        placeholder="Enter adverb..."
      />
        
   <button className="formButton" type="submit">
        Update
      </button>
      {errors && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}
    </form>
    
  );
}

export default EditDrawing;
