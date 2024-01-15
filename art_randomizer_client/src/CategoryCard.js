import React, { useEffect, useState, useContext } from 'react';
import DrawingCard from './DrawingCard';
import NewUserDrawing from './NewUserDrawing';
import { useParams } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import './styles/CategoryCard.css';

const CategoryCard = ({ categories, setCategories, handleAdd }) => {
  const [category, setCategory] = useState({
<<<<<<< HEAD
    drawings: []
})
const [userDrawings, setUserDrawings] = useState([])

const [errors, setErrors] = useState([]);

const { user } = useContext(UserContext);

const {id} = useParams()

const isUserProfile = user.username !== category.name;


useEffect(() => {
  const selectedCategory = categories.find(cat => cat.id === parseInt(id));
  if(selectedCategory) {
    setCategory(selectedCategory)
  }
}, [categories, id])

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
=======
    drawings: [],
  });
  const [userDrawings, setUserDrawings] = useState([])
  const { user } = useContext(UserContext);
  const { id} = useParams();

  const isUserProfile = user.username !== category.name
  
  useEffect(() => {
    const selectedCategory = categories.find(cat => cat.id === parseInt(id));
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [categories, id]);

  const handleSaveDrawingToUserProfile = (drawing) => {
    fetch(`http://localhost:3000/users/${user.id}/user_drawings`, {
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
        setUserDrawings([...userDrawings, savedDrawing]);
        console.log('Drawing saved to user profile:', savedDrawing);
      })
      .catch((error) => {
        console.error('Error saving drawing:', error);
      });
  };

  const handleDeleteClick = (user_id, drawing_id) => {
    fetch(`http://localhost:3000/users/${user_id}/user_drawings/${drawing_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
      },
    })
>>>>>>> new-name/Tate-Main
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete drawing');
      }
      return response.json();
<<<<<<< HEAD
    })
    .then(() => {
      const deleteDrawing = category.drawings.filter(r => r.id !== drawing_id);
      const updatedDrawings = categories.map(c => c.id === category.id ? { ...c, drawings: deleteDrawing } : c);
      setCategories(updatedDrawings);
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
     categories={categories}
     handleDeleteClick={handleDeleteClick}
     isUserProfile={isUserProfile}
     handleUpdateSubmit={handleUpdateSubmit}
     handleSaveDrawingToUserProfile={handleSaveDrawingToUserProfile}
    />
  </div>
))
=======
    })
      .then(() => {
        const deleteDrawing = category.drawings.filter(r => r.id !== drawing_id);
        const updatedDrawings = categories.map(c => c.id === category.id ? { ...c, drawings: deleteDrawing } : c);
        setCategories(updatedDrawings);
        handleUpdateSubmit(drawing_id, deleteDrawing);
      })
      .catch((error) => {
        console.error('Error deleting drawing:', error);
      });
  };

  const handleUpdateSubmit = (drawing_id, updatedDrawing) => {
    fetch(`http://localhost:3000/users/${user.id}/user_drawings/${drawing_id}`, {
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

  const catDrawings = category && category.drawings ? category.drawings.map(drawing => (
    <div key={drawing.id}>
      <DrawingCard
        drawing={drawing}
        user={user}
        category={category}
        categories={categories}
        handleDeleteClick={handleDeleteClick}
        isUserProfile={isUserProfile}
        handleUpdateSubmit={handleUpdateSubmit}
        handleSaveDrawingToUserProfile={handleSaveDrawingToUserProfile}
      />
    </div>
  )) : [];
>>>>>>> new-name/Tate-Main

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
<<<<<<< HEAD
          <div className="grid-container">
            <div className="drawingList">
              <div className="drawingGrid">
                <ul className="catDrawings">{catDrawings}</ul> 
              </div>
            </div>
            <div className="newUserForm">
              <NewUserDrawing
                categories={categories}
                setCategories={setCategories}
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
=======
          <div className="newUserForm">
            <NewUserDrawing
              categories={categories}
              setCategories={setCategories}
              category={category}
              handleAdd={handleAdd}
              user={user}
              handleSaveDrawingToUserProfile={handleSaveDrawingToUserProfile}
            />
>>>>>>> new-name/Tate-Main
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
