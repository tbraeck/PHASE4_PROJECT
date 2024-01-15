import React, { useState, useEffect } from 'react';

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
<<<<<<< HEAD
    .then((r) => {
      if (r.ok) {
        r.json().then((updatedDrawing) => {
          // setErrors([]);
=======
    const [errors, setErrors] = useState({});

    useEffect(() => {
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

      setErrors(formErrors); 

      if (Object.keys(formErrors).length > 0) {
        setTimeout(() => {
          setErrors({}); 
        }, 3000);
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
>>>>>>> new-name/Tate-Main
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
<<<<<<< HEAD
      <input
        className="formInput"
=======
            {errors.adjective && <p className="error-message">{errors.adjective}</p>}

       <input
       className='formInput'
>>>>>>> new-name/Tate-Main
        type="text"
        name="noun"
        value={noun}
        onChange={handleDrawingChange}
        placeholder="Enter noun..."
      />
<<<<<<< HEAD
      <input
        className="formInput"
=======
            {errors.noun && <p className="error-message">{errors.noun}</p>}

       <input
       className='formInput'
>>>>>>> new-name/Tate-Main
        type="text"
        name="verb"
        value={verb}
        onChange={handleDrawingChange}
        placeholder="Enter verb..."
      />
<<<<<<< HEAD
      <input
        className="formInput"
=======
            {errors.verb && <p className="error-message">{errors.verb}</p>}

       <input
       className='formInput'
>>>>>>> new-name/Tate-Main
        type="text"
        name="adverb"
        value={adverb}
        onChange={handleDrawingChange}
        placeholder="Enter adverb..."
      />
<<<<<<< HEAD
        
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
=======
            {errors.adverb && <p className="error-message">{errors.adverb}</p>}

      <button className='formButton' type="submit">Update</button>
    </form> 
);
};
>>>>>>> new-name/Tate-Main

export default EditDrawing;
