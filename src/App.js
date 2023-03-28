import React, { useState } from 'react'
import './App.css';
import { Input } from './component/Input';



function App() {
  const [text,setText] = useState("")
  
   const [error,setError] = useState(null)

   const handleChange = (e) => {
    
    if(e.target.value.length > 20){

      setError("Character limit exceeded")
    }

    else{
      setText(e.target.value);
      setError(null);
    }

   }
  return (
    <div className='App'>

      <Input onChange={(e) => handleChange} value = {text} />
      

    </div>
    
  )
}

export default App