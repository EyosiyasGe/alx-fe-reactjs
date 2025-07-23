import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="./">Home</Link>
              </li> 
              <li>
                <Link to="./About">About</Link>
              </li>
              <li>
              <Link to="./Service"> Service </Link>
              </li>
              <li>
                <Link to="./Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='./Home.jsx' element={<Home />} />
          <Route path='./About.jsx' element={<About />} />
          <Route path='./Service.jsx' element={<Service />} />
          <Route path='./Contact.jsx' element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Switch>
      </Router>
      <Navbar />
    </>
  )
}

export default App
