import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card'

function App() {
  let myobj = {
    username: 'Shahzain',
    age: 23,
  }

  let newArray = [1,2,3,4,5]
  
  return (
    <>
    
      <h1 className="text-3xl font-bold underline mb-4">
        Hello world! Tailwind Test 
      </h1>
      <Card channel="Chai Aur Code" btnText="Click me" someObj={myobj} someArray={newArray} />
      <Card channel="Shahzain khan" btnText="Visit me!" />
      <Card channel="Niazi" />
    </>
  );
}

export default App;
