import { useState, useCallback, useEffect, useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); 
  const [characterAllowed, setCharacterAllowed] = useState(false); 
  const [password, setpassword] = useState("");
  //------------------ UseRef ------------------------------------
  const passwordRef = useRef(null)

  //------------------ UseCallback ------------------------------------
  const passwordGenerator = useCallback( () => {

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*+-_=[]{}~`"

    for (let i = 1; i <= length; i++){

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }
    setpassword(pass)

  }, [length, numberAllowed, characterAllowed, setpassword])

  const copyPasswordToClipBoard = useCallback( () => {
    
    passwordRef.current.select();
    //passwordRef.current?.setSelectionRange(0,3);  // Limited value copy using Range 0 to 3 values
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)

  }, [password] )
  
  //------------------ UseEffect ------------------------------------
  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 text-orange-500 bg-gray-700">
        
        <h1 className="text-white text-center text-2xl my-3">Password generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          <input type="text" value={password} className="outline-none w-full py-1 px-3" 
          placeholder="Password" readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipBoard} className="outline-none bg-blue-700 
          text-white px-3 py-1 shrink-0 focus:bg-blue-900">Copy</button>
        
        </div>

        <div className="flex text-sm gap-x-2">
          
          <div className="flex items-center gap-x-1">
            
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" 
            onChange={ (e) => {setLength(e.target.value)} }/>
            <label className="">Length: {length}</label>
          
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox" defaultChecked = {numberAllowed} id="numberInput" 
            onChange={ () => { setNumberAllowed( (prev) => !prev ) } }/>
            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox" defaultChecked = {characterAllowed} id="charInput" 
            onChange={ () => { setCharacterAllowed( (prev) => !prev ) } }/>
            <label htmlFor="charInput">Characters</label>

          </div>
        
        </div>
      
      </div>

    </>
  )

}

export default App;
