import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todo: [],
  addTodo: (todo) => {},
  updateTodo: (id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
})

export const useTodo = () =>{
  return useContext(TodoContext);
}