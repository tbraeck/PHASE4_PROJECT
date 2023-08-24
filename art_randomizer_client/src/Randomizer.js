import React from 'react'
import { useState, useEffect } from 'react'
import RandomCard from './RandomCard'

function Randomizer({handleAdd}) {
  const [drawings, setDrawings] = useState([])
  const [oneDrawing, setDrawing] = useState({})
 

  useEffect(() => {
    fetch('http://localhost:3000/drawings')
      .then((r) => r.json())
      .then((drawings) => setDrawings(drawings))
  }, [])

  function handleRandom() {
    const randomDrawing = drawings[Math.floor(Math.random() * drawings.length)]
    setDrawing(randomDrawing)
  }

  return (
    <div>
      <br></br>
      <div className='randomCard'>
        <div className="randButton">
          <button type="submit" >
            <img src="../PushMe.png" style={{width:300, alignContent: 'center'}}alt="button" onClick={handleRandom} />
          </button>
        </div>

        <br></br>
        <div  >
          <RandomCard
            adjective={oneDrawing.adjective}
            noun={oneDrawing.noun}
            adverb={oneDrawing.adverb}
            verb={oneDrawing.verb}
            reason_why={oneDrawing.reason_why}
           handleAdd={handleAdd}
          />
        </div>
      </div>
      <br></br>        
    </div>
  )
}
export default Randomizer
