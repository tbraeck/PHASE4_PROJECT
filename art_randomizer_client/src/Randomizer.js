import React, { useState, useEffect } from 'react';
import RandomCard from './RandomCard';

function Randomizer({ handleAdd }) {
  const [drawings, setDrawings] = useState([]);
  const [oneDrawing, setDrawing] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/drawings')
      .then((response) => response.json())
      .then((drawings) => setDrawings(drawings))
      .catch((error) => {
        console.error('Error fetching drawings:', error);
      });
  }, []);

  const handleRandom = () => {
    const randomDrawing = drawings[Math.floor(Math.random() * drawings.length)];
    setDrawing(randomDrawing);
  };

  const handleSaveDrawing = () => {
    if (oneDrawing.id) {
      fetch('http://localhost:3000/drawings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(oneDrawing),
      })
        .then((response) => response.json())
        .then((newDrawing) => {
          // Call the handleAdd function to update the parent component's state
          handleAdd(newDrawing);
        })
        .catch((error) => {
          console.error('Error saving drawing:', error);
        });
    }
  };

  return (
    <div>
      <br></br>
      <div className='randomCard'>
        <div className='randButton'>
          <button type='button'>
            <img
              src='../PushMe.png'
              style={{ width: 300, alignContent: 'center' }}
              alt='button'
              onClick={handleRandom}
            />
          </button>
        </div>

        <br></br>
        <div>
          <RandomCard
            adjective={oneDrawing.adjective}
            noun={oneDrawing.noun}
            adverb={oneDrawing.adverb}
            verb={oneDrawing.verb}
            reason_why={oneDrawing.reason_why}
            handleSaveDrawing={handleSaveDrawing}
            handleAdd={handleAdd}
          />
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Randomizer;
