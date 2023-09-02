import React from 'react';
import UserDrawings from './UserDrawings';
import { useParams } from 'react-router-dom';

import './styles/UserProfile.css';

const UserProfile = ({ user, categories, handleSaveDrawing}) => {
  const {user_id} = useParams();

  return (
    <div className="userProfile">
        <h1 className='userNameTitle'> {user.username}'s Drawings</h1>
        <UserDrawings user={user} user_id={user_id} categories={categories} handleSaveDrawing={handleSaveDrawing}  />
    </div>
  );
};

export default UserProfile;
