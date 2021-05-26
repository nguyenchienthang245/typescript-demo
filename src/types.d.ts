interface Todo {
  text: string;
  complete: boolean;
}

interface TodoList {
  todoList: Todo[];
}

type Action = { type: string, payload?: any }

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;