import "./App.css";
import Card from "./component/Card";

function App() {
  // let myObj = {
  //   name: "Delba",
  //   age: 23,
  //   city: "Lahore",
  // }

  return (
    <>
      <Card username="Chai aur code" btnText='Visit me'/>
      <Card username="Ajay" btnText="click here"/>
      <Card username="Anirudh" btnText="click me"/>
      <Card />
    </>
  );
}

export default App;
