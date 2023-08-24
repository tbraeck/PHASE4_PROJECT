import React, { useState } from "react";

function NewDrawingForm({ handleAdd }) {
  const [formData, setFormData] = useState({
    adjective: "",
    noun: "",
    verb: "",
    adverb: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const aDrawing = {
      ...formData,
      likes: 0,
    };

    fetch("/drawings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aDrawing),
    })
      .then((r) => r.json())
      .then((newDrawing) => {
        setFormData({
            adjective: "",
            noun: "",
            verb: "",
            adverb: ""
        });
        handleAdd(newDrawing);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a drawing idea!</h3>
        <input
          type="text"
          name="adjective"
          onChange={handleChange}
          value={formData.adjective}
          placeholder="Enter an adjective..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="noun"
          onChange={handleChange}
          value={formData.noun}
          placeholder="Enter a noun..."
          className="input-text"
        />
         <br />
        <input
          type="text"
          name="verb"
          onChange={handleChange}
          value={formData.verb}
          placeholder="Enter a verb..."
          className="input-text"
        />
         <br />
        <input
          type="text"
          name="adverb"
          onChange={handleChange}
          value={formData.adverb}
          placeholder="Enter an adverb..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Drawing Idea"
          className="submit"
        />
      </form>
    </div>
  );
}

export default NewDrawingForm;