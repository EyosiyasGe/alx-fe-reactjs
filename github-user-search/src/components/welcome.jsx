import React from 'react'
import { useState } from 'react'

function welcome() {
    const [message, setMessage] = useState('Welcome to the GitHub User Search App!')
    const handleClick = () => {
        setMessage('Enjoy exploring GitHub users!')
    }
  return (
      <div><h1>{message}</h1>
      <button onClick={handleClick} > message</button>
      </div>
      
  )
}

export default welcome