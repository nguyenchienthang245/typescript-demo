export const addNewTodo = (todo: Todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  }
}

export const deleteItem = (todo: Todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  }
}

export const editItem = (todo: Todo, text: string) => {
  return {
    type: "EDIT_TODO",
    payload: {
      todo: todo,
      text: text,
    }
  }
}

export const checkItem = (todo: Todo) => {
  return {
    type: "CHECK_ITEM",
    payload: todo,
  }
}
