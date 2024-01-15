import './styles/App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import CategoryList from './CategoryList'
import CategoryCard from './CategoryCard';
import UserProfile from './UserProfile';
import EditDrawing from './EditDrawing';

import {Routes, Route, Navigate} from 'react-router-dom';
import React, { useContext} from 'react';
import { UserContext } from './contexts/UserContext';
import { CategoryContext } from './contexts/CategoryContext.js';

function App() {
const {user, setUser} = useContext(UserContext);
const {allCategories, setAllCategories} = useContext(CategoryContext);

console.log(allCategories)

const handleAdd = (newDrawing) => {
    const newDrawingArray = [...allCategories, newDrawing]
    setAllCategories(newDrawingArray)
    }

const handleLogout = ()=> {
  setUser(null)
}

const handleUpdateItem = (updatedDrawing) => {
  const editedItems = allCategories.drawings.map((item) => {
    if (item.id === updatedDrawing.id) {
      return updatedDrawing;
    } else {
      return item;
    }
  });
  setAllCategories({ drawings: editedItems });
};



if(!user) return <Login  />

return (
    <div className="App">
      <Header handleLogout={handleLogout} />
    <div>
    </div>
        <Routes>
            <Route  exact path="/" element={<Home/>}/>
            <Route path="/categories" element={<CategoryList categories={allCategories}  handleUpdateItem={handleUpdateItem}  setCategories={setAllCategories}/> } />  
            <Route path="/categories/:id" element={<CategoryCard categories={allCategories}  handleUpdateItem={handleUpdateItem}  handleAdd={handleAdd} setCategories={setAllCategories}/>}/>
            <Route path="/categories/:id/edit" element={<CategoryCard categories={allCategories} setCategories={setAllCategories} handleAdd={handleAdd}/>}/>
            <Route path="/users/:user_id/drawings/:drawing_id" element={<EditDrawing user={user} handleUpdateItem={handleUpdateItem} categories={allCategories}/>} />
            <Route path="/user-profile" element={user ? <UserProfile user={user}/> : <Navigate to="/" />} />
            <Route path="/user/:username" component={UserProfile} />
        </Routes>
      </div>
  );
}


export default App;


