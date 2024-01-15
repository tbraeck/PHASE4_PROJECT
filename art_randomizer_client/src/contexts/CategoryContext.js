import React, {useState, useEffect, createContext} from "react";

const CategoryContext = createContext();

function CategoryProvider({ children }) {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(()=> {
            fetch("/categories").then((res) => {
                if(res.ok){
                    res.json().then((data) => {
                      setAllCategories(data)}) 
                  }
                })
            
          }, [])

  
  return <CategoryContext.Provider value={{allCategories, setAllCategories}}>{children}</CategoryContext.Provider>;
}

export { CategoryContext, CategoryProvider };