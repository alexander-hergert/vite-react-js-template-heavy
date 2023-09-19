import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "../thunks/todosThunk";

//Example slice remove what you not use
const todosSlice = createSlice({
  name: "todos",
  //initialState: [],
  initialState: {
    todos: [],
    isLoading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      //return state.todos.filter((todo) => todo.id !== action.payload);
      state.todos.forEach((todo, index) => {
        if (todo.id === action.payload) {
          state.todos.splice(index, 1);
        }
      });
    },
    updateTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
    clearTodos: (state, action) => {
      state.todos = [];
    },
    getTodos: (state, action) => {
      state = action.payload;
      return state;
    },
    //Async operations
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
        console.log(action.payload);
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.isLoading = false;
        throw new Error();
      });
  },
});

export const { addTodo, removeTodo, updateTodo, clearTodos, getTodos } =
  todosSlice.actions;

export default todosSlice;
