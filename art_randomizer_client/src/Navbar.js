import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ user, onLogin}) => {

  const handleLogoutClick = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.ok){
        onLogin(null)
      }
    })
  }

    return (
      <div className='headerBack'>
         <div>
          <p>Welcome, {user.username}!</p>
          <button type='submit' onClick={handleLogoutClick} className='logout-button'>Logout</button>
        </div>
        <div className="linkButtons">
          <div>
            <NavLink to="/">
              <button className="button" type="button">
                HOME
              </button>
            </NavLink>
            <NavLink  to="/categories">
              <button type="button" className="button">
                CATEGORIES          
            </button>
            </NavLink>
            <NavLink to="/randomizer">
              <button type="button" className="button">
                RANDOMIZER          
            </button>
            </NavLink>
            {/* <NavLink to="/drawings">
              <button type="button" className="button">
                DRAWINGS          
            </button>
            </NavLink> */}
          </div>
        </div>
        </div>
      )
}

export default Navbar
