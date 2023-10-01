import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      if (title) {
        const singleTodo = {
          id: Date.now(),
          done: false,
          title,
          description,
        };
        const allTodos = [...state.todos, singleTodo];
        state.todos = [...allTodos];
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter(todo => +todo.id !== +id);
    },
    changeTodoStatus: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find(res => res.id === id);
      if (todo) {
        todo.done = !todo.done; 
      }
    },
  },
});

export const { addTodo, deleteTodo, changeTodoStatus } = TodoSlice.actions;

export default TodoSlice.reducer;