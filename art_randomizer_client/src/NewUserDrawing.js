import React, { useState } from 'react';

const NewUserDrawing = ({ category, categories, setCategories, user }) => {
  const [drawingFormData, setDrawingFormData] = useState({
    adjective: '',
    noun: '',
    verb: '',
    adverb: '',
  });
  const [errors, setErrors] = useState({});


  const { adjective, noun, verb, adverb } = drawingFormData;

  const handleDrawingChange = (e) => {
    const { name, value } = e.target;
    setDrawingFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNewDrawing = (newDrawing) => {
    const updatedCategories = categories.map((categoryItem) =>
    categoryItem.id === category.id
      ? {
          ...categoryItem,
          drawings: [...categoryItem.drawings, newDrawing],
        }
      : categoryItem
  );
  setCategories(updatedCategories);
  setDrawingFormData({
    adjective: '',
    noun: '',
    verb: '',
    adverb: '',
  });
  }

  const handleSubmitDrawing = (e) => {
    e.preventDefault();
    
    const newDrawingData = {
      ...drawingFormData,
      category_id: category.id,
      user_id: user.id,
    };

    fetch('/drawings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDrawingData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newDrawing)=> {
            handleNewDrawing(newDrawing)})
            setErrors([])
        } else {
          r.json().then((err)=>setErrors(err.errors))
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving drawing:', error);
        setErrors('Error saving drawing');
       
      });
  };

  return (
    <div className='newDrawingForm'>
      <h2 className='newDrawingH2'>
        <b>N</b>&nbsp;<b>e</b>&nbsp;<b>w</b>&nbsp;&nbsp;&nbsp;<b>D</b>&nbsp;<b>r</b>&nbsp;<b>a</b>&nbsp;<b>w</b>&nbsp;<b>i</b>&nbsp;<b>n</b>&nbsp;<b>g</b>&nbsp;<b>s</b>&nbsp;
      </h2>
      <form className='form' onSubmit={handleSubmitDrawing}>
        <input
          className='formInput'
          type='text'
          name='adjective'
          placeholder='adjective'
          value={adjective}
          onChange={handleDrawingChange}
        />
        <input
          className='formInput'
          type='text'
          name='noun'
          placeholder='noun'
          value={noun}
          onChange={handleDrawingChange}
        />
        <input
          className='formInput'
          type='text'
          name='verb'
          placeholder='verb'
          value={verb}
          onChange={handleDrawingChange}
        />
        <input
          className='formInput'
          type='text'
          name='adverb'
          placeholder='adverb'
          value={adverb}
          onChange={handleDrawingChange}
        />
        <button className='formButton' type='submit'>
          ADD
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
    </div>
  );
};

export default NewUserDrawing;
