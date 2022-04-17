import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Counter } from './components/Counter';



function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
   {show ? <Counter/> : null}
   <button onClick={()=>{
     setShow(!show)
   }}>{show ? 'Hide' : 'Show'} Timer </button>

    </div>
  );
  }
export default App
