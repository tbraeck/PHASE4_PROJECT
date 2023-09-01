import React, { useState } from 'react';

const NewUserDrawing = ({ category, categories, setCategories, user }) => {
  // Initialize drawing form data state
  const [drawingFormData, setDrawingFormData] = useState({
    adjective: '',
    noun: '',
    verb: '',
    adverb: '',
  });

  // Destructure form data
  const { adjective, noun, verb, adverb } = drawingFormData;

  // Update form data on input change
  const handleDrawingChange = (e) => {
    const { name, value } = e.target;
    setDrawingFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle drawing form submission
  const handleSubmitDrawing = (e) => {
    e.preventDefault();

    // Prepare new drawing data
    const newDrawingData = {
      ...drawingFormData,
      category_id: category.id,
      user_id: user.id,
    };

    // Make a POST request to add new drawing
    fetch('http://localhost:3000/drawings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDrawingData),
    })
      .then((response) => response.json())
      .then((newDrawing) => {
        // Update categories with new drawing
        const updatedCategories = categories.map((categoryItem) =>
          categoryItem.id === category.id
            ? {
                ...categoryItem,
                drawings: [...categoryItem.drawings, newDrawing],
              }
            : categoryItem
        );

        // Update state with updated categories
        setCategories(updatedCategories);

        // Reset form data
        setDrawingFormData({
          adjective: '',
          noun: '',
          verb: '',
          adverb: '',
        });
      })
      .catch((error) => {
        console.error('Error saving drawing:', error);
      });
  };

  return (
    <div className="newDrawingForm">
      <div className="h2Wrapper">
        <h2 className="newDrawingH2">
          <b>A</b>dd <b>N</b>ew <b>D</b>rawings <b>H</b>ere
        </h2>
      </div>
      <br />
      <br />
      <form className="form" onSubmit={handleSubmitDrawing}>
        <input
          className="formInput"
          type="text"
          name="adjective"
          placeholder="adjective"
          value={adjective}
          onChange={handleDrawingChange}
        />
        <input
          className="formInput"
          type="text"
          name="noun"
          placeholder="noun"
          value={noun}
          onChange={handleDrawingChange}
        />
        <input
          className="formInput"
          type="text"
          name="verb"
          placeholder="verb"
          value={verb}
          onChange={handleDrawingChange}
        />
        <input
          className="formInput"
          type="text"
          name="adverb"
          placeholder="adverb"
          value={adverb}
          onChange={handleDrawingChange}
        />
        <div>
          <button className="formButton" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserDrawing;
