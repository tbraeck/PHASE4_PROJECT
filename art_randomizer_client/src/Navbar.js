import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ user, handleLogout}) => {

  const handleLogoutClick = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.ok){
        handleLogout(null)
      }
    })
  }

    return (
      <div className='headerBack'>
        
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
            <NavLink to="/user-profile">
              <button type="button" className="button">
                USER PROFILE          
            </button>
            </NavLink>
          </div>
          <div className='welcomeLogout'>
          <p>Welcome, {user.username}!</p>
          <button type='submit' onClick={handleLogoutClick} >Logout</button>
        </div>
        </div>
        </div>
      )
}

export default Navbar
