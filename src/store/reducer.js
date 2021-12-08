import { SET_TODO } from "./constant";
import { ADD_TODO } from "./constant";
import { DEL_TODO } from "./constant";
import { EDIT_TODO } from "./constant";

const localTodos = JSON.parse(localStorage.getItem("localTodos"));

const initialState = {
  todos: localTodos,
  todoInput: "",
  display: [[true, false]],
};

//save to local
function saveLocal(state) {
  const jsonTodos = JSON.stringify(state.todos);
  localStorage.setItem("localTodos", jsonTodos);
}

function reducer(state, action) {
  let newState;
  const newDisplay = [...state.display];
  switch (action.type) {
    case SET_TODO:
      newState = {
        ...state,
        todoInput: action.payload,
      };
      break;
    case ADD_TODO:
      //prevent empty work
      if (action.payload === "") {
        newState = {
          ...state,
        };
      } else {
        newState = {
          ...state,
          todos: [...state.todos, action.payload],
          display: [...state.display, [true, false]],
        };
      }
      saveLocal(newState);
      break;
    case DEL_TODO:
      const newJob = [...state.todos];
      newJob.splice(action.payload, 1);
      newDisplay.splice(action.payload, 1);
      newState = {
        ...state,
        todos: newJob,
        display: newDisplay,
      };
      saveLocal(newState);
      break;
    // case EDIT_TODO:
    //   newDisplay[action.payload][0] = !newDisplay[action.payload][0];
    //   newDisplay[action.payload][1] = !newDisplay[action.payload][1];
    //   newState = {
    //     ...state,
    //     display: newDisplay,
    //   };
    //   break;
    default:
      throw new Error("INVALID ACTION");
  }
  return newState;
}

export { initialState };
export default reducer;
