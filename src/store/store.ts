import { createStore } from "redux"
import { todoListReducer } from "../reducers/todoListReducer"

export const store = createStore(todoListReducer)