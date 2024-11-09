import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
 
function App(){
    return (
        <center class='todo-container'>
            <Header></Header>
            <AddToDo></AddToDo>
            <div class="items-container">
                <TodoItem1 />
                <TodoItem2 />
                <TodoItem1 />
            </div>
        </center>

    )

}
export default App;