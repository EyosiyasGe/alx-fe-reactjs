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
          <Route path="./" exact component={Home} />
          <Route path="./About" component={About} />
          <Route path="./Service" component={Service} />
          <Route path="./Contact" component={Contact} />
        </Switch>
      </Router>
      <Navbar />
    </>
  )
}

export default App
