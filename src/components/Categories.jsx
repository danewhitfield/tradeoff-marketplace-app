import { useEffect, useState } from "react"

const Categories = ({categories, setCategories}) => {
  if(categories) return (
    <div>
        <h1>Categories</h1>
        <ul className="category-list">
            {categories && categories.map(category => {
                return (
                    <li className="category-item" key={category.category_name}>{category.category_name}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Categories
 