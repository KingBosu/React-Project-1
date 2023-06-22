import { useState } from 'react'
import './App.css'
import logo from './Components/Images/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img src={logo} className="logo" alt="website" />
       </div>
      <h1>Spider World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Why did you click this {count} times
        </button>
        {/* <p>
          Click the Sign up button to get started or log in if you already have an account!
        </p> */}
      </div>
     
    </>
  )
}


export default App
