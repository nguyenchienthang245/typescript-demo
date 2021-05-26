// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.scss";
// import { TodoList } from "./components/TodoList";
// import { AddTodoForm } from "./components/AddTodoForm";


// const initialTodos: Todo[] = [];

// function App() {
//   const [todos, setTodos] = useState(initialTodos);

//   const toggleTodo = (selectedTodo: Todo) => {
//     const newTodos = todos.map(todo => {
//       if (todo === selectedTodo) {
//         return {
//           ...todo,
//           complete: !todo.complete,
//         };
//       }
//       return todo;
//     });
//     setTodos(newTodos);
//   };

//   const addTodo = (text: string) => {
//     const newTodo = { text, complete: false };
//     setTodos([...todos, newTodo]);
//   };

//   return (
//     <div className="">
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <AddTodoForm addTodo={addTodo} />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.scss";
import { AddTodoForm } from "./components/AddTodoForm";




function App() {

  return (
    <div className="">
      <h1>Redux</h1>
      <AddTodoForm />
    </div>
  );
}

export default App;
