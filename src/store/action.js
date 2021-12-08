import { SET_TODO } from "./constant";
import { ADD_TODO } from "./constant";
import { DEL_TODO } from "./constant";
import { EDIT_TODO } from "./constant";

export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};
