import React, {useState} from 'react';
import './styles/DrawingCard.css';
import EditDrawing from './EditDrawing';
// import UserDrawings from './UserDrawings';

const DrawingCard = ({ drawing, userDrawings, setUserDrawings, user, categories, handleUpdateSubmit, handleUpdateUserDrawings, handleDeleteClick,  handleSaveDrawingToUserProfile }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const { id, adjective, noun, verb, adverb } = drawing;

  const handleShowEditForm = () => {
    setIsEditFormVisible(true);
  };

  const handleSave = () => {
    handleSaveDrawingToUserProfile(drawing);
  };

  const handleDelete = () => {
    handleDeleteClick(id);
  };
// console.log(userDrawings)
  return (

    <div className='drawingEdit' onDoubleClick={()=> setIsEditFormVisible((isEditFormVisible)=>!isEditFormVisible)}>
    {isEditFormVisible? 
      <EditDrawing user={user} categories={categories} drawing={drawing} handleShowEditForm={handleShowEditForm} userDrawings={userDrawings} setUserDrawings={setUserDrawings} handleUpdateSubmit={handleUpdateSubmit} isEditFormVisible={isEditFormVisible} setIsEditFormVisible={setIsEditFormVisible} handleUpdateUserDrawings={handleUpdateUserDrawings}/> :

    (<div className="drawingCardContainer">
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
        <button onClick={handleShowEditForm} className='editButton'>
          Edit
        </button>
       
      </div>
    </div>)}
    </div>
  );
};

export default DrawingCard;

