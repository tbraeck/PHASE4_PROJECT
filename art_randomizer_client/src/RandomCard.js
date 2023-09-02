import React from 'react'

function RandomCard({ noun, adjective, verb, adverb, handleAdd }) {

  const handleAddClick = (e) => {
    e.preventDefault();

    const aDrawing = {
      adjective: adjective,
      noun: noun,
      verb: verb,
      adverb: adverb
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
      handleAdd(newDrawing)
    });

}

  return (
    <div>
    <div className='randoCardBlank'>
      <ul>
        <p>
          Today you will be drawing a(n) <b>{adjective}</b> <b>{noun}</b>&nbsp;
          <br></br>
          that (is)
          <b>{verb}</b> <b>{adverb}</b>&nbsp;!
        </p>
        <button onClick={handleAddClick}>SAVE DRAWING</button>
      </ul>
    </div>
    </div>
  )
}

export default RandomCard