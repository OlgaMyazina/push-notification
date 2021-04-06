import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { getToken, onMessageListener } from './firebase'

function App() {
  const [show, setShow] = useState(false)
  const [notification, setNotification] = useState({ title: '', body: '' })
  const [isTokenFound, setTokenFound] = useState(false)
  getToken(setTokenFound)

  onMessageListener()
    .then((payload) => {
      console.log('payload:', payload)
      setShow(true)
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      })
    })
    .catch((err) => console.log('failed: ', err))

  const handleClick = () => {
    setShow(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {show && <p>{notification.title}</p>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  )
}

export default App
