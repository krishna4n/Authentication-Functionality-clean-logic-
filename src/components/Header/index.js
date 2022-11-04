import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/about">
      About
    </Link>
  </div>
)

export default Header
