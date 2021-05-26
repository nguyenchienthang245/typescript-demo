export const addNewTodo = (todo: Todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  }
}

export const deletItem = (todo: Todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  }
}

export const checkItem = (todo: Todo) => {
  return {
    type: "CHECK_ITEM",
    payload: todo,
  }
}
