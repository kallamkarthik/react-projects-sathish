import { useState } from 'react'

import './App.css'

function App() {

  const [a, setCounter] = useState(0)
 
  const removevalue = () =>{
    setCounter(a -1)
  }
  const addvalue =() => {
    setCounter(a + 1)
  }
  return (
    <>
     <h1>This react from sathish </h1>
     <h2> Counter Value:  {a}</h2>
     <button onClick={addvalue}> Add Value </button>{" "}
     <button onClick={removevalue}>remove Value</button>
     <p>final Value : {a}</p>
    
    </>
  )
}

export default App
