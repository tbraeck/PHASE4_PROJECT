import React, { useState, useEffect } from 'react';
import DrawingCard from './DrawingCard'; // Make sure to provide the correct path to DrawingCard

const UserDrawings = ({ user, category }) => {
  const [userDrawings, setUserDrawings] = useState([]);
console.log(user)

  useEffect(() => {
    // Fetch user's drawings from the API here
    fetch(`http://localhost:3000/user/${user.id}/drawings`)
      .then((response) => response.json())
      .then((drawings) => {
        setUserDrawings(drawings);
      })
      .catch((error) => {
        console.error('Error fetching user drawings:', error);
      });
  }, [user.id]);

  return (
    <div>
      <h1>Your Drawings</h1>
      {userDrawings.map((drawing) => (
        <DrawingCard
          key={drawing.id}
          drawing={drawing}
          user={user}
          category={category}
        />
      ))}
    </div>
  );
};

export default UserDrawings;
// In this example, the UserDrawings component fetches the user's drawings using the user's ID as a parameter in the API call. It then maps over the userDrawings array and renders a DrawingCard component for each drawing, passing the necessary props (drawing, user, and category).

// Make sure to replace 'http://localhost:3000/user/${user.id}/drawings' with the actual API endpoint that corresponds to fetching the user's drawings. Also, ensure that you have the correct structure of the drawing object coming from the API response to match the prop expectations in your DrawingCard component.





