import React, {useState} from 'react';
import './styles/DrawingCard.css';
import EditDrawing from './EditDrawing';

const DrawingCard = ({ drawing, userDrawings, setUserDrawings, user, categories, isUserProfile, handleUpdateSubmit, handleUpdateUserDrawings, handleDeleteClick,  handleSaveDrawingToUserProfile }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState([]);

  const { adjective, noun, verb, adverb } = drawing;

  const handleShowEditForm = () => {
    if (isUserProfile) {
      setErrors(["You can only edit drawings in your profile."]);
      return;
    }
    setIsEditFormVisible(true);
  };

  const handleSave = () => {
    const saveResult = handleSaveDrawingToUserProfile(drawing);
    if (saveResult.success) {
      setIsSaved(true);
      setErrors([]);
      console.log(drawing)
} else {
      setErrors([saveResult.message]);
    }
  };
  
  
  const handleDelete = (id) => {
    if (isUserProfile) {
      setErrors(["You can only delete drawings in your profile."]);
      return;
    }
  
    handleDeleteClick(id);
  };

  return (

    <div className='drawingEdit' onDoubleClick={()=> setIsEditFormVisible((isEditFormVisible)=>!isEditFormVisible)}>
    {isEditFormVisible ? 
      <EditDrawing 
      user={user} 
      categories={categories} 
      isSaved={isSaved}
      drawing={drawing} 
      handleShowEditForm={handleShowEditForm} 
      userDrawings={userDrawings} 
      setUserDrawings={setUserDrawings}   
      handleUpdateSubmit={handleUpdateSubmit} 
      isEditFormVisible={isEditFormVisible} 
      setIsEditFormVisible={setIsEditFormVisible} 
      handleUpdateUserDrawings={handleUpdateUserDrawings}
      /> :

    (<div className="drawingCardContainer">
      <div className='drawingCard'>
        <h1>The</h1>
        <h2>{adjective}</h2>
        <h2>{noun}</h2>
        <h2>{verb}</h2>
        <h2>{adverb}!</h2>
        <div>
            {isUserProfile && ( 
              <button onClick={handleSave} className='crudButton'>
                SAVE
              </button>
            )}
            {isSaved && <p>Item has been saved to your profile!</p>}
          </div>
        {!isUserProfile && (
                <>
                  <button onClick={handleDelete} className='crudButton'>
                    DELETE
                  </button>
                  <button onClick={handleShowEditForm} className='crudButton'>
                    EDIT
                  </button>
                </>
              )}
              {errors.length > 0 && (
                <div className="error-messages">
                  {errors.map((error, index) => (
                    <p key={index} className="error-message">
                      {error}
                    </p>
                  ))}
                </div>
              )}
      </div>
    </div>)}
    </div>
  );
};

export default DrawingCard;

