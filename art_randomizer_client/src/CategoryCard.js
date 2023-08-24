import React, {useEffect, useState, useContext} from 'react'
import DrawingCard from './DrawingCard'
import Randomizer from './Randomizer'
import NewUserDrawing from './NewUserDrawing'
// import UserDrawings from './UserDrawings'
import UserProfile from './UserProfile'
import { useParams } from 'react-router-dom'
import { UserContext } from './contexts/UserContext';
import UserProfile from './UserProfile'


const CategoryCard = ({categories, setCategories, onAddDrawing, handleAdd}) => {
  const [category, setCategory] = useState({
    drawings: []
})
const {user} = useContext(UserContext);

const {id} = useParams()

useEffect(() => {
  const selectedCategory = categories.find(cat => cat.id === parseInt(id));
  if(selectedCategory) {
    setCategory(selectedCategory)
  }
}, [categories, id])

const handleDeleteClick = (id) => {
  fetch(`http://localhost:3000/drawings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": 'application/json'
    }
  })
  .then(() => {
    const deleteDrawing = category.drawings.filter(r => r.id !== id)
    const updatedDrawings = categories.map( c => c.id === category.id ? {...setCategories, drawings: deleteDrawing} : c)
  setCategories(updatedDrawings)
  })

}


const drawings = category.drawings.map((drawing) => (
  <div key={drawing.id}>
    <DrawingCard  drawing={drawing}  handleDeleteClick={handleDeleteClick} handleAdd={handleAdd} categoryID={category.id} user={user} />
</div>
))

  return (
    <div className='categoryBox'>
      <div className='subTitle'>
          <h1><u>Category:</u> </h1>
          <h1><em>{category.name}</em></h1>
      </div>
      <div className='drawingList'>
        <h2>
          <u><em>Drawings:</em></u>
        </h2>
          <ol>{drawings}</ol>
      </div>
      <NewUserDrawing categories={categories} setCategories={setCategories} category={category} handleAdd={handleAdd} user={user}/>
          <div className='newResForm'>
              <Randomizer      category={category} categories={categories} setCategories={setCategories}  />
          </div>
          {user && <UserProfile category={category} setCategories={setCategories} categories={categories}/>}

      </div>
  )
}

export default CategoryCard
