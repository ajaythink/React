import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from "./assets/components/ClockHeading";
import ClockSlogan from "./assets/components/ClockSlogan";
import CurrentTime from "./assets/components/CurrentTime";
// import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center>
            <ClockHeading />
            <ClockSlogan />
            <CurrentTime />        
    </center>
  ); 
}

export default App
