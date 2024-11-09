import {useState} from "react";
const FunctionWise = () => {
let [counter, setCounter] = useState(10);
const addValue = () =>{
  if(counter <= 19 ){
    setCounter(counter + 1)
  }

}
// I want when I click on the removeValue button the counter value should not less then 0. How can I do that?
const removeValue = () => {
  if (counter > 0){
    setCounter(counter - 1 )
  }
}


return (
  <>
    <h1>Assignment</h1>
    <h5>condition Value between 0 to 20 </h5>
    <button onClick={addValue}>Add{counter}</button>
    <br />
    <button onClick={removeValue}>Remove {counter}</button>


  </>
)

}
export default FunctionWise;