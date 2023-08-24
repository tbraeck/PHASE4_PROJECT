import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import CategoryList from './CategoryList'
import CategoryCard from './CategoryCard';
// import UserProfile from './UserProfile';

import {Routes, Route} from 'react-router-dom';
import React, {useEffect, useState, useContext} from 'react';
import { UserContext } from './contexts/UserContext';

function App() {
const [categories, setCategories] = useState({
  drawings: []
});

const {user, setUser} = useContext(UserContext);


  useEffect(()=> {
    fetch("http://localhost:3000/categories")
      .then((res)=> res.json())
      .then((data) => setCategories(data))
  }, [])
  
  const handleAdd = (newDrawing) => {
    const newDrawingArray = [...categories, newDrawing]
    setCategories(newDrawingArray)
    }

const handleLogout = ()=> {
  setUser(null)
}

const handleUpdateItem = (updatedDrawing) => {
  const editedItems = categories.drawings.map((item) => {
    if (item.id === updatedDrawing.id) {
      return updatedDrawing
    } else {
      return item;
    }
  });
  setCategories(editedItems)
}

console.log(categories)

if(!user) return <Login  />
// if(user) return <UserProfile categories={categories}/>
  return (
    <div className="App">
      <Header handleLogout={handleLogout} />
     
          <Routes>
         <Route  exact path="/" element={<Home/>}/>
         <Route path="/categories" element={<CategoryList categories={categories}  handleUpdateItem={handleUpdateItem}  setCategories={setCategories}/> } />  
         <Route path="/categories/:id" element={<CategoryCard categories={categories}  handleUpdateItem={handleUpdateItem}  handleAdd={handleAdd} setCategories={setCategories}/>}/>
         <Route path="/categories/:id/edit" element={<CategoryCard categories={categories} setCategories={setCategories}/>}/>
         {/* <Route path='/drawings' element={<Randomizer handleAdd={handleAdd} categories={categories}/>}/> */}
      </Routes>
      </div>
  );
}


export default App;
