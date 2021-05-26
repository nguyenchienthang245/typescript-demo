import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../actions/todoActions";
import { TodoList } from "./TodoList";

interface Props {
}


export const AddTodoForm: React.FC<Props> = () => {
  const [text, setText] = useState('');

  const todoList = useSelector((state: TodoList) => state.todoList)
  console.log(todoList);
  const dispatch = useDispatch();

  const addTodo = (text: string) => {
    const newTodo: Todo = { text: text, complete: false };
    const action = addNewTodo(newTodo);
    dispatch(action);
    console.log(text);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value)
            console.log(text);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            addTodo(text);
            setText('');
          }}
        >
          Add Todo
      </button>
      </form>
      <TodoList todoList={todoList} />
    </>
  );
}
