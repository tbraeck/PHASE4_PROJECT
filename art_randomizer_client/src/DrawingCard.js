import React, {useState} from 'react';
import './styles/DrawingCard.css';
import EditDrawing from './EditDrawing';

const DrawingCard = ({ drawing, userDrawings, setUserDrawings, user, isUserProfile, categories, handleUpdateSubmit, handleUpdateUserDrawings, handleDeleteClick,  handleSaveDrawingToUserProfile }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(null); 
  const [isSavedMessageVisible, setIsSavedMessageVisible] = useState(false);

const hideSavedMessage = () => {
  setIsSavedMessageVisible(false);
};

  const { adjective, noun, verb, adverb } = drawing;

  const handleShowEditForm = () => {
    setIsEditFormVisible(true);
  };

  const handleSave = () => {
    if (!isUserProfile) {
      setError('Saving is not allowed on the user profile page.');
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      handleSaveDrawingToUserProfile(drawing);
      setIsSaved(true);
      setIsSavedMessageVisible(true); // Show the message
  
      setTimeout(() => {
        setIsSaved(false);
        hideSavedMessage(); // Hide the message after 3 seconds
      }, 3000);
    }
  };

  const handleDelete = (id) => {
    console.log('handleDelete called with id:', id);

    if (!isUserProfile) {
      handleDeleteClick(id);
    } else {
      setError('Deleting is not allowed on other user data.');
      setTimeout(() => {
        setError(null);
      }, 3000); 
    }
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
        <div className="error-message">
          <button onClick={handleSave} className='crudButton'>
            SAVE
          </button>
          {isSavedMessageVisible && (
  <p>Item has been saved to your profile!</p>
)}        </div>

        {!isUserProfile ? (
              <button onClick={handleShowEditForm} className="crudButton">
              EDIT
            </button>
            ) : (
              <button
              onClick={() => {
                setError('Editing is not allowed outside user profile page.');
                setTimeout(() => {
                  setError(null);
                }, 3000); 
              }}
              className="crudButton"
            >
              EDIT
            </button>
            )}

            {!isUserProfile ? (
            <button onClick={handleDelete} className="crudButton">
              DELETE
            </button>
            ) : (
              <button
              onClick={() => {
                setError('Deleting is not allowed outside user profile page.');
                setTimeout(() => {
                  setError(null);
                }, 3000); 
              }}
              className="crudButton"
            >
              DELETE
            </button>
                
            )}
          </div>
        </div>
      )}
            {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default DrawingCard;

