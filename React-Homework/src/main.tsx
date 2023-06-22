import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Cards from './Components/Cards/Cards.tsx'
import Login from './Components/Login/Login.tsx'
import NavBar from './Components/NavBar/NavBar.tsx'
import Likes from './Components/Likes/Likes.tsx'
import Player from './Components/Player/Player.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <Login />
    <App />
    <Cards />
    <Likes />
    <Player />
  </React.StrictMode>,
)
