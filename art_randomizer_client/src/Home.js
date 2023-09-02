import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='homeWelcome'>GET ALL YOUR <br></br>DRAWING IDEAS <br></br>RIGHT <Link to='/categories' className='custom-link'><u>HERE</u></Link> .</h1>
    </div>
  )
}

export default Home
