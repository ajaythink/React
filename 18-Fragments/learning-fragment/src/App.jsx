//  ********** start Logical Operator (&&), condition based rander***************
import FoodItem from "./components/FoodItem"
import ErrorMessage from './components/ErrorMessage'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
function App(){
  let foodList = ["sabzi", "Green Vegetables", "Roti", "Milk", "Salad"]; 
  // let foodList =[];
  return ( 
      < >
        <h1>Healthy Food</h1>
        <ErrorMessage item={foodList}></ErrorMessage>
        <FoodItem item ={foodList}></FoodItem>
      </>
  );
}
export default App;




























//  ********** start Ternary Operator , condition based rander***************
// import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'
// function App(){
//   let foodList = ["Dal", "Green Vegetables", "Roti", "Milk", "Salad"];
//   // let foodList = []; 
//   let emptyMessage = foodList.length === 0 ? <h3> I am still hungry</h3> : null; 
//   return ( 
//       < >
//         <h1>Healthy Food</h1>
//         {emptyMessage}
//         <ul className = "list-group">
//         {foodList.map(item => <li key={item}className ="list-group-item">{item} </li>)}        
//         </ul>
//       </>
//   );
// }
// export default App


// //  ********** start if else condintion , condition based rander***************
// import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'
// function App(){
//   // let foodList = ["Dal", "Green Vegetables", "Roti", "Milk", "Salad"];
//   let foodList = [];
  
//   if(foodList.length === 0){
//     return <h3>I am still hungry.</h3>
//   }
//   return ( 
//       < >
//         <h1>Healthy Food</h1>
//         <ul className = "list-group">
//         {foodList.map(item => <li key={item}className ="list-group-item">{item} </li>)}        
//         </ul>
//       </>
//   );
// }
// export default App

// //  ********** start Map Data and Content convert in to Array ***************
// import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'
// function App(){
//   let foodList = ["Dal", "Green Vegetables", "Roti", "Milk", "Salad"];
//   return ( 
//       < >
//         <h1>Healthy Food</h1>
//         <ul className = "list-group">
//         {foodList.map(item => <li key={item}className ="list-group-item">{item} </li>)}
//           {/* {foodList.map(item => <li className ="list-group-item">{item} </li>)} */}
        
//         </ul>
//       </>
//   );
// }
// export default App

//  ********** start without fragment react import <>...</> ***************
// import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'
// function App(){
//   return (
//       <>
//         <h1>Healthy Food</h1>
//         <ul class = "list-group">
//           <li class ="list-group-item"> An item </li>
//           <li class ="list-group-item"> An second item </li>
//           <li class ="list-group-item"> An third item </li>
//           <li class ="list-group-item"> An fourth item </li>
//           <li class ="list-group-item"> An a fifth one </li>
//         </ul>
//       </>
//   );
// }
// export default App



//  ********** start with fragment***************
// import React from"react";
// import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'
// function App(){
//   return (
//       <React.Fragment>
//         <h1>Healthy Food</h1>
//         <ul class = "list-group">
//           <li class ="list-group-item"> An item </li>
//           <li class ="list-group-item"> An second item </li>
//           <li class ="list-group-item"> An third item </li>
//           <li class ="list-group-item"> An fourth item </li>
//           <li class ="list-group-item"> An a fifth one </li>
//         </ul>
//       </React.Fragment>
//   );
// }

// export default App

//  ********** start without fragment***************
// import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'

// function App(){
//   return (
//       <div>
//         <h1>Healthy Food</h1>
//         <ul class = "list-group">
//           <li class ="list-group-item"> An item </li>
//           <li class ="list-group-item"> An second item </li>
//           <li class ="list-group-item"> An third item </li>
//           <li class ="list-group-item"> An fourth item </li>
//           <li class ="list-group-item"> An a fifth one </li>
//         </ul>
//       </div>
//   );
// }

// export default App
