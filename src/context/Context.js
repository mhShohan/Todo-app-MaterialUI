import { createContext, useReducer } from 'react';

//initiate the action types to avoid spelling mistakes
const types = { ADD: 'ADD', DELETE: 'DELETE', UPDATE: 'UPDATE' };

// Create Context of the state and export
export const Context = createContext();

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload];

    case types.DELETE:
      return state.filter((item) => item.id !== action.payload);

    case types.UPDATE:
      return [
        ...state.filter((item) => item.id !== action.payload.id),
        action.payload
      ];

    default:
      return state;
  }
};

//initialize the state
const initState = [];

//create the store and wrap the parent component
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  // all the fuction and logic build up here

  const addTodo = (todo) => {
    dispatch({ type: types.ADD, payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: types.DELETE, payload: id });
  };

  const updateTodo = (todo) => {
    dispatch({ type: types.UPDATE, payload: todo });
  };
  return (
    <Context.Provider value={{ todos: state, addTodo, updateTodo, removeTodo }}>
      {children}
    </Context.Provider>
  );
};

export default Store;
