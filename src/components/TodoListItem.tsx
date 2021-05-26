// import React from "react";

// interface Props {
//   todo: Todo;
//   toggleTodo: ToggleTodo;
// }

// export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
//   return (
//     <li>
//       <label
//         style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
//       >
//         <input
//           type="checkbox"
//           checked={todo.complete}
//           onClick={() => {
//             toggleTodo(todo);
//           }}
//         />
//         {' '}
//         {todo.text}
//       </label>
//     </li>
//   );
// }


import React from "react";
import { useDispatch } from "react-redux";
import { checkItem, deletItem } from "../actions/todoActions";
interface Props {
  todo: Todo;
  // toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          onClick={() => {
            dispatch(checkItem(todo));
          }}
        />
        <button
          onClick={() => {
            dispatch(deletItem(todo));
          }}
        >
          delete
        </button>
        {' '}
        {todo.text}
      </label>
    </li>
  );
}
