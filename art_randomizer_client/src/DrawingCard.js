import React, {useState} from 'react'

const DrawingCard = ({ drawing, handleAdd, user, category, category_id}) => {
const [addUserDrawing, setAddUserDrawing] = useState([])

  const {adjective, noun, verb, adverb} = drawing;


// console.log(drawing)
const handleAddClick = (e) => {
  e.preventDefault();

  const aDrawing = {
    adjective: adjective,
    noun: noun,
    verb: verb,
    adverb: adverb,
    category_id: category.id,
    user_id: user.id
  };

fetch("http://localhost:3000/api/user/drawings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(aDrawing),
})
  .then((r) => r.json())
  .then((newDrawing) => {
    setAddUserDrawing([...addUserDrawing, newDrawing])
  });
}

return (
    <div className='drawingCard'>
        <h1>The</h1>
        <h2>{adjective}</h2>
        <h2>{noun}</h2>
        <h2>{verb}</h2>
        <h2>{adverb}!</h2>
        <button onClick={handleAddClick} className='buttonDraw'>Add To Your Drawings</button>

    </div>
  )
}

export default DrawingCard
