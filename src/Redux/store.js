import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "../Redux/todosSlice"

const Store = configureStore ({
  reducer: {
    todos: todosReducer,
  },
});

export default Store