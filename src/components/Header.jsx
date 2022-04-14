import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <Link className="logo" to='/'><h1>MarketPlace</h1></Link>
    </div>
  )
}

export default Header