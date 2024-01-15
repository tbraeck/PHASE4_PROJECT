import React, { useState, useContext } from 'react';
import DrawingCard from './DrawingCard';
import NewUserDrawing from './NewUserDrawing';
import { useParams } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { CategoryContext } from './contexts/CategoryContext.js';

import './styles/CategoryCard.css';

const CategoryCard = ({ handleAdd }) => {
  const {allCategories, setAllCategories} = useContext(CategoryContext);
  const { user } = useContext(UserContext);
const [userDrawings, setUserDrawings] = useState([])
const {category, setCategory} = useState([])

const [errors, setErrors] = useState([]);


const {id} = useParams()

const isUserProfile = user.username !== allCategories.name;

const selectedCategory = allCategories.find(cat => cat.id === parseInt(id));
  
if(!selectedCategory) {
return <div>Loading...</div>;
  }

const handleSaveDrawingToUserProfile = (drawing) => {
  if (!isUserProfile) {
    return {
      success: false,
      message: "Saving drawings is not allowed in your profile.",
    };
  }

  return fetch(`/users/${user.id}/user_drawings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(drawing),
  })
    .then((res) => {
      if (res.ok) {
        return res.json().then((savedDrawing) => {
          setUserDrawings([...userDrawings, savedDrawing]);
          return (
            alert("Drawing saved to profile!")
        )
          });
      } else {
          res.json().then((error) => setErrors(error.errors))
          setTimeout(() => {
            setErrors(null);
          }, 3000);
          return;
        }
    })
    .catch((error) => {
      console.error('Error saving drawing:', error);
      return {
        success: false,
        message: error.message,
      };
    });
};



const handleDeleteClick = (user_id, drawing_id) => {
  fetch(`/users/${user_id}/user_drawings/${drawing_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete drawing');
      }
      return response.json();
    })
    .then(() => {
      const deleteDrawing = allCategories.drawings.filter(r => r.id !== drawing_id);
      const updatedDrawings = allCategories.map(c => c.id === allCategories.id ? { ...c, drawings: deleteDrawing } : c);
      setAllCategories(updatedDrawings);
      handleUpdateSubmit(drawing_id, deleteDrawing);
    })
    .catch((error) => {
      console.error('Error deleting drawing:', error);
    });
};

const handleUpdateSubmit = (drawing_id, updatedDrawing) => {
  fetch(`/users/${user.id}/user_drawings/${drawing_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedDrawing),
  })
    .then(r => r.json())
    .then(savedDrawing => {
      console.log(savedDrawing);
      const updatedUserDrawings = userDrawings.map(drawing =>
        drawing.id === drawing_id ? savedDrawing : drawing
      );
      setUserDrawings(updatedUserDrawings);
    })
    .catch((error) => {
      console.error('Error updating drawing:', error);
    });
};

const catDrawings = category.drawings.map((drawing) => (
  <div key={drawing.id}>
    <DrawingCard
     drawing={drawing}
     user={user}
     category={category}
     categories={allCategories}
     handleDeleteClick={handleDeleteClick}
     isUserProfile={isUserProfile}
     handleUpdateSubmit={handleUpdateSubmit}
     handleSaveDrawingToUserProfile={handleSaveDrawingToUserProfile}
    />
  </div>
))

  return (
    <div className="category-container">
      <div className="categoryBox">
        <div className="subTitle">
          <div className="catName">
            <h1>
              <em>{category.name}</em>
            </h1>
          </div>
        </div>
        <div className="grid-container">
          <div className="drawingList">
            <div className="drawingGrid">
              <ul className="catDrawings">{catDrawings}</ul>
            </div>
          </div>
          <div className="grid-container">
            <div className="drawingList">
              <div className="drawingGrid">
                <ul className="catDrawings">{catDrawings}</ul> 
              </div>
            </div>
            <div className="newUserForm">
              <NewUserDrawing
                allCategories={allCategories}
                setAllCategories={setAllCategories}
                category={category}
                handleAdd={handleAdd}
                user={user}
              />
            </div>
            {errors && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
