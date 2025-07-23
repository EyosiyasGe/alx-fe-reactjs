import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'lime', justifyContent: 'center' }}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li> 
              <li>
                <Link to="/src/About">About</Link>
              </li>
              <li>
              <Link to="/src/Service"> Service </Link>
              </li>
              <li>
                <Link to="/src/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
  )
}

export default Navbar