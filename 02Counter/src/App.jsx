// In this file we learn about useState and how to use it in react that is called hooks.
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(7)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }
  const remove= () =>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Welcome India</h1>
      <h2>Chai aur code</h2>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={remove}>Subtract Value {counter} </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
