const initialState: TodoList = {
  todoList: [
    {
      text: "string",
      complete: true,
    },
    {
      text: "string1",
      complete: true,
    },
    {
      text: "string2",
      complete: false,
    }
  ],
};


export const todoListReducer = (state: TodoList = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodoList = [...state.todoList];
      newTodoList.push(action.payload);
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case "CHECK_ITEM": {
      const newTodoList = state.todoList.map(todo => {
        if (todo === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case "DELETE_TODO": {
      const newTodoList = state.todoList.filter(todo => todo !== action.payload);
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    default:
      return state;
  }
}

