import React, { useState } from 'react';

const NewUserDrawing = ({ category, categories, setCategories, user }) => {
  const [drawingFormData, setDrawingFormData] = useState({
    adjective: '',
    noun: '',
    verb: '',
    adverb: '',
  });
  const [errors, setErrors] = useState({});

  const [errors, setErrors] = useState([]);

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
<<<<<<< HEAD
    
=======

    const formErrors = {};
    if (!adjective.trim()) {
      formErrors.adjective = 'Adjective is required.';
    }
    if (!noun.trim()) {
      formErrors.noun = 'Noun is required.';
    }
    if (!verb.trim()) {
      formErrors.verb = 'Verb is required.';
    }
    if (!adverb.trim()) {
      formErrors.adverb = 'Adverb is required.';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return; 
    }

    setErrors({});

>>>>>>> new-name/Tate-Main
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
<<<<<<< HEAD
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
=======
      .then((response) => response.json())
      .then((newDrawing) => {
        const updatedCategories = categories.map((categoryItem) =>
          categoryItem.id === category.id
            ? {
                ...categoryItem,
                drawings: [...categoryItem.drawings, newDrawing],
              }
            : categoryItem
        );

        console.log(updatedCategories)
        setCategories(updatedCategories);
        setDrawingFormData({
          adjective: '',
          noun: '',
          verb: '',
          adverb: '',
        });
>>>>>>> new-name/Tate-Main
      })
      .catch((error) => {
        console.error('Error saving drawing:', error);
        setErrors('Error saving drawing');
       
      });
  };

<<<<<<< HEAD
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
=======
return (
  <div className="newDrawingForm">
  <h2 className="newDrawingH2">
    <b>N</b>&nbsp;<b>e</b>&nbsp;<b>w</b>&nbsp;&nbsp;&nbsp;<b>D</b>&nbsp;<b>r</b>&nbsp;<b>a</b>&nbsp;<b>w</b>&nbsp;<b>i</b>&nbsp;<b>n</b>&nbsp;<b>g</b>&nbsp;<b>s</b>&nbsp;
  </h2>
  <form className="form" onSubmit={handleSubmitDrawing}>
    <input
      className="formInput"
      type="text"
      name="adjective"
      placeholder="adjective"
      value={adjective}
      onChange={handleDrawingChange}
      
    />
        {errors.adjective && <p className="error-message">{errors.adjective}</p>}
    <input
      className="formInput"
      type="text"
      name="noun"
      placeholder="noun"
      value={noun}
      onChange={handleDrawingChange}
    />
          {errors.noun && <p className="error-message">{errors.noun}</p>}
    <input
      className="formInput"
      type="text"
      name="verb"
      placeholder="verb"
      value={verb}
      onChange={handleDrawingChange}
    />
          {errors.verb && <p className="error-message">{errors.verb}</p>}
    <input
      className="formInput"
      type="text"
      name="adverb"
      placeholder="adverb"
      value={adverb}
      onChange={handleDrawingChange}
    />
          {errors.adverb && <p className="error-message">{errors.adverb}</p>}
    <button className="formButton" type="submit">
      ADD
    </button>
  </form>
</div>
>>>>>>> new-name/Tate-Main
  );
};

export default NewUserDrawing;
