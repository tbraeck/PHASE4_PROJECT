import React, { useContext} from "react";
import { Link } from 'react-router-dom';
import { CategoryContext } from './contexts/CategoryContext.js';


const CategoryList = () => {
    const {allCategories} = useContext(CategoryContext);

   const categoryItems = allCategories.map((category) => (
        <div key={category.id}>
            <h1>
                <Link to={`/categories/${category.id}`}>
                    {category.name}
                </Link>
            </h1>
        </div>
    ))

  return (
    <div className='cat-page'>
    <div className='categoriesBox'>
        <div className='categories'>
            <h1>DRAWING CATEGORIES</h1>
        </div>
        <div className='categoryLinks'>
            {categoryItems}
        </div>
    </div>
    </div>
  )
}

export default CategoryList
