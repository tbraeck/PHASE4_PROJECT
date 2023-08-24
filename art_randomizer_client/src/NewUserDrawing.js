
import React, { useState } from 'react';
// import { useParams } from 'react-router';

const NewUserDrawing = ({category, categories, setCategories, handleAdd, user}) => {
const [drawingFormData, setDrawingFormData] = useState({
    adjective: '',
    noun: '',
    verb: '',
    adverb: '',
    category_id: category.id,
    user_id: user.id
    })
console.log(category)
  const {adjective, noun, verb, adverb, category_id, user_id} = drawingFormData
  // console.log(resource)

console.log(drawingFormData)

const handleDrawingChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setDrawingFormData({...drawingFormData, [name] :value})
}
// console.log(subject.resources)
let categoryOptions = categories.map(category => (
  <option value={category.id} key={category.id} defaultValue={'Select'}>{category.name}</option>
))

const handleSubmitDrawing = (e) =>{
    e.preventDefault()

    const newDrawing = {
        adjective: '',
        noun: '',
        verb: '',
        adverb: '',
        category_id: "",
        user_id: user_id
    }
    fetch( "http://localhost:3000/api/user/drawings", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
        body: JSON.stringify(drawingFormData),
    })
        .then((r) => r.json())
        .then((newDrawingData) => {
          const newDrawingArray = {
            ...category, drawings: [category.drawings, newDrawingData]
           }
           const updatedCategories = categories.map(dr => dr.id === newDrawingData.category_id ? newDrawingArray : dr)

         setCategories(updatedCategories)
            setDrawingFormData(newDrawing)
        })
  }


return (
  <div className="newDrawingForm" key={user_id}>
    <div className="h2Wrapper">
      <h2 className="newDrawingH2">  <b>A</b>dd  <b>N</b>ew  <b>R</b>esources  <b>H</b>ere  </h2>
    </div>
        <br/><br/>
            <form className="form" onSubmit={handleSubmitDrawing}>
                  <input className="formInput" type="text" name="adjective" placeholder="adjective" value={adjective} onChange={handleDrawingChange} />
                  <input className="formInput" type="text" name="noun" placeholder="noun" value={noun} onChange={handleDrawingChange} />
                  <input className="formInput" type="text" name="verb" placeholder="verb" value={verb} onChange={handleDrawingChange} /> 
                  <input className="formInput" type="text" name="adverb" placeholder="adverb" value={adverb} onChange={handleDrawingChange} /> 
                  <select type="integer" name='category_id' value={category_id} defaultValue="None" onChange={handleDrawingChange}>
                    {categoryOptions}
                  </select>
                  {/* <select type="integer" name='user_id' value={user_id} defaultValue="None" onChange={handleDrawingChange}> */}

                <div>
                  <button className="formButton" type="submit">ADD</button>
                </div>
            </form>
</div>
  );
};

export default NewUserDrawing;
