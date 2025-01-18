/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  function cubeNum(num){
    console.log('Calculation Done');
    return Math.pow(num, 3);
  }

  const result = useMemo(()=>cubeNum(number), [number]);

  return (
    <>
      <input type="number" value ={number} onChange={(e)=>{setNumber(e.target.value)}}></input>
      <h1>Cube of the number : {result}</h1>
      <button onClick={()=>{setCounter(counter + 1)}}>Counter++</button>
      <h1>{counter}</h1>
    </>
  )
}

export default App
