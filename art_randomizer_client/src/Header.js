import React, {useContext} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'

const Header = ({ handleLogout }) => {
  const {user, setUser} = useContext(UserContext);
  
  return (
    <div className='header'>
      <Link to='/' relative="path">
        <img src='../DRAWINGIDEAS.gif' 
        style={{width: 400, paddingTop: 0}}
        alt='art banner'/>
      </Link>
      <Navbar user={user} setUser={setUser} handleLogout={handleLogout}  />
    </div>
  )
}

export default Header
