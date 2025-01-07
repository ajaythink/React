import { createContext, useContext } from "react";


// Create a context for the todo list items and export it
// createContext() creates a context object that we can use to share data between components.
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},


});

// Create a custom hook to use the TodoContext and export it
// useContext() is a hook that allows you to access the value of a context object.
// We can use this hook to access the value of the TodoContext object that we created earlier.
export const useTodoContext = () => {
  return useContext(TodoContext);
}

// Create a provider component to wrap the app with the TodoContext
// This component will be used to wrap the entire app so that all components can access the value of the TodoContext object.
export const TodoProvider = TodoContext.Provider;