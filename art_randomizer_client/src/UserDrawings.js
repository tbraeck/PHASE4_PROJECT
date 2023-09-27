import React, { useEffect, useState } from 'react';
import DrawingCard from './DrawingCard';
import './styles/UserDrawings.css';

const UserDrawings = ({ user, handleSaveDrawingToUserProfile }) => {
  const [userDrawings, setUserDrawings] = useState([])
 
  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.id}/user_drawings`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user drawings');
        }
      })
      .then((data) => {
        setUserDrawings(data);
      })
      .catch((error) => {
        console.error('Error fetching user drawings:', error);
      });
  }, [user.id]);

  const handleDelete = (drawingId) => {
    fetch(`http://localhost:3000/users/${user.id}/user_drawings/${drawingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          setUserDrawings((prevUserDrawings) =>
            prevUserDrawings.filter((drawing) => drawing.id !== drawingId)
          );
        } else {
          console.error("Failed to delete drawing");
        }
      })
      .catch((error) => {
        console.error("Error deleting drawing:", error);
      });
  };
  
const handleUpdateUserDrawings = (updatedDrawing) => {
  setUserDrawings((prevUserDrawings) => {
    const updatedUserDrawings = prevUserDrawings.map((drawing) =>
      drawing.id === updatedDrawing.id ? updatedDrawing : drawing
    );
    return updatedUserDrawings;
  });
};

  return (
    <div className='drawingContainer'>
    <div className="drawingList">
      {userDrawings.map((drawing) => (
        <div key={drawing.id}>
       <DrawingCard
            drawing={drawing}
            handleDeleteClick={() => handleDelete(drawing.id)}
            user={user}
            handleUpdateUserDrawings={handleUpdateUserDrawings}
            userDrawings={userDrawings}
            setUserDrawings={setUserDrawings}
            handleSaveDrawingToUserProfile={handleSaveDrawingToUserProfile} 
          />
        </div>  
      ))}
    </div>
    </div>
  );
};

export default UserDrawings;



