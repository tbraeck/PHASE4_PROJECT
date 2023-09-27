import React, { useState, useEffect } from 'react';

function EditDrawing({  user, drawing, handleUpdateUserDrawings, isEditFormVisible, setIsEditFormVisible }) {
  const [drawingBody, setDrawingBody] = useState({
        adjective: drawing.adjective,
        noun: drawing.noun,
        verb: drawing.verb,
    adverb: drawing.adverb,
        drawing_id: drawing.drawing_id
    })
    const [errors, setErrors] = useState({});

    useEffect(() => {
      // When the drawing prop changes (initial load or update), update the form data
      setDrawingBody({
        adjective: drawing.adjective,
        noun: drawing.noun,
        verb: drawing.verb,
        adverb: drawing.adverb,
      });
    }, [drawing]);

    const { adjective, noun, verb, adverb } = drawingBody;

    const handleDrawingChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setDrawingBody({...drawingBody, [name]:value})
      }
 
    const handleSubmitEdit = (e) => {
      e.preventDefault();

      const formErrors = {};
      if (!adjective.trim()) formErrors.adjective = 'Adjective is required.';
      if (!noun.trim()) formErrors.noun = 'Noun is required.';
      if (!verb.trim()) formErrors.verb = 'Verb is required.';
      if (!adverb.trim()) formErrors.adverb = 'Adverb is required.';

      if (Object.keys(formErrors).length > 0) {
        return;
      }
  
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
            {errors.adjective && <p className="error">{errors.adjective}</p>}

       <input
       className='formInput'
        type="text"
        name='noun'
        value={noun}
        onChange={handleDrawingChange}
        placeholder="Enter noun..."
      />
            {errors.noun && <p className="error">{errors.noun}</p>}

       <input
       className='formInput'
        type="text"
        name='verb'
        value={verb}
        onChange={handleDrawingChange}
        placeholder="Enter verb..."
      />
            {errors.verb && <p className="error">{errors.verb}</p>}

       <input
       className='formInput'
        type="text"
        name='adverb'
        value={adverb}
        onChange={handleDrawingChange}
        placeholder="Enter adverb..."
      />
            {errors.adverb && <p className="error">{errors.adverb}</p>}

      <button className='formButton' type="submit">Update</button>
    </form> 
);
};

export default EditDrawing;

