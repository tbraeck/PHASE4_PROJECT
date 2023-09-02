import React from 'react'
import { Link } from 'react-router-dom';

const CategoryList = ({categories}) => {
   console.log(categories)

   const categoryItems = categories.map((category) => (
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
