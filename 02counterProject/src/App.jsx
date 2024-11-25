import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0

  const addValue = () => {
    // console.log("Value Added", Math.random());
    //counter = counter + 1
    //console.log("Value Added", counter);
    //setCounter(counter + 1)
    
    // For Interview 

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // Yeh Increment just one kry ga q ky react bunch of code ly kr jata hai fibre ky pass .

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    //Ab iski value direct 4 ho gi increment krty waqt 

  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1) 
    }
    else {
      setCounter(0)
    }
    // setCounter(counter - 1)
  }

  return (
    <>

      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {addValue}>
        Add value
      </button>
      
      <br />
      
      <button onClick = {removeValue}>
        Remove Value
      </button>

    </>
  )
}

export default App
