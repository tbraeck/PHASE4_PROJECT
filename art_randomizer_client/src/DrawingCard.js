import React, {useState} from 'react';
import './styles/DrawingCard.css';
import EditDrawing from './EditDrawing';

const DrawingCard = ({ user, categories, handleUpdateSubmit, drawing, handleDeleteClick,  handleSaveDrawingToUserProfile }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const { id, adjective, noun, verb, adverb } = drawing;

  const handleUpdateUserItem = () => {
    setIsEditFormVisible(true);
  };

  const handleSave = () => {
    handleSaveDrawingToUserProfile(drawing);
  };

  const handleDelete = () => {
    handleDeleteClick(id);
  };

  return (
    <div className="drawingCardContainer">
      <div className='drawingCard'>
        <h1>The</h1>
        <h2>{adjective}</h2>
        <h2>{noun}</h2>
        <h2>{verb}</h2>
        <h2>{adverb}!</h2>
        <button onClick={handleSave} className='saveButton'>
          SAVE
        </button>
        <button onClick={handleDelete} className='deleteButton'>
          Delete
        </button>
        <button onClick={handleUpdateUserItem} className='editButton'>
          Edit
        </button>
        {isEditFormVisible && (
          <EditDrawing user={user} categories={categories} drawing={drawing} handleUpdateUserItem={handleUpdateUserItem} handleUpdateSubmit={handleUpdateSubmit}/>
        )}
      </div>
    </div>
  );
};

export default DrawingCard;
