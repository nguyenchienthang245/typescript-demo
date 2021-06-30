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


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkItem, deleteItem, editItem } from "../actions/todoActions";
interface Props {
  todo: Todo;
  // toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [text, setText] = useState('');
  const editTodo = (todo: Todo, text: string) => {
    const action = editItem(todo, text);
    dispatch(action);
    setOpen(false);
  };

  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            dispatch(checkItem(todo));
          }}
        />
        {''}
        {todo.text}
        <button
          onClick={() => {
            dispatch(deleteItem(todo));
          }}
        >
          delete
        </button>
        <button
          onClick={handleClickOpen}
        >
          edit
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <input
              type="text"
              defaultValue={todo.text}
              onChange={e => {
                setText(e.target.value)
                console.log(text);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
          </Button>
            <Button
              onClick={() => { editTodo(todo, text) }}
              color="primary"
              autoFocus
            >
              Agree
          </Button>
          </DialogActions>
        </Dialog>
      </label>
    </li >
  );
}
