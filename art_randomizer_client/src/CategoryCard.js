import React, {useEffect, useState, useContext} from 'react'
import DrawingCard from './DrawingCard'
import NewUserDrawing from './NewUserDrawing'
import { useParams } from 'react-router-dom'
import { UserContext } from './contexts/UserContext';
import './styles/CategoryCard.css';

const CategoryCard = ({categories, setCategories, handleAdd}) => {
  const [category, setCategory] = useState({
    drawings: []
})
const [userDrawings, setUserDrawings] = useState([])
const { user } = useContext(UserContext);

const {id, userId, drawingId} = useParams()

const parsedUserId = parseInt(userId, 10);

useEffect(() => {
  const selectedCategory = categories.find(cat => cat.id === parseInt(id));
  if(selectedCategory) {
    setCategory(selectedCategory)
  }
}, [categories, id])

const handleSaveDrawingToUserProfile = (drawing) => {
  fetch(`http://localhost:3000/users/${user.id}/drawings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(drawing),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to save drawing to user profile');
      }
    })
    .then((savedDrawing) => {
      setUserDrawings([...userDrawings, savedDrawing]); // Add the saved drawing to the drawings state
      handleUpdateSubmit(savedDrawing); 
      console.log('Drawing saved to user profile:', savedDrawing);
    })
    .catch((error) => {
      console.error('Error saving drawing:', error);
    });
};

const handleDeleteClick = (user_id, drawing_id) => {
  fetch(`http://localhost:3000/users/${user_id}/drawings/${drawing_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": 'application/json'
    }
  })
  .then(() => {
    const deleteDrawing = category.drawings.filter(r => r.id !== id)
    const updatedDrawings = categories.map( c => c.id === category.id ? {...c, drawings: deleteDrawing} : c)
    setCategories(updatedDrawings)
    handleUpdateSubmit(id, deleteDrawing)
  })
  }
 
  const handleUpdateSubmit = (drawing_id, updatedDrawing) => {
    console.log('Old userDrawings:', userDrawings);
  console.log('Updated drawing:', updatedDrawing);
    fetch(`http://localhost:3000/users/${user.id}/user_drawings/${drawing_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDrawing),
    })
      .then(r => r.json())
      .then(savedDrawing => {
        console.log(savedDrawing)
        const updatedUserDrawings = userDrawings.map(drawing =>
          drawing.id === drawingId ? savedDrawing : drawing
        );
        setUserDrawings(updatedUserDrawings);
      });
  };

const catDrawings = category.drawings.map((drawing) => (
  <div key={drawing.id}>
    <DrawingCard
      drawing={drawing}
      user={{ id: parsedUserId }}
      category={category}
      categories={categories}
      handleDeleteClick={handleDeleteClick}
      handleUpdateSubmit={handleUpdateSubmit}
      handleSaveDrawingToUserProfile={handleSaveDrawingToUserProfile}
    />
  </div>
))

return(
<div className='category-container'>
      <div className='categoryBox'>
      <div className='subTitle'>
        <div className='categoryTitle'> 
        <h1>
          <u>CATEGORY</u>{' '}
        </h1>
        </div>
        <div className='catName'>
        <h1 >
          <em>{category.name}</em>
        </h1>
        </div>
       
      </div>
      <div className='grid-container'>
        <div className='drawingList'>
          <h2 className='drawingHead'>
            <u>
              <em>DRAWINGS:</em>
            </u>
          </h2>
          <div className='drawingGrid'>
            <ol>{catDrawings}</ol>
          </div>
         
        </div>
        <div className='newUserForm'>
          <NewUserDrawing
            categories={categories}
            setCategories={setCategories}
            category={category}
            handleAdd={handleAdd}
            user={user}
          />
        </div>
      </div>
</div>
</div>
);
};

export default CategoryCard;


// import React from 'react';
// import UserDrawings from './UserDrawings';

// const CategoryCard = ({ category, handleUpdateItem }) => {
//   const handleSaveDrawing = async (drawing) => {
//     try {
//       // Make an API call to save the drawing to the user's profile
//       const response = await fetch(`http://localhost:3000/users/${user.id}/drawings`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(drawing),
//       });

//       if (response.ok) {
//         // Update the user's drawings list
//         const savedDrawing = await response.json();
//         handleUpdateItem(savedDrawing); // Assuming you have a function to update user's drawings
//         console.log('Drawing saved to user profile:', savedDrawing);
//       } else {
//         console.error('Failed to save drawing to user profile');
//       }
//     } catch (error) {
//       console.error('Error saving drawing:', error);
//     }
//   };

//   return (
//     <div className="categoryCard">
//       {/* Other category card content */}
//       <UserDrawings user={user} handleSaveDrawing={handleSaveDrawing} />
//     </div>
//   );
// };

// export default CategoryCard;
