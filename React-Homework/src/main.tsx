import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Cards from './Components/cards.tsx'
import Login from './Components/login.tsx'
import NavBar from './Components/navbar.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Cards />
    <Login />
    <NavBar />
    
  </React.StrictMode>,
)
