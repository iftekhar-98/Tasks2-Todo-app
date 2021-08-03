import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    DELETE_TODO
  } from '../constants/action-types';
  
  const randomId = () => parseInt(Math.random() * 10000, 10);
  
  export const addTodo = text => ({ type: ADD_TODO, id: randomId(), text });
  
  export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
  
  export const deleteTodo = id => ({ type: DELETE_TODO, id});

  export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
  });