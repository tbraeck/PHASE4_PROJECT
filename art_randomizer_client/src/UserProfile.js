import React, { useState, useEffect } from 'react';
import UserDrawings from './UserDrawings'; // Provide the correct path to UserDrawings

const UserProfile = ({ userId, category }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data using the provided userId
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        setUserData(user);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }
// dog
  return (
    <div>
      <h1>Welcome, {userData.username}!</h1>
      <UserDrawings user={userData} category={category}  />
    </div>
  );
};

export default UserProfile;