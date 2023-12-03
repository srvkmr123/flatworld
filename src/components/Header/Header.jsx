import './Header.css'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function Header({children}) {
  return (
    <div className="header">
      <h2>Book Shelf</h2>
      <ul>
        <li><Link to='/'>Admin</Link></li>
        <li><Link to='/show-admin'>Show Admin</Link></li>
        {/* <li><Link to='/show-book'>Show Book</Link></li> */}
      </ul>
      <div className="page">
        {children}
      </div>
    </div>
  )
}

export default Header