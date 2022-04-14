import { Link } from "react-router-dom";

const Home = ({categories}) => {
  return (
    <div className="home">
      <h1 className="home-title">Home</h1>
      <h4 className="home-desc">Check out some of our most popular categories!</h4>
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

export default Home