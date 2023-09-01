import React from 'react';
import UserDrawings from './UserDrawings';
import { useParams } from 'react-router-dom';

import './styles/UserProfile.css';

const UserProfile = ({ user, categories, handleSaveDrawing}) => {
  const {user_id} = useParams();

  // console.log(userDrawings)
  return (
    <div className="userProfile">
        <h1> {user.username}'s Drawings</h1>
        <UserDrawings user={user} user_id={user_id} categories={categories} handleSaveDrawing={handleSaveDrawing}  />
    </div>
  );
};

export default UserProfile;
