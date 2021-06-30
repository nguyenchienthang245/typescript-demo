import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todoList: Todo[];
  // toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((item, index) => (
        <>
          <TodoListItem key={index} todo={item} />
          <div style={{ height: "50px" }}></div>
        </>
      ))}
    </ul>
  );
}